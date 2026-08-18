// let a = "jwdhbjkde"
// let b = []

// for (let i=a.length -1; i >=0 ; i--){
//     // console.log(a[i])
//     b.push(a[i])
// }

// console.log(b.join(""));

// const square = (a) => { console.log(a * a)}
// square(12);

// function outer() {
//     let a = 10;

//     return () => {
//         a = a + 1;
//         return a;
//     }

// }
// const a = outer()

// console.log(a())
// console.log(a())

// const sum = (...num) => {
//     let total = 0;

//     for (let i of num){
//         total += i;
//     }

//     return total
// }

// console.log(sum(1,2,3,4,4))

// const a = [1,2,3,4,5,2,3,4]

// const adsad = (a) => {

// let freq = {};

// for(let b of a ){
//     freq[b] = (freq[b] || 0) + 1
// }

// return freq;
// }

// console.log(adsad(a))

// const vowels = ['a' , 'e', 'i', 'o', 'u']
// const str = "ahiueodfvususa"

// const checkVowels = (str) => {
//     let freq ={};

//     for (let a of str){
//         if(vowels.includes(a)){
//             freq[a] = (freq[a] || 0) + 1
//         }
//     }

//     return freq;
// }

// console.log(checkVowels(str));

// const a = [1,2, 5,6,3,2 ,5, 4,3]
// let max = a[0];
// let second = a[0]

// for(let b of a){
//     if(max < b){
//         second = max
//         max = b
//     }
// }

// const e = new Set(a)

// const checkPallindrome = (str) => {
//     let reversed = "";
//     for(let i=str.length-1; i>=0;i--){
//         reversed += str[i]
//     }
//     if(reversed === str){
//         return true
//     }
//     return false
// }

// const checkDuplicate = (arr) => {
//     let result = []

//     for(let i=0; i< arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i])
//         }
//     }

//     return result;
// }


// console.log(checkDuplicate(a))
// console.log(Object.values({a: 1, b: {c:3, d:4}}))

// function isAnagram(str1, str2) {

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let sorted1 = str1.split("").sort().join("");
//   let sorted2 = str2.split("").sort().join("");
//   console.log(sorted1)
// console.log(sorted2)
//   return sorted1 === sorted2;
// }

// console.log(isAnagram("listen", "silent"));

const checkFirstNonRpeating = (str) => {
    for (let i = 0; i < str.length; i++) {
        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        if (count === 1) {
            return str[i]
        }
    }
}

console.log(checkNonRpeating('wewefrwewfg'))














































