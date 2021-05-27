//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
	constructor(...sides) {
		this.sides = sides
	}

	/* An equilateral triangle has all three sides the same length. */
	get isEquilateral() {
		return this.isTriangle() && this.validateInequality()
			? this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2]
			: false
	}

	/* An isosceles triangle has at least two sides the same length. */
	get isIsosceles() {
		return this.isTriangle() && this.validateInequality()
			? this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] || this.sides[1] === this.sides[2]
			: false
	}

	/* A scalene triangle has all sides of different lengths. */
	get isScalene() {
		return this.isTriangle() && this.validateInequality()
			? (this.sides[0] !== this.sides[1] && this.sides[0] !== this.sides[2]) && (this.sides[1] !== this.sides[2])
			: false
	}

	isTriangle() {
		return this.sides[0] && this.sides[1] && this.sides[2] > 0
	}

	validateInequality() {
		return this.sides[0] + this.sides[1] >= this.sides[2] &&
			this.sides[1] + this.sides[2] >= this.sides[0] &&
			this.sides[0] + this.sides[2] >= this.sides[1]
	}
}
