import * as readline from 'readline';

const reverseStream = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

reverseStream.on('line', (line) => {
    console.log(line.split('').reverse().join(''));
});