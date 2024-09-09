/* NOTES: Must remember things . There are 2 types of scroll and effects.
          "Scroll Down" & "Scroll up". when "Scroll Down" marquee moves to left &
          When "Scroll up" marquee moves right.
*/

// window.addEventListener('wheel', (dets) => {
//   //yesma "deltaY" property hernu parxa scroll down garda deltaY:100, scrollup garda deltaY:-100 aauxa
//   // console.log(dets);

//   // GSAP code to move marquee to 'left' when 'SCROLL DOWN'
//   if (dets.deltaY > 0) {
//     gsap.to('.marquee', {
//       transform: 'translateX(-200%)',
//       repeat: -1,
//       duration: 3,
//       ease: 'none',  //bich ma jitter ko issue hataune
//     });

//     gsap.to('.marquee img', {
//       rotate: 180,
//     });
//   }
//   // GSAP code to move marquee to 'right' when 'SCROLL UP'
//   else {
//     gsap.to('.marquee', {
//       transform: 'translateX(0%)',
//       repeat: -1,
//       duration: 3,
//       ease: 'none',   //bich ma jitter ko issue hataune
//     });

//     gsap.to('.marquee img', {
//       rotate: 0,
//     });
//   }
// });

// --------------------- PRATICE ---------------------

window.addEventListener('wheel', (wheelData) => {
  console.log(wheelData);

  if (wheelData.deltaY > 0) {
    gsap.to('#move .marquee', {
      transform: 'translateX(-200%)',
      repeat: -1,
      duration: 3,
      ease: 'none',
    });

    gsap.to('.marquee img', {
      rotate: 180,
    });
  } else {
    gsap.to('#move .marquee', {
      transform: 'translateX(0)',
      repeat: -1,
      duration: 3,
      ease: 'none',
    });

    gsap.to('.marquee img', {
      rotate: 0,
    });
  }
});
