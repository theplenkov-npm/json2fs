import * as readline from 'readline';

export const readStdin = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin
    });

    rl.setPrompt('');
    rl.prompt();

    let jsonString = '';
    rl.on('line', (input) => {
      jsonString += input;
    });

    rl.on('close', () => {
      resolve(jsonString);
    });
    rl.on('error', reject);
  });
};
