const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')


var granimInstance = new Granim({
  element: '#canvas-interactive',
  name: 'interactive-gradient',
  elToSetClassOn: '.canvas-interactive-wrapper',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  stateTransitionSpeed: 500,
  states: {
    "default-state": {
      gradients: [
        ['#B3FFAB', '#12FFF7'],
        ['#ccffbd', '#7eca9c'],
        ['#1A2980', '#26D0CE']
      ],
      transitionSpeed: 10000
    },
    "violet-state": {
      gradients: [
        ['#9D50BB', '#6E48AA'],
        ['#b4aee8', '#8E54E9']
      ],
      transitionSpeed: 2000
    },
    "orange-state": {
      gradients: [
        ['#ffab73', '#f56a79'],
        ['#ffcbcb', '#eff48e']
      ],
      transitionSpeed: 1000
    },
    "final-state": {
      gradients: [['#16c79a', '#949cdf']],
      transitionSpeed: 1000
    }
  }
});

btn1.addEventListener('click', (e) => {
  e.preventDefault();
  granimInstance.changeState('default-state');
})

btn2.addEventListener('click', (e) => {
  e.preventDefault();
  granimInstance.changeState('violet-state');
})

btn3.addEventListener('click', (e) => {
  e.preventDefault();
  granimInstance.changeState('orange-state');
})

btn4.addEventListener('click', (e) => {
  e.preventDefault();
  granimInstance.changeState('final-state');
})
