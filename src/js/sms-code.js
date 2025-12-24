document.addEventListener('DOMContentLoaded', () => {
(function () {
  const root = document.getElementById('sms-input');
  if (!root) return;

  const len = Number(root.dataset.len || 5);
  const input = root.querySelector('.sms-input__input');
  const cells = Array.from(root.querySelectorAll('.sms-input__cell'));

  function render() {
    const v = input.value;
    for (let i = 0; i < len; i++) {
      cells[i].textContent = v[i] ?? '';
      cells[i].classList.toggle('is-active', document.activeElement === input && i === Math.min(v.length, len - 1));
    }
    // если пусто — активная первая
    if (document.activeElement === input && v.length === 0) {
      cells[0].classList.add('is-active');
    }
  }

  function sanitize() {
    input.value = (input.value || '').replace(/\D/g, '').slice(0, len);
  }

  root.addEventListener('click', () => input.focus());

  input.addEventListener('input', () => {
    sanitize();
    render();
    if (input.value.length === len) {
      
    }
  });

  input.addEventListener('focus', render);
  input.addEventListener('blur', () => {
    cells.forEach(c => c.classList.remove('is-active'));
  });

  input.addEventListener('paste', () => {
    requestAnimationFrame(() => {
      sanitize();
      render();
    });
  });

  render();
})();
})