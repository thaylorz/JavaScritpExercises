//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const RESISTOR_COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = values => Number(values.slice(0, 2).map(color => RESISTOR_COLORS.indexOf(color)).join(''));