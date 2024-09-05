//NOTE: yesma change hune bhaneko center ko (x,y) value matra ho,starting ra ending point change hudaina

// var path = `M 10 100 Q 500 100 990 100`;

// var finalPath = `M 10 100 Q 500 100 990 100`;

// var string = document.querySelector('#string');

// string.addEventListener('mousemove', (dets) => {
//   // (dets.x) => x-axis value    &&    (dets.y) => y-axis value
//   path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

//   gsap.to('svg path', {
//     attr: { d: path },
//     duration: 0.2,
//     ease: 'power3.out',
//   });
// });

// string.addEventListener('mouseleave', () => {
//   gsap.to('svg path', {
//     attr: { d: finalPath },
//     duration: 1.5,
//     ease: 'elastic.out(1.5,0.1)',
//   });
// });

// -------------------------PRATICE-------------------------
//Note: yesma change hune bhaneko center ko (x,y) value matra ho
//starting ra ending point change hudaina

let path = `M 10 100 Q 500 100 990 100`;

let finalPath = `M 10 100 Q 500 100 990 100`;

const string = document.querySelector('#string');

string.addEventListener('mousemove', (receivedValue) => {
  path = `M 10 100 Q ${receivedValue.x} ${receivedValue.y} 990 100`;

  gsap.to('svg path', {
    attr: { d: path },
    duration: 0.2,
    ease: 'power3.out',
  });
});

string.addEventListener('mouseleave', (receivedValue) => {
  gsap.to('svg path', {
    attr: { d: finalPath },
    duration: 4,
    ease: 'elastic.out(1.5,0.1)',
  });
});
