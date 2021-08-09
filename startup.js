// ignore below

const cdn = 'https://cdn.softwarecraft.co.za/ice-cream-shop/';
(function(mainLogic) {
  // document.body.classList.add('container');
  // Array.from(document.body.children).forEach(child => {});

  const footer = document.createElement('footer');
  [
    'fixed-bottom',
    'bg-dark',
    'shadow',
    'p-3',
    'text-light',
    'd-flex',
    'justify-content-between',
    'align-items-center'
  ].forEach(className => footer.classList.add(className));
  footer.innerHTML = `
    <div>      
    <a style="font-size:1.3em;" target="_blank"            href="https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/"><i class="bi bi-code-slash"></i> Inpspired by this Article</a>
    </div>
    <div class="text-center"> 
      <a target="_blank"
        href="https://github.com/CliffCrerar/ice-cream-shop-switch-demo"><i class="bi bi-github"></i> View on
        github </a><br>
      <a target="_blank"
        href="https://github.com/CliffCrerar/ice-cream-shop-switch-demo"><i  class="bi bi-lightning"></i> View on
        Stackblitz</a><br>

      <a target="_blank" href="https://cliffcrerar.tech"><small>About the Author</a>
    </small>
    </div>
  `;
  document.body.appendChild(footer);
  return mainLogic();
})(executeMainLogic);

// ignore above
