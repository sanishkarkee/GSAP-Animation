// --------- Normal cursor animation---------
// var main = document.querySelector('#main');
// var cursor = document.querySelector('#cursor');

// main.addEventListener('mousemove', (dets) => {
//   gsap.to('#cursor', {
//     x: dets.x,
//     y: dets.y,
//     duration: 1,
//     ease: 'back.ou',
//   });
// });

// --------- Advanced cursor animation---------
let main = document.querySelector('#main');
let cursor = document.querySelector('#cursor');
let imageDiv = document.querySelector('#image');

// Mouse movement to update cursor position
main.addEventListener('mousemove', (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

// On mouse enter, enlarge the cursor and show "View more"
imageDiv.addEventListener('mouseenter', () => {
  imageDiv.innerHTML = 'View more';
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: '#ffffff8a',
  });
});

// On mouse leave, reset cursor scale and remove text
imageDiv.addEventListener('mouseleave', () => {
  imageDiv.innerHTML = '';
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: '#fff',
  });
});
