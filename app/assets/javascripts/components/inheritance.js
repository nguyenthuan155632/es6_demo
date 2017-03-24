'use strict'

class Inheritance extends ModuleClass {
	constructor(arg1, arg2, newarg) {
    //call constructor of super class. "super" is an pointer to the super class object
    super(arg1, arg2)
    this.newarg = newarg
  }

  sum(p, q) {
    console.log(p() + q()); // 87
	}

	asynchronously() {
		// arrow function
		setTimeout(() => {
	    console.log(this.newarg); // 3
	  }, 1000)

		// traditional function
	  setTimeout(function(){
	    console.log(this.newarg); // undefined
	  }, 1000)
	}

	// see [Symbol.iterator]() at http://freetuts.net/iterables-va-iterators-trong-es6-622.html
	for_of_loop() {
		return {
	    elements: [5, 1, 4, 6, 9, 4, 54],
	    size : 3,
	    pointer : 0,
	    [Symbol.iterator]() {
        var e = this.elements
        var s = this.size
        var p = this.pointer
        return {
          next() {
            if(p > s) {
              return { value: undefined, done: true }
            } else {
              p++;
              return { value: e[p - 1], done: false }
            }
      		}
	    	}
			}
		}
	}
	// a = valInheritance.for_of_loop() => Object {elements: Array[5], size: 3, pointer: 0}
	// z = a[Symbol.iterator]() => Object {}
	// z.next() => Object {value: 5, done: false}
	// z.next() => Object {value: 1, done: false}
	// z.next() => Object {value: 4, done: false}
	// z.next() => Object {value: 6, done: false}
	// z.next() => Object {value: undefined, done: true}
}