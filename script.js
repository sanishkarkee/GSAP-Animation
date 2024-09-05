gsap.from('#page1 #box', {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

// gsap.from('#page2 #box', {
//   scale: 0,
//   // delay: 1,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: '#page2 #box',
//     scroller: 'body',
//     markers: true,
//     start: 'top 50%', //jaba trigger element i.e. ('#page2 #box') chai vertical viewport height ko 50% pugxa taba animation start hunxa
//   },
// });

// -------------------------------------------------------------------------

// When there are multiple content inside div element
// gsap.from('#page2 h1', {
//   opacity: 0,
//   duration: 2,
//   x: 500,

//   scrollTrigger: {
//     trigger: '#page2 h1',
//     scroller: 'body',
//     markers: true,
//     start: 'top 50%',
//   },
// });

// gsap.from('#page2 h2', {
//   opacity: 0,
//   duration: 2,
//   x: -500,

//   scrollTrigger: {
//     trigger: '#page2 h2',
//     scroller: 'body',
//     markers: true,
//     start: 'top 50%',
//   },
// });

// -------------------------------------------------------------------------

// gsap.from('#page2 #box', {
//   opacity: 0,
//   scale: 0,
//   duration: 1,
//   rotate: 720,

//   scrollTrigger: {
//     trigger: '#page2 #box', //OR trigger: '#page2' matra lekhda ni hunxa
//     scroller: 'body',
//     markers: true,
//     start: 'top 60%',
//     end: 'top 10%',
//     scrub: 2,
//     pin: true,
//   },
// });

// ----------------------------------PIN-----------------------------------
// gsap.to('#page2 h1', {
//   transform: 'translateX(-195%)',

//   scrollTrigger: {
//     trigger: '#page2 ',
//     scroller: 'body',
//     markers: true,
//     start: 'top 0%', // section complete screen ma aaye paxi matra animation start garna lai
//     end: 'top -100%',
//     scrub: 2,
//     pin: true,
//   },
// });

// ----Pratice----
gsap.to('#page2 h1', {
  transform: 'translateX(-220%)',

  scrollTrigger: {
    trigger: '#page2',
    scroller: 'body',
    markers: true,
    start: 'top 0%',
    end: 'top -150%',
    scrub: true,
    pin: true,
  },
});

// PAGE3 :Video scroll trigger ,SCALE
gsap.to('#page3 video', {
  scale: 0.7,
  opacity: 1,

  scrollTrigger: {
    trigger: '#page3',
    scroller: 'body',
    markers: true,
    start: 'top 0%',
    end: 'top -100%',
    scrub: true,
    pin: true,
  },
});
