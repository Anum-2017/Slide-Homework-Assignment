/* Q4 - Practicing Do-While Loop
Create a function that simulates a simple guessing game. This function should generate a random number between 1 and 10 and then prompt the user to guess the number. Use a do-while loop to keep asking them to guess again until they get it right.
 */

import * as readline from 'readline';

function guessingGame(): void {
    const targetNumber: number = Math.floor(Math.random() * 10) + 1;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askQuestion(): void {
        rl.question("Guess a number between 1 and 10: ", (input: string) => {
            const guess: number = parseInt(input);
            if (guess === targetNumber) {
                console.log("Congratulations! You guessed the right number:", targetNumber);
                rl.close();
            } else {
                console.log("Wrong guess, try again.");
                askQuestion();
            }
        });
    }

    askQuestion();
}

// To run the game
guessingGame();

