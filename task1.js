import * as readline from 'readline';

const reverseStream = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

reverseStream.on('line', (line) => {
    let symbols = [];
    
    for (const symbol of line) {
      symbols.push(symbol);
    }

    console.log(symbols.reverse().join(''));
});