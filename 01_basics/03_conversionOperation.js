let age=18

//converting into string 
console.log(typeof(age))
console.log(age)


age=String(age)  //now the age variable converted into string type
console.log(typeof(age))
console.log(age)

age=Number(age)
console.log(typeof(age))
console.log(age)

age=Boolean(age)
console.log(typeof(age))
console.log(age)


//WE CAN NOT CONVERT INTO THIS FORM IT WILL GIVE AN ERROR 


// age=Null(age)
// console.log(typeof(age))

// age=Undefined(age)
// console.log(typeof(age))


//CONVERSION OF STRING LETTERS INTO NUMBER 

let name="satyam prakash"
console.log(name)

name=Number(name)   //IT WILL CHANGE THE GIVEN STRING INTO NUMBER 
console.log(typeof(name))   //IT WILL SHOW OUT NaN MEANS NOT A NUMBER 

console.log(name)


name=null
console.log(name)
console.log(typeof(name))

name=Number(name)
console.log(name)
console.log(typeof(name))


name=Boolean(name)
console.log(name)
console.log(typeof(name))

name=String(name)
console.log(name)
console.log(typeof(name))