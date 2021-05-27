//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const nucleotide_to_complement = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
};

export const toRna = DNA => DNA.split('').map(nucleotide => nucleotide_to_complement[nucleotide]).join('');
