//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const RESISTOR_COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = ([firstColor, secondColor]) => RESISTOR_COLORS.indexOf(firstColor) * 10 + RESISTOR_COLORS.indexOf(secondColor);