'use strict'

class ModuleClass {
	constructor(arg1, arg2) {
		console.log(`
			You defined arguments
			Thank you!
		`)
		this.arg1 = arg1
		this.arg2 = arg2
	}

	// getter must no params (and it is not function)
	get returnArg() {
		return [this.arg1, this.arg2]
	}

	get _arg1() {
		return this.arg1
	}

	set _arg1(val) {
		this.arg1 = val
	}

	// absArg is a function
	absArg(val) {
		let result = 0
		result = Math.abs(val - (this.arg1 + this.arg2))
		return result
	}

	get randomArray() {
		return [...new Array(this.arg1)].map(() => Math.round(Math.random() * this.arg2))
	}

	// do not understand arrow function
	// handleInputChange = (val) => {
 	//    console.log('selectionMade: ', val);
 	//  }

	test() {
		return 5
	}

	// Passing undefined is considered as missing an argument. Here is an example to demonstrate this:
	missArgument(x = 1, y = 2, z = 3)	{
	 	console.log(x, y, z); // Output "1 7 9"
	}

	// Multi params 
	multiParams(a = 1, b, ...args) {
    console.log(args);
    console.log(`Insert variable ${args}`);
    console.log(args.length);
    console.log(args[0].length);
	}
}