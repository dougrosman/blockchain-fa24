// useful fx(hash) functions and global variables
// more information here: https://www.fxhash.xyz/doc/artist/project-sdk#top-level-api-reference


const sp = new URLSearchParams(window.location.search);

///// ADD YOUR CODE BELOW THIS LINE

let size;
let bgR;
let bgG;
let bgB;
let r;
let g;
let b;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.id("my-canvas")
  
  // assign random values to your variables in setup()
  size = $fx.rand()
  size = 4 + $fx.rand() * 56; // a number between 4 and 60
  bgR = $fx.rand() * 255;
  bgG = $fx.rand() * 255;
  bgB = $fx.rand() * 255;
  r = $fx.randminter() * 255;
  g = $fx.randminter() * 255;
  b = $fx.randminter() * 255;
  background(bgR, bgG, bgB);
}

function draw() {

  
  
  // use the random values you created above to draw something. check out the p5.js reference page to see what other functions you can use: https://p5js.org/reference/. I recommend looking at the 2D primitives page.
  
  fill(r, g, b);
  ellipse(random(width), random(height), size, size)
  
  // stops the animation after 100 frames
  if(frameCount >= 100) {
    noLoop();
  }

  // console.log($fx.iteration)
}