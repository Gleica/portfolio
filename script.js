(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('nav--open');
      var open = nav.classList.contains('nav--open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '×' : '≡';
    });
    // Close menu when a link is clicked (mobile)
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '≡';
      });
    });
  }

  // Form stub — replace with real endpoint (e.g. Formspree, Basin) when ready
  var form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var hint = form.querySelector('.form-hint');
      if (hint) hint.textContent = 'Formulário ainda não conectado a um backend. Use gleica.tech@gmail.com enquanto isso.';
    });
  }
})();
