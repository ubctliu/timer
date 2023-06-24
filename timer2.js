const stdin = process.stdin;
// takes input
stdin.setRawMode(true);
stdin.setEncoding("utf8");
// creates array from 1-9
const validNumbers = Array.from(Array(10).keys()).slice(1);


stdin.on('data', (key) => {
  // if ctrl + c
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  // if b
  if (key === 'b') {
    console.log("\x07");
  }
  // if number from 1-9
  if (validNumbers.includes(Number(key))) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimer(key);
  }
});

const setTimer = (delay) => {
  // makes a beeping sound - takes the input time in seconds and multiplies it for milliseconds
  setTimeout(() => process.stdout.write('\x07'), delay * 1000);
};