// var menu = document.querySelector('#nav i');
// var cross = document.querySelector('#full i');

// var tl = gsap.timeline();

// tl.to('#full', {
//   right: '0',
//   duration: 0.5,
// });

// tl.from('#full h4', {
//   x: 150,
//   duration: 0.6,
//   stagger: 0.2,
//   opacity: 0,
// });

// tl.from('#full i', {
//   opacity: '0',
// });

// tl.pause(); // Pause the timeline (means: animation within that timeline) initially

// menu.addEventListener('click', () => {
//   tl.play();
// });

// cross.addEventListener('click', () => {
//   tl.reverse();
// });

// ----------------------------PRATICE---------------------------------

var menu = document.querySelector('#nav i');
var closeBtn = document.querySelector('#full i');

var tl = gsap.timeline();
/*
STEP 1: btn click gare paxi k hunxa tesko animation haru milaune, tara initially
 tyo animation chai active hudaina i.e. animation Pause() ma hunxa */

tl.to('#full', {
  right: 0,
  duration: 0.5,
});

tl.from('#full h4', {
  x: 150,
  duration: 0.4,
  stagger: 0.2,
  opacity: 0,
});

tl.from('#full i', {
  opacity: 0,
});

tl.pause(); //Initiall animation pause hunxa ,,hamburger click bhayesi matra animation Play() hunxa

// menu items show garna
menu.addEventListener('click', () => {
  tl.play();
});

closeBtn.addEventListener('click', () => {
  tl.reverse();
});
