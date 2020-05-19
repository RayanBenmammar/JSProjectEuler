/// https://projecteuler.net/problem=1


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
console.log(result)


