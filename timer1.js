let input = process.argv.slice(2);

const runTimer = (array) => {
  // for objects of array
  for (const time of array) {
    // if object is a non-negative integer
    if (Number.isInteger(Number(time)) && Math.sign(Number(time) === 1) ||
    Number.isInteger(Number(time)) && Math.sign(Number(time) === 0)) {
      // calls timer
      setTimer(Number(time));
    }
  }
};

const setTimer = (delay) => {
  // makes a beeping sound - takes the input time in seconds and multiplies it for milliseconds
  setTimeout(() => process.stdout.write('\x07'), delay * 1000);
};

runTimer(input);
