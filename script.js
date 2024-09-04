// gsap.to('#box1', {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 90,
//   backgroundColor: 'green',
//   borderRadius: '50%',
// });

// gsap.from('#box2', {
//   x: 500,
//   duration: 2,
//   delay: 1,
//   borderRadius: '50%',
// });

// gsap.from('h1', {
//   opacity: 0,
//   duration: 2,
//   delay: 1,
//   color: 'green',
//   y: 200,
//   stagger: -4,
// });

// gsap.to('#box', {
//   x: 1200,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   repeat: 2,
//   yoyo: true,
// });

// gsap.to('#box1', {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// gsap.to('#box2', {
//   x: 1500,
//   backgroundColor: 'yellow',
//   duration: 1.5,
//   delay: 2.5, //case: box1 paxi matra box2 suru garna lai, box1 1.5 sec samma chalxa ani 1 sec paxi matra start hunxa so boz 2 lai 1.5+1= 2.5 sec paxi matra suru garda hunxa
// });

// gsap.to('#box3', {
//   x: 1500,
//   scale: 0.5,
//   borderRadius: '50%',
//   duration: 1.5,
//   delay: 4, // yo pani box 2 ko 2.5+1.5=4 garera aako ho
// });

// --------TIMELINE--------
// var tl = gsap.timeline();

// tl.to('#box1', {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// tl.to('#box2', {
//   x: 1500,
//   backgroundColor: 'yellow',
//   duration: 1.5,
// });

// tl.to('#box3', {
//   x: 1500,
//   scale: 0.5,
//   borderRadius: '50%',
//   duration: 1.5,
// });

// OR

var tl = gsap.timeline();

tl.from('h2', {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from('h4', {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

tl.from('h1', {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
