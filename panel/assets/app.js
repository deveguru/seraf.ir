// Seraf panel: small progressive enhancements (no dependencies).
(function () {
  'use strict';

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-toggle="sidebar"]');
    if (t) {
      document.body.classList.toggle('nav-open');
      return;
    }
    var fill = e.target.closest('[data-fill]');
    if (fill) {
      var input = document.getElementById(fill.getAttribute('data-fill'));
      if (input) {
        input.value = Number(fill.getAttribute('data-value')).toLocaleString('en-US');
        document.querySelectorAll('.chip.on').forEach(function (c) { c.classList.remove('on'); });
        fill.classList.add('on');
        input.focus();
      }
      return;
    }
    var copy = e.target.closest('[data-copy]');
    if (copy) {
      var el = document.querySelector(copy.getAttribute('data-copy'));
      if (el && navigator.clipboard) {
        navigator.clipboard.writeText(el.textContent.trim()).then(function () {
          copy.classList.add('on');
          setTimeout(function () { copy.classList.remove('on'); }, 1500);
        });
      }
    }
  });

  // Confirmation dialogs for destructive / paid actions.
  document.addEventListener('submit', function (e) {
    var msg = e.target.getAttribute('data-confirm');
    if (msg && !window.confirm(msg)) {
      e.preventDefault();
      return;
    }
    var btn = e.target.querySelector('button:not([type="button"])');
    if (btn) {
      setTimeout(function () { btn.disabled = true; }, 0);
    }
  });

  // Money inputs: accept Persian digits and show thousands separators.
  var fa = '۰۱۲۳۴۵۶۷۸۹', ar = '٠١٢٣٤٥٦٧٨٩';
  function latin(s) {
    return s.replace(/[۰-۹]/g, function (d) { return fa.indexOf(d); })
            .replace(/[٠-٩]/g, function (d) { return ar.indexOf(d); });
  }
  document.querySelectorAll('[data-money]').forEach(function (input) {
    input.addEventListener('input', function () {
      var digits = latin(input.value).replace(/\D/g, '');
      input.value = digits ? Number(digits).toLocaleString('en-US') : '';
    });
  });
  document.querySelectorAll('.otp-input').forEach(function (input) {
    input.addEventListener('input', function () {
      input.value = latin(input.value).replace(/\D/g, '');
      if (input.value.length === Number(input.maxLength)) {
        input.form.requestSubmit ? input.form.requestSubmit() : input.form.submit();
      }
    });
  });

  // Resend-code countdown.
  document.querySelectorAll('[data-countdown]').forEach(function (btn) {
    var left = Number(btn.getAttribute('data-countdown'));
    var label = btn.textContent;
    btn.disabled = true;
    var timer = setInterval(function () {
      left--;
      btn.textContent = label + ' (' + left + ')';
      if (left <= 0) {
        clearInterval(timer);
        btn.disabled = false;
        btn.textContent = label;
      }
    }, 1000);
  });
})();
