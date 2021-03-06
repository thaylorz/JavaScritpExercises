//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { strict } from "assert"

const getAminoAcidName = codon => ({
	'UUC': 'Phenylalanine',
	'UUU': 'Phenylalanine',
	'UUA': 'Leucine',
	'UUG': 'Leucine',

	'UCU': 'Serine',
	'UCC': 'Serine',
	'UCA': 'Serine',
	'UCG': 'Serine',

	'UAU': 'Tyrosine',
	'UAC': 'Tyrosine',
	'UAA': 'Stop',
	'UAG': 'Stop',

	'UGU': 'Cysteine',
	'UGC': 'Cysteine',
	'UGA': 'Stop',
	'UGG': 'Tryptophan',

	'CUU': 'Leucine',
	'CUC': 'Leucine',
	'CUA': 'Leucine',
	'CUG': 'Leucine',

	'CCU': 'Proline',
	'CCC': 'Proline',
	'CCA': 'Proline',
	'CCG': 'Proline',

	'CAU': 'Histidine',
	'CAC': 'Histidine',
	'CAA': 'Glutamine',
	'CAG': 'Glutamine',

	'CGU': 'Arginine',
	'CGC': 'Arginine',
	'CGA': 'Arginine',
	'CGG': 'Arginine',

	'AUU': 'Isoleucine',
	'AUC': 'Isoleucine',
	'AUA': 'Isoleucine',
	'AUG': 'Methionine',

	'ACU': 'Threonine',
	'ACC': 'Threonine',
	'ACA': 'Threonine',
	'ACG': 'Threonine',

	'AAU': 'Asparagine',
	'AAC': 'Asparagine',
	'AAA': 'Lysine',
	'AAG': 'Lysine',

	'AGU': 'Serine',
	'AGC': 'Serine',
	'AGA': 'Arginine',
	'AGG': 'Arginine',

	'GUU': 'Valine',
	'GUC': 'Valine',
	'GUA': 'Valine',
	'GUG': 'Valine',

	'GCU': 'Alanine',
	'GCC': 'Alanine',
	'GCA': 'Alanine',
	'GCG': 'Alanine',

	'GAU': 'Aspartic Acid',
	'GAC': 'Aspartic Acid',
	'GAA': 'Glutamic Acid',
	'GAG': 'Glutamic Acid',

	'GGU': 'Glycine',
	'GGC': 'Glycine',
	'GGA': 'Glycine',
	'GGG': 'Glycine',
})[codon]

export const translate = (rna) => {
	if (!rna) return []

	const codons = rna.match(/.{1,3}/g)
	const aminoAcidNames = codons.map(getAminoAcidName)
	const stopCodon = aminoAcidNames.findIndex(name => name === 'Stop')

	if (stopCodon !== -1) aminoAcidNames.slice(0, stopCodon)
	if (aminoAcidNames.some(name => !name)) throw new Error('Invalid codon')

	return aminoAcidNames
}