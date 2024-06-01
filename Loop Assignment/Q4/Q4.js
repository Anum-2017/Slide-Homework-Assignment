"use strict";
/* Q4 - Practicing Do-While Loop
Create a function that simulates a simple guessing game. This function should generate a random number between 1 and 10 and then prompt the user to guess the number. Use a do-while loop to keep asking them to guess again until they get it right.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
function guessingGame() {
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    function askQuestion() {
        rl.question("Guess a number between 1 and 10: ", (input) => {
            const guess = parseInt(input);
            if (guess === targetNumber) {
                console.log("Congratulations! You guessed the right number:", targetNumber);
                rl.close();
            }
            else {
                console.log("Wrong guess, try again.");
                askQuestion();
            }
        });
    }
    askQuestion();
}
// To run the game
guessingGame();
