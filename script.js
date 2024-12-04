const toggles = document.querySelectorAll('.cart1 input[type="radio"]');

  toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      document.querySelectorAll('.cart1').forEach(cart => {
        cart.classList.remove('open');
      });

      if (toggle.checked) {
        toggle.parentElement.classList.add('open');
      }
    });
});
