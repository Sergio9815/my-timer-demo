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

$('#btn-1').on('click', function (event) {
  event.preventDefault();
  granimInstance.changeState('default-state');
  setClass('#btn-1')
});
$('#btn-2').on('click', function (event) {
  event.preventDefault();
  granimInstance.changeState('violet-state');
  setClass('#btn-2')
});
$('#btn-3').on('click', function (event) {
  event.preventDefault();
  granimInstance.changeState('orange-state');
  setClass('#btn-3')
});
$('#btn-4').on('click', function (event) {
  event.preventDefault();
  granimInstance.changeState('final-state');
  setClass('#btn-4')
});

function setClass(element) {
  $('.canvas-interactive-wrapper a').removeClass('active');
  $(element).addClass('active');
};