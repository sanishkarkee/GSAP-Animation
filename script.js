//TODO: Split word "Sheriyans" into individual letters in to each <span</span> tag and apply animation

// 1) Select whole element  => <h1>Sheriyans</h1>
var h1 = document.querySelector('h1');

// 2) h1 element bhitra ko text select garxa  =>  [ Sheriyans ]
var h1Text = h1.textContent;

// 3) breaking whole sentences into individual words  =>  s,h,e,r,y,i,a,n,s
var splittedText = h1Text.split(''); // break on the basis of nothing

var halfValue = Math.floor(splittedText.length / 2);

var clutter = '';

splittedText.forEach((elem, itemIndex) => {
  if (itemIndex < halfValue) {
    clutter = clutter + `<span class="a">${elem}</span>`;
  } else {
    clutter = clutter + `<span class="b">${elem}</span>`;
  }
});

h1.innerHTML = clutter;

// 6) Applying the animation
gsap.from('h1 .a', {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from('h1 .b', {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});
