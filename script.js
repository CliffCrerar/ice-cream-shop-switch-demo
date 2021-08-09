console.log('Hello, Select your flavour!');

function executeMainLogic() {
  // DECLARATIONS //

  // function expression
  function getIceCreamImageFromCdn(flavour, method) {
    return `${cdn}${flavour}-${method}.png`;
  }

  // >> tooling below >>

  // function statements
  const byId = id => document.getElementById(id);
  const create = el => document.createElement(el);

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
    // using return instead of break;
    switch (caseVariable) {
      case 'chocolate':
        return fullfillIceCreamOrder('chocolate', 'methodOne');
      case 'strawberry':
        return fullfillIceCreamOrder('strawberry', 'methodOne');
      case 'vanilla':
        return fullfillIceCreamOrder('vanilla', 'methodOne');
      case 'caramel':
        return fullfillIceCreamOrder('caramel', 'methodOne');
      default:
        throw new error('select a ice-cream');
    }
  }

  /* Method 2: Processing cases by specialized operations */

  // function expression
  function methodTwo(caseVariable) {
    switchMethod = 'methodTwo';
    // object of anonymous functions
    const noSwitch = {
      chocolate: function() {
        return fullfillIceCreamOrder('chocolate', 'methodTwo');
      },
      strawberry: function() {
        return fullfillIceCreamOrder('strawberry', 'methodTwo');
      },
      vanilla: function() {
        return fullfillIceCreamOrder('vanilla', 'methodTwo');
      },
      caramel: function() {
        return fullfillIceCreamOrder('caramel', 'methodTwo');
      }
    };
    return noSwitch[caseVariable]();
  }

  function fullfillIceCreamOrder(flavour, method) {
    // set image attributes
    img.alt = `${flavour} flavoured ice cream from method ${method}`;
    img.src = getIceCreamImageFromCdn(flavour, method);
    // if img not appended append image
    if (selectedOptionDisplay.children.length === 0) {
      selectedOptionDisplay.appendChild(img);
    }
    return;
  }

  function evaluate() {
    if (methodSelector.value === 'methodOne') {
      return methodOne(flavourSelector.value);
    } else if (methodSelector.value === 'methodTwo') {
      return methodTwo(flavourSelector.value);
    }
  }

  // EXECUTION //

  // add static img attributes
  img.classList.add('img-fluid');
  img.style.height = '200px';

  // add eventlistener to both selectors
  [flavourSelector, methodSelector].forEach(selector =>
    selector.addEventListener('change', evaluate)
  );

  /**
 * Special Note
 
 analysing all the logic closely will you will notice that the switch and the object of functions is only here as a demonstration of the 2 facts.

 However if you are a sharp code writer with the goal to develop the most efficient , effective and concise logic patterns you will notice that the same result can be acheived without the use of the 2 decision methods and by only a slight tweak to the function evaluate function since it is the getIceCreamImageFromCdn function's job to change the img display all that is required in the evaulate function is to get the current values of the 2 selectors and then pass it into the getIceCreamImageFromCdn. Thereby making the functions methodOne and methodTow redundant.

 */
}
