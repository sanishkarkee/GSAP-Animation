/*NOTE:
 1) yesma change hune bhaneko center ko (x,y) value matra ho
    starting ra ending point change hudaina
 2) overall bujda yesma 2ta actions hunxa i.e.
   # "string" div bhitra mouse cursor lagda
   # "string" div bahira mouse cursor lagda
 3) LOGIC: string bhitra mouse lagda "path" ko value change garne
           string bahira cursor lagda  finalPath ko value set garne
    */

// var path = `M 10 100 Q 500 100 990 100`;

// var finalPath = `M 10 100 Q 500 100 990 100`;

// var string = document.querySelector('#string');

// string.addEventListener('mousemove', (dets) => {
// //'dets' bata dherai data aauxa tara yaha use hune bhaneko 'X','Y' axis ko value ho
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
/*NOTE:
 1) yesma change hune bhaneko center ko (x,y) value matra ho
    starting ra ending point change hudaina
 2) overall bujda yesma 2ta actions hunxa i.e.
   # "string" div bhitra mouse cursor lagda
   # "string" div bahira mouse cursor lagda
 3) LOGIC: string bhitra mouse lagda "path" ko value change garne
           string bahira cursor lagda  finalPath ko value set garne
    */

// let path = `M 10 100 Q 500 100 990 100`;

// let finalPath = `M 10 100 Q 500 100 990 100`;

// const string = document.querySelector('#string');

// string.addEventListener('mousemove', (receivedValue) => {
//   path = `M 10 100 Q ${receivedValue.x} ${receivedValue.y} 990 100`;

//   gsap.to('svg path', {
//     attr: { d: path },
//     duration: 0.2,
//     ease: 'power3.out',
//   });
// });

// string.addEventListener('mouseleave', (receivedValue) => {
//   gsap.to('svg path', {
//     attr: { d: finalPath },
//     duration: 4,
//     ease: 'elastic.out(1.5,0.1)',
//   });
// });

// ---------------------PRATICE 2--------------------------

let path = `M 10 100 Q 500 100 990 100`;

let finalPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector('#string');

string.addEventListener('mousemove', (mousemoveBataAakoData) => {
  //'mousemoveBataAakoData' bata dherai data aauxa tara ya use hune bhaneko 'X','Y' axis ko value ho

  path = `M 10 100 Q ${mousemoveBataAakoData.x} ${mousemoveBataAakoData.y} 990 100`;

  gsap.to('svg path', {
    attr: { d: path },
    duration: 0.2,
    ease: 'power3.out',
  });
});

string.addEventListener('mouseleave', (mouseleaveBataAakoData) => {
  gsap.to('svg path', {
    attr: { d: finalPath },
    duration: 4,
    ease: 'elastic.out(1.5, 0.1)',
  });
});
