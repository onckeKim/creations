/* =====================================================================
   Creations — site behaviour
   Progressive enhancement only: the page is fully usable without JS.
   ===================================================================== */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------- Image fallback --------------------------------------- */
  // If a photo fails to load, swap in the on-brand lily artwork so the
  // layout never shows a broken image.
  $$('img[data-fallback]').forEach(function (img) {
    img.addEventListener('error', function () {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = '1';
      var picture = img.closest('picture');
      if (picture) $$('source', picture).forEach(function (s) { s.remove(); });
      img.removeAttribute('srcset');
      img.src = '/assets/img/placeholder.svg';
    });
    if (img.complete && img.naturalWidth === 0 && img.src) img.dispatchEvent(new Event('error'));
  });

  /* ---------- Header: scrolled state + mobile nav ------------------- */
  var header = $('.site-header');
  var toggle = $('.nav-toggle');
  var nav = $('#primary-nav');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function setMenu(open) {
    header.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) {
      var first = $('.nav__link', nav);
      if (first) first.focus();
    }
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 961px)').addEventListener('change', function (e) { if (e.matches) setMenu(false); });
  }

  /* ---------- Active nav link on scroll ---------------------------- */
  var navLinks = $$('.nav__link').filter(function (a) { return /^#./.test(a.getAttribute('href')); });
  var sections = navLinks.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          var active = a.getAttribute('href') === '#' + entry.target.id;
          a.classList.toggle('is-active', active);
          if (active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Scroll reveal ---------------------------------------- */
  var revealEls = $$('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Count-up numbers ------------------------------------- */
  var counters = $$('[data-count]');
  if (counters.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);
        var el = entry.target, target = parseInt(el.dataset.count, 10), start = null, dur = 1400;
        function tick(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---------- Lightbox --------------------------------------------- */
  var lightbox = $('#lightbox');
  if (lightbox) {
    var lbImg = $('.lightbox__img', lightbox);
    var lbCap = $('.lightbox__caption', lightbox);
    var lbClose = $('.lightbox__close', lightbox);
    var lbPrev = $('.lightbox__nav--prev', lightbox);
    var lbNext = $('.lightbox__nav--next', lightbox);
    var triggers = $$('[data-lightbox]');
    var current = -1, lastFocus = null;

    function visibleTriggers() {
      return triggers.filter(function (t) { var item = t.closest('.masonry__item'); return !item || !item.classList.contains('is-hidden'); });
    }
    function show(index) {
      var list = visibleTriggers();
      if (!list.length) return;
      current = (index + list.length) % list.length;
      var btn = list[current], img = $('img', btn), cap = $('.gallery__caption', btn);
      var large = img.currentSrc || img.src;
      lbImg.src = large.replace(/w=\d+/, 'w=1600');
      lbImg.alt = img.alt;
      lbCap.textContent = cap ? cap.textContent.replace(/\s+/g, ' ').trim() : '';
      lbPrev.hidden = lbNext.hidden = list.length < 2;
    }
    function open(index) {
      lastFocus = document.activeElement;
      lightbox.hidden = false;
      document.body.classList.add('lightbox-open');
      show(index);
      lbClose.focus();
    }
    function close() {
      lightbox.hidden = true;
      document.body.classList.remove('lightbox-open');
      lbImg.src = '';
      if (lastFocus) lastFocus.focus();
    }
    triggers.forEach(function (t) {
      t.addEventListener('click', function () { open(visibleTriggers().indexOf(t)); });
    });
    lbImg.addEventListener('error', function () { if (lbImg.src && !/placeholder/.test(lbImg.src)) lbImg.src = '/assets/img/placeholder.svg'; });
    lbClose.addEventListener('click', close);
    lbPrev.addEventListener('click', function () { show(current - 1); });
    lbNext.addEventListener('click', function () { show(current + 1); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(current - 1);
      else if (e.key === 'ArrowRight') show(current + 1);
      else if (e.key === 'Tab') {
        // keep focus inside the dialog
        var focusable = $$('button:not([hidden])', lightbox);
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    // Touch swipe
    var startX = null;
    lightbox.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) show(dx > 0 ? current - 1 : current + 1);
      startX = null;
    }, { passive: true });
  }

  /* ---------- Enquiry form ----------------------------------------- */
  var form = $('#enquiry-form');
  if (form) {
    var status = $('.form__status', form);
    var WHATSAPP = '27839917808';

    function setError(input, msg) {
      var field = input.closest('.field');
      var err = $('.field__error', field);
      field.classList.toggle('is-invalid', !!msg);
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (err) { err.textContent = msg || ''; if (msg) input.setAttribute('aria-describedby', err.id); }
    }
    function validate() {
      var ok = true, firstBad = null;
      $$('[required]', form).forEach(function (input) {
        var msg = '';
        if (input.type === 'checkbox') { if (!input.checked) msg = 'Please tick this box so we may contact you.'; }
        else if (!input.value.trim()) msg = 'This field is required.';
        else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())) msg = 'Please enter a valid email address.';
        setError(input, msg);
        if (msg) { ok = false; firstBad = firstBad || input; }
      });
      if (firstBad) firstBad.focus();
      return ok;
    }
    $$('input, select, textarea', form).forEach(function (el) {
      el.addEventListener('blur', function () { if (el.required) validate1(el); });
      el.addEventListener('input', function () { if (el.closest('.field').classList.contains('is-invalid')) validate1(el); });
    });
    function validate1(input) {
      var msg = '';
      if (input.type === 'checkbox') { if (!input.checked) msg = 'Please tick this box so we may contact you.'; }
      else if (!input.value.trim()) msg = 'This field is required.';
      else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())) msg = 'Please enter a valid email address.';
      setError(input, msg);
    }

    function whatsappFallback(data) {
      var lines = [
        'Hello Creations, I would like to enquire about an event.',
        'Name: ' + data.get('name'),
        'Email: ' + data.get('email'),
        data.get('phone') ? 'Phone: ' + data.get('phone') : null,
        'Event: ' + data.get('event_type'),
        data.get('event_date') ? 'Date: ' + data.get('event_date') : null,
        data.get('guests') ? 'Guests: ' + data.get('guests') : null,
        'Details: ' + data.get('message')
      ].filter(Boolean);
      return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(lines.join('\n'));
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.classList.remove('is-error');
      status.textContent = '';
      if (!validate()) { status.classList.add('is-error'); status.textContent = 'Please check the highlighted fields.'; return; }

      var data = new FormData(form);
      var btn = $('button[type="submit"]', form);
      var endpoint = form.getAttribute('action');
      var configured = endpoint && !/YOUR_FORM_ID/.test(endpoint);

      if (!configured) {
        // No email endpoint configured yet: hand the enquiry to WhatsApp instead.
        window.open(whatsappFallback(data), '_blank', 'noopener');
        form.classList.add('is-sent');
        status.textContent = 'Thank you! We have opened WhatsApp with your enquiry ready to send. We look forward to hearing from you.';
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Sending…';
      fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (res) { if (!res.ok) throw new Error('Request failed'); })
        .then(function () {
          form.classList.add('is-sent');
          status.textContent = 'Thank you! Your enquiry has been sent. We will be in touch within one working day.';
        })
        .catch(function () {
          status.classList.add('is-error');
          status.innerHTML = 'Sorry, something went wrong sending your message. Please <a href="' + whatsappFallback(data) + '" target="_blank" rel="noopener noreferrer">send it via WhatsApp</a> or call 083 991 7808.';
        })
        .finally(function () { btn.disabled = false; btn.textContent = 'Send Enquiry'; });
    });
  }

  /* ---------- Misc --------------------------------------------------- */
  var year = $('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Set min date on the event date picker to today
  var dateInput = $('#event-date');
  if (dateInput) dateInput.min = new Date().toISOString().slice(0, 10);
})();
