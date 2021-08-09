// ignore below

const cdn = 'https://cdn.softwarecraft.co.za/ice-cream-shop/';
(function() {
  // document.body.classList.add('container');
  // Array.from(document.body.children).forEach(child => {});

  const footer = document.createElement('footer');
  ['fixed-bottom', 'shadow', 'py-3'].forEach(className =>
    footer.classList.add(className)
  );
  footer.innerHTML = `
    <div class="text-center">
      <a target="_blank"
        href="https://github.com/CliffCrerar/ice-cream-shop-switch-demo"><span class="bi bi-github"></span> View on
        github </a><br>
      <a target="_blank"
        href="https://github.com/CliffCrerar/ice-cream-shop-switch-demo"><span  class="bi bi-lightning"></span> View on
        Stackblitz</a><br>
      <a target="_blank" href="https://cliffcrerar.tech"><small>About the Author</a>
    </small>
    </div>
  `;
  document.body.appendChild(footer);
  return;
})();

// ignore above
