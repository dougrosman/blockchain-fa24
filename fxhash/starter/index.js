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

const sp = new URLSearchParams(window.location.search);

function setup() {
  let cnv = createCanvas(400, 400);

  printFxhashVariables()

  // uncomment this line for a fullscreen canvas
  // let cnv = createCanvas(windowWidth, windowHeight);

  // assign an id selector to our canvas. this is important later for when fx(hash) captures a preview image of your sketch
  cnv.id("my-canvas");

  // comment this out if you want your code to loop
  noLoop();
}

function draw() {
  background(120);
}

function printFxhashVariables() {
  // the hash of the mint transaction
  console.log("transaction hash: ", $fx.hash);

  // wallet address of the minter
  console.log("wallet address: ", $fx.minter);

  // the iteration of the mint (starts at 1)
  console.log("mint iteration: ", $fx.iteration);

  console.log("")
  
  console.log("fxrand 1: ", $fx.rand());
  console.log("fxrand 2: ", $fx.rand());
  console.log("fxrand 3: ", $fx.rand());
  $fx.rand.reset();
  console.log("RESET fx.rand");
  console.log("fxrand 1: ", $fx.rand());
  console.log("fxrand 2: ", $fx.rand());
  console.log("fxrand 3: ", $fx.rand());

  console.log("")

  console.log("fxrandminter 1: ", $fx.randminter());
  console.log("fxrandminter 2: ", $fx.randminter());
  console.log("fxrandminter 3: ", $fx.randminter());
  $fx.randminter.reset();
  console.log("RESET fx.randminter");
  console.log("fxrandminter 1: ", $fx.randminter());
  console.log("fxrandminter 2: ", $fx.randminter());
  console.log("fxrandminter 3: ", $fx.randminter());
}
