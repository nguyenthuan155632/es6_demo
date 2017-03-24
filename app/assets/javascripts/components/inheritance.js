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
	    console.log('====end-asynchronously======')
	  }, 1000)

		// traditional function
	  setTimeout(function(){
	    console.log(this.newarg); // undefined
	  }, 1000)
	}

	// see [Symbol.iterator]() and yield at http://freetuts.net/iterables-va-iterators-trong-es6-622.html
	// http://qnimate.com/javascript-yield-keyword-and-function-syntax/
	// https://kipalog.com/posts/function--va-yield-trong-Javascript-generator-function
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

	// Set tutorial https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
	set_tutor() {
		let set = new Set()
		//add three keys to the set
		set.add({x: 12})
		set.add(44)
		set.add("text")
		//check if a provided key is present
		console.log('set.has("text")')
		console.log(set.has("text"))

		//delete a key
		console.log('set.delete(44)')
		set.delete(44)
		console.log('set.has(44)')
		console.log(set.has(44))

		for(var i of set)	{
		    console.log(i)
		}

		//create a set from array values
		let set_1 = new Set([1, 2, 3, 4, 5])
		//size of set
		console.log(set_1.size); //5

		//create a clone of another set
		var set_2 = new Set(set.values())
		console.log(set_2)

		// Iterating Sets => Object {x: 12} and text
		for (let item of [...set]) {
			console.log(item)
		}

		// Same above
		for (let item of set) {
			console.log(item)
		}

		// [...set] => [Object {x: 12}, "text"]
		console.log([...set])

		// Set vs Weekset http://qnimate.com/difference-between-set-and-weakset-in-javascript/
	}
}