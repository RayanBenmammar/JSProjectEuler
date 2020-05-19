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
const target = 600851475143   ;
let factor = Math.trunc(Math.sqrt(target))
let b=false

const isPrime =(p)=> {
    for(let a =2; a< Math.sqrt(p);a++){
        // Check if n is less than 2 => not primesi <=2, pas premier
        if (p<2) return false;
        ///Si p n'est pas un nombre premier, il existe nécessairement un diviseur dans cet interval
        if(p%a ===0) return false
    }
    return true
}

while(!b){
    if(target%factor === 0 && isPrime(factor)) {
        b= true
    }else{
        factor -=1
    }

}
console.log("ex3")
console.log(factor)

/*** https://projecteuler.net/problem=4 ***/

const isAPalindrome = (pal)=>{
        for(i=0, j=pal.toString().length-1; i<=pal.toString().length/2,j>= pal.toString().length/2; i++, j--){
            if(pal.toString()[i] !== pal.toString()[j]) return false
        }
        return true
}

console.log("ex4")
res=0
for(r=100;r<1000; r++ ){
    for(s=100;s<1000;s++){
        let tmp =r*s

        if(isAPalindrome(tmp) && tmp> res) {
            res=tmp
        }
    }
}
console.log(res)


/*** https://projecteuler.net/problem=5 ***/