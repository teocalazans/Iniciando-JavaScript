// O que são vetores ou arrays

//Declarando array

let array = [String, 1, true, false]
console.log(array);

//Array pode guardar varios tipos de dados
let array2 = ['string' , 1, true, ['array']]
console.log(array2)

//foreach
array2.forEach(function(item, index){console.log(item, index)})
//push
array.push('novo intem')
console.log(array)
//pop
array2.pop()
console.log(array2)
//shift
array.shift()
console.log(array)
//unshift
array2.unshift()
console.log(array2)
//indexof
/* console.log(array2.indexof(true)); */
//splice
array.splice(0, 3);
console.log(array)

//slice
let novoArray = array.slice(0, 3);
console.log(novoArray)

// objeto 

let object = {string: 'beijo', number: 1, boolean: true, array: [array], objectInterno: {objetoInterno: 'Objeto Interno'} };
console.log(object.boolean)
console.log(object)



