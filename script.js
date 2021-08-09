console.log('Hello, Select your flavour!');

// DECLARATIONS //

// >> tooling below >>

// function statements
const byId = id => document.getElementById(id);
const create = el => document.createElement(el);
// function expression
function getIceCreamImageFromCdn(flavour, method) {
  return `${cdn}${flavour}-${method}.png`;
}
// << tooling above <<

// get elements that are to be manipulated
const flavourSelector = byId('iceCreamFlavour');
const methodSelector = byId('methodSelector');
const selectedOptionDisplay = byId('selectedOptionDisplay');

// create img element tag
const img = create('img');

/* Method 1: Switch */

// function expression
function methodOne(caseVariable) {
  switchMethod = 'methodOne';
  switch (caseVariable) {
    case 'chocolate':
      console.log('Method 1: You selected chocolate');
      fullfillIceCreamOrder('chocolate', 'methodOne');
      break;
    case 'strawberry':
      console.log('Method 1: You selected strawberry');
      fullfillIceCreamOrder('strawberry', 'methodOne');
      break;
    case 'vanilla':
      console.log('Method 1: You selected vanilla');
      fullfillIceCreamOrder('vanilla', 'methodOne');
      break;
    case 'caramel':
      console.log('Method 1: You selected caramel');
      fullfillIceCreamOrder('caramel', 'methodOne');
      break;
    default:
      throw new error('select a ice-cream');
  }
}

/* Method 2: Processing cases by specialized operations */

// object of anonymous functions
function methodTwo(caseVariable) {
  switchMethod = 'methodTwo';
  const noSwitch = {
    chocolate: function() {
      fullfillIceCreamOrder('chocolate', 'methodTwo');
    },
    strawberry: function() {
      console.log('Mehtod 2: You selected strawberry');
      fullfillIceCreamOrder('strawberry', 'methodTwo');
    },
    vanilla: function() {
      console.log('Mehtod 2: You selected vanilla');
      fullfillIceCreamOrder('vanilla', 'methodTwo');
    },
    caramel: function() {
      fullfillIceCreamOrder('caramel', 'methodTwo');
      console.log('Mehtod 2: You selected caramel');
    }
  };
  noSwitch[caseVariable]();
}

function fullfillIceCreamOrder(flavour, method) {
  // set image attributes
  img.alt = `${flavour} flavoured ice cream from method ${method}`;
  img.src = getIceCreamImageFromCdn(flavour, method);
  img.classList.add('img-fluid');
  img.style.height = '200px';
  // if img not appended append image
  if (selectedOptionDisplay.children.length === 0) {
    selectedOptionDisplay.appendChild(img);
  }
}

function evaluate(event) {
  if (methodSelector.value === 'methodOne') {
    methodOne(event.target.value);
  } else if (methodSelector.value === 'methodTwo') {
    methodTwo(event.target.value);
  }
}

// EXECUTION //

[flavourSelector, methodSelector].forEach(selector =>
  selector.addEventListener('change', evaluate)
);
