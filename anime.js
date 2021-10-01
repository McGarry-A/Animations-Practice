// const { path } = require("animejs");

anime({
  targets: '.red',
  translateY: 250,
  rotate: '1turn',
  duration: 3000,
  loop: true
});

anime({
  targets: '.yellow',
  translateX: 250,
  rotate: '2turn',
  duration: 3000,
  loop: true
});

const blueGreenBoxes = document.getElementsByClassName('diagnal')

anime({
  targets: '.diagnal',
  translateX: 250,
  translateY: 250,
  duration: 3000,
  rotate: '4turn',
  loop: true
})

anime({
  targets: '.toCircle',
  translateX: 250,
  borderRadius: ['0%','0%','20%','50%'],
  backgroundColor: '#800080',
  duration: 3000,
  loop: true
})


const path = anime.path('#demo-svg path');

anime({
  targets: '.ball',
  translateX: path('x'),
  translateY: path('y'),
  duration: 5000,
  loop: true,
  easing: 'linear' 
});

anime({
  targets: '#demo-svg2 polygon',
  points: [
    {value: '203,302,302,449,498,450,497,448,540,328,406,224'},
    {value: '363 338,315 354,321 383,385 393,416 370,398 357'}
  ],
  easing: 'easeOutBounce',
  duration: 2500,
  loop: true,
  direction: 'alternate'
});