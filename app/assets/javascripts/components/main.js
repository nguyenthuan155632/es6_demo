'use strict'

$(document).on('turbolinks:load', () => {
	console.log('============start=============')
	let moduleClass = new ModuleClass(5, 100)

	let valMClass = moduleClass.returnArg
	console.log(valMClass)
	console.log('===========getter=============')

	moduleClass._arg1 = 8
	console.log(moduleClass._arg1)
	console.log('==========setter==============')

	let absArg = moduleClass.absArg(111)
	console.log(absArg)
	console.log('===========absArg=============')

	let rdArr = moduleClass.randomArray
	console.log(rdArr)
	console.log('==========randomArray=========')

	console.log(moduleClass.test())
	console.log('=========normal-func==========')

	let arrowFunc = () => { console.log(1000) }
	arrowFunc()
	console.log('==============================')

	moduleClass.missArgument(undefined, 7, 9)
	console.log('========missArgument==========')

	let array = [2, 4, 7, 0]
	moduleClass.multiParams(undefined, 7, array)
	console.log('=========multiParams==========')

	let valInheritance = new Inheritance(1, 2, 3)
	console.log(valInheritance._arg1)
	console.log('==========Inheritance=========')

	let a, b
	valInheritance.sum(a = () => 20 + 10, b = () => 1 + 56)
	valInheritance.sum(() => 20 + 10, () => 1 + 56)
	valInheritance.sum(a => 20 + 10, b => 1 + 56)
	console.log('=========sum-arrow_func=======')

	valInheritance.asynchronously()
	console.log('====start-asynchronously======')

	for(var i of valInheritance.for_of_loop())	{
    console.log(i); // 5, 1, 4, 6
	}
	console.log('=========for_of_loop==========')

	valInheritance.set_tutor()
	console.log('==========set_tutor===========')
})