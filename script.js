// Рік у футері
document.getElementById('year').textContent = new Date().getFullYear();

// Відправка форми через Formspree без перезавантаження сторінки
(function () {
  var form = document.getElementById('lead-form');
  var msg = document.getElementById('form-msg');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Якщо ID ще не підставлено — підказка розробнику
    if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
      msg.className = 'form-msg err';
      msg.textContent = 'Форма не налаштована: вставте Formspree ID у index.html';
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    var original = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Надсилаємо…';
    msg.textContent = '';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          msg.className = 'form-msg ok';
          msg.textContent = 'Заявку надіслано! Звʼяжемося найближчим часом.';
        } else {
          return res.json().then(function (data) {
            throw new Error(
              data && data.errors ? data.errors.map(function (x) { return x.message; }).join(', ') : 'error'
            );
          });
        }
      })
      .catch(function () {
        msg.className = 'form-msg err';
        msg.textContent = 'Не вдалося надіслати. Напишіть нам в Instagram або на пошту.';
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = original;
      });
  });
})();
