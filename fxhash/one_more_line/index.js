// Doug Rosman 2024

// useful fx(hash) functions and global variables
// more information here: https://www.fxhash.xyz/doc/artist/project-sdk#top-level-api-reference
/*
    // FUNCTIONS
    $fx.rand()          // generates a random number based on the transaction hash of the mint
    $fx.randminter()    // generates a random number based on the minter's wallet address

    $fx.rand.reset()    // resets the $fx.rand() function
    $fx.randminter.reset()  // restes the $fx.randminter() function

    // VARIABLES
    $fx.hash            // the hash of the mint transaction
    $fx.minter          // the wallet address of the minter
    $fx.iteration       // the iteration of the mint (starts at 1)

*/

// DEFINE VARIABLES HERE

const sp = new URLSearchParams(window.location.search);

function setup() {
  let cnv = createCanvas(400, 400);
  colorMode(HSB);

  // set background hue based on wallet address
  let bgHue = floor($fx.randminter() * 360);
  background(bgHue, 20, 100);

  cnv.id("my-canvas");

  noLoop();
  stroke(0, 0, 100);
  strokeWeight(2);

  let totalLines = 20;
  let size = width / totalLines;

  
  // set the hue of the lines based on the minter's wallet address
  let hue = floor($fx.randminter() * 360);

  // set lines to draw based on the iterations
  let numLines = $fx.iteration;

  // only draw up to 20 lines
    for (let i = 0; i < 20; i++) {
      let s = map(i, 0, width / size, 10, 100);

      fill(hue, s, 80);
      rect(i * size, 0, size, (i+1)*size);
    }
}
