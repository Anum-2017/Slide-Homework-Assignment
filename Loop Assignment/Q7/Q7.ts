/* Q7 - Tuples for RGB Colors
Define a tuple type for RGB color values. Write a function that takes an RGB tuple as an argument and returns a string describing the color. */

type RGB = [red: number, green: number, blue: number];

function describeColor(rgb: RGB) {
    const [red, green, blue] = rgb;
    if (red === 0 && green === 0 && blue === 0) {
        return "The color is Black.";
    } else if (red === 255 && green === 255 && blue === 255) {
        return "The color is White.";
    } else if (red === green && green === blue) {
        return "The color is Gray.";
    } else {
        return `RGB(${red}, ${green}, ${blue})`;
    }
}

const redColor = describeColor([255, 0, 0]);
console.log(redColor); // Output: The color is Red.

const whiteColor = describeColor([255, 255, 255]);
console.log(whiteColor); // Output: The color is White.
