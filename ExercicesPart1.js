/*** https://projecteuler.net/problem=1 *///

///Init et remplissage de la liste de 0 à 1000
let myArray=[];
for(i=0;i<1000;i++){
    if(i%3 === 0 || i%5 === 0){
        myArray.push(i)
    }
}
///fonction sum
const sum = (a,b)=> a + b
const result = myArray.reduce(sum)
///The reduce() method reduces the array to a single value.
/// The reduce() method executes a provided function for each value of the array (from left-to-right).
///The return value of the function is stored in an accumulator (result/total).
///this method does not change the original array.
console.log("ex1")
console.log(result)

/*** https://projecteuler.net/problem=2 ***/

///Init fibArray
let fibArray=[1,2]

let a=0
///remplissage de la liste
while(a<4000000){
    let tmp = fibArray.slice(-2) //on récupère les 2 derniers éléments
    a = sum(tmp.pop(), tmp.pop())
    if(a<4000000) fibArray.push(a)
}
let res = 0
fibArray.forEach(elem => {
    if(elem%2 ===0) res += elem
})
console.log("ex2")
console.log(res)

/*** https://projecteuler.net/problem=3 ***/


