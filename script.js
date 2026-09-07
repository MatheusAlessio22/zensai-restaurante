/* ==========================================================================
   ZENSAI — SABOR ORIENTAL
   script.js — navbar, drawer mobile, reveal on scroll
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. NAVBAR — efeito blur ao rolar
     ------------------------------------------------------------------------ */
  function initHeaderScroll() {
    var header = document.getElementById('header');
    if (!header) return;

    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ------------------------------------------------------------------------
     2. DRAWER MOBILE
     ------------------------------------------------------------------------ */
  function initDrawer() {
    var toggle = document.getElementById('nav-toggle');
    var drawer = document.getElementById('drawer');
    var overlay = document.getElementById('drawer-overlay');
    var closeBtn = document.getElementById('drawer-close');
    if (!toggle || !drawer || !overlay) return;

    function openDrawer() {
      drawer.classList.add('is-open');
      overlay.classList.add('is-visible');
      drawer.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('drawer-open');
    }

    function closeDrawer() {
      drawer.classList.remove('is-open');
      overlay.classList.remove('is-visible');
      drawer.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('drawer-open');
    }

    toggle.addEventListener('click', function () {
      var isOpen = drawer.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });

    overlay.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
    });
  }

  /* ------------------------------------------------------------------------
     3. REVEAL ON SCROLL
     ------------------------------------------------------------------------ */
  function initReveal() {
    var items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { observer.observe(el); });

    // Rede de segurança: um scroll instantâneo (barra arrastada, tecla End) pode
    // pular um elemento sem que o IntersectionObserver chegue a registrar a
    // interseção. Ao parar de rolar, revela qualquer item que já tenha sido
    // ultrapassado (topo acima do fim do viewport) para que nada fique invisível.
    var scrollTimer = null;
    function revealPassedItems() {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    }
    window.addEventListener('scroll', function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(revealPassedItems, 200);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     4. RODAPÉ — ano atual
     ------------------------------------------------------------------------ */
  function initFooterYear() {
    var el = document.getElementById('current-year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ------------------------------------------------------------------------
     INIT
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    initHeaderScroll();
    initDrawer();
    initReveal();
    initFooterYear();
  });
})();
