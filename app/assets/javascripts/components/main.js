'use strict'

$(document).on('turbolinks:load', () => {
	console.log('==============================')
	let moduleClass = new ModuleClass(5, 100)

	let valMClass = moduleClass.returnArg
	console.log(valMClass)
	console.log('==============================')

	moduleClass._arg1 = 8
	console.log(moduleClass._arg1)
	console.log('==============================')

	let absArg = moduleClass.absArg(111)
	console.log(absArg)
	console.log('==============================')

	let rdArr = moduleClass.randomArray
	console.log(rdArr)
	console.log('==============================')

	console.log(moduleClass.test())
	console.log('==============================')

	let arrowFunc = () => { console.log(1000) }
	arrowFunc()
	console.log('==============================')

	moduleClass.missArgument(undefined, 7, 9)
	console.log('==============================')

	let array = [2, 4, 7, 0]
	moduleClass.multiParams(undefined, 7, array)
	console.log('==============================')

	let valInheritance = new Inheritance(1, 2, 3)
	console.log(valInheritance._arg1)
	console.log('==============================')

	let a, b
	valInheritance.sum(a = () => 20 + 10, b = () => 1 + 56)
	valInheritance.sum(() => 20 + 10, () => 1 + 56)
	valInheritance.sum(a => 20 + 10, b => 1 + 56)
	console.log('==============================')

	valInheritance.asynchronously()
	console.log('==============================')

	for(var i of valInheritance.for_of_loop())	{
    console.log(i); // 5, 1, 4, 6
	}
	console.log('==============================')
})