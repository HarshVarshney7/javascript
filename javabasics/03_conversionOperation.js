
 
let score = 33

console.log( typeof score ); // number
console.log( typeof(score) ); // number

score = "33"
console.log( typeof(score) ); // string

let valueInNumber = Number(score);
console.log( typeof(valueInNumber) ); //number

score = "33abc"
valueInNumber = Number(score);
console.log( typeof(valueInNumber) ); // number
console.log(valueInNumber); //NaN ( Not a Number )

score = null;
valueInNumber = Number(score);
console.log(valueInNumber); // 0

score = undefined;
valueInNumber = Number(score);
console.log(valueInNumber); // NaN

score = true;
valueInNumber = Number(score);
console.log(valueInNumber); // 1

score = false;
valueInNumber = Number(score);
console.log(valueInNumber); // 0

// boolean conversion
// value = 0,"" => false
// otherwise it gives true

// string conversion
// value = 33 => 33
