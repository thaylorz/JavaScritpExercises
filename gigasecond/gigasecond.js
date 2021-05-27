//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const gigasecond_in_ms = 1e12;

export const gigasecond = date => new Date(date.getTime() + gigasecond_in_ms);
