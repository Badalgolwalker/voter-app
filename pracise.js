 var prompt = require("prompt-sync")()
//  var a = parseInt(prompt("enter 1st number:"))


// if(a%4 ===0 && a%100 !== 0){
//     console.log("leap")
// }
// else if(a%100 ===0 && a%400 === 0)
// {
//     console.log("lep")
// }


//  var a = parseInt(prompt("enter 1st number:"))
//  var n;
//  if(a > 0){
//     console.log(n= 1)
//  }
// else{
//     console.log(n=0)
// }


// var a = 10, b=20,c=3

// if(a>b && a>c){
//     console.log(`a = ${a} ye bada he`)
// }
// else if(b>c && b>a){
//     console.log(`b = ${b} ye bada he`)
// }
// else{
//     console.log(`c = ${c} ye bada he`)
// }


// var a = 'aeiouAEIOU'.split("")
// console.log(a)

// var b = prompt("enter alphabet:")


// if(a.includes(b)){
// console.log("he")
// }


// lopps


// var a = Number(prompt("enter a alphabet:"))
//  for(var i = 1; i<=10; i++){
//     console.log(`${a} X ${i} = ${a*i}`)
//  }

// var a = Number(prompt("enter a alphabet:"))

// var sum = 0

// for(var i = 0;i<=a; i++){
//     sum= sum + i

// }
// console.log(sum)
 
// var a = Number(prompt("enter a alphabet:"))
// var sum = 1
// for(var i = 1;i<=a; i++){
//       sum = sum*i
//     }
//   console.log(sum)

// var a = Number(prompt("enter a alphabet:"))

// var b = Number(prompt("enter b alphabet:"))

// for(var i = a; i<= b; i++){
//     if(i%3 === 0 && i%5=== 0){
//         console.log(i)
//     }
// }

// var a = Number(prompt("enter a alphabet:"))
// var sum = 0
// for(var i = 2; i<=a; i++){
// // console.log(i)
// if(i%1===0 && i%i===0 && i%2!== 0 ){
//     console.log("prime",i)
// }
// }

// var a =prompt("enter a alphabet:").split("")


// var b = a.length
// var c = 0
// console.log(b)

// for(let i = 0; i <= b; i++){
//     c=c+i
// }
// console.log(c)


// var a =prompt("enter a alphabet:")
// var sum = ""
// for(var i =a.length-1; i >= 0; i--){
// sum = sum + a[i]

// }
// console.log(sum)
// if(sum === a){
//     console.log("palindrome")
// }
// else{
//     console.log("not")
// }

var a = prompt("enter a alphabet:").split("")
var b = ''
var c = ""
// console.log(a)
for(var i = 0; i< a.length ; i++){
 b = b+a[i]
c = c + a[i] *a[i] *a[i]
}

console.log(b)
console.log(c)
