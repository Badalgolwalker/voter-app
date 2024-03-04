// var prompt = require("prompt-sync")()
// var a = Number(prompt(`hwllo: `))
// for(var i = 1; i <= 10 ; i++){
// console.log(`${a} x ${i} = ${a*i}`)
// }

// for(var i = 1; i <= 5 ; i++){
// for(var j =1 ; j <=5; j++){
//     console.log("*")
// }
// console.log(< br/>)
// }



// var a = "hellokk"

// var b = a.split('')
// console.log(b)

// b.forEach((e) =>{
//    if(e === "a" ||e === "e"||e === "i"||e === "o"||e === "u"){
//     console.log(e.length)
//    }
// })


// var a  = 0
// var b = 1
// var tem = a+b
// console.log(tem)

// for(var i = 0; i <= 10; i++){
//     tem = a+b;
//     console.log(tem)
//     a=b
//     b=tem
// }


// var a = "helllonhgduyvbs"
// var c = ""
// var b = a.length
// console.log(b)
// for(var i = b-1; i >= 0; i-- ){
// c += a[i]
// }
// console.log(c)

// 
// function aa(letr){

//     if(letr === "a" || letr === "e" || letr === "i" || letr === "o" || letr === "u"){
//         vowel++
//         aa("hello")
//     }

// // }
// let vowel = 0

// function aa (str){
//     for(var i = 0 ; i< str.length; i++){
//        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//         vowel ++
//        }
//     }
// }
// var str = "hello"
// var strl = str.length

// aa(str)
// console.log(strl - vowel + " " + "consonsnt")

// console.log( 'vowel' + " "  + vowel)


function findArrayLCM(arr) {
    let lcm = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i])) {
            lcm = findLCM(lcm, arr[i]);
        }
    }
    return lcm;
}

// Example array
const array = [1, 2, , 4, 5, 6, 7, 7, 788];

// Remove empty, undefined, and NaN values from the array
const cleanedArray = array.filter(element => {
    return element !== undefined && element !== null && !isNaN(element);
});

// Calculate the LCM
const lcm = findArrayLCM(cleanedArray);

// Output the result
console.log("LCM of", cleanedArray, "is", lcm);

