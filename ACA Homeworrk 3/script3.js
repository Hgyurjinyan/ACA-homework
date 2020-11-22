////Ex.1

// function arrSun(argument1,argument2) {
//     let index = 0;
//     let result = '';
//     for(let i = 0; i < argument1.length; i++){
//         if(argument1[i] === '_'){
//             result += argument2[index];
//             index++;
//         }
//         else{
//             result += argument1[i]
//         }
//     }
//     return result
// }
// console.log(arrSun('_,we have a _.',['Huston','Problem']));




////Ex.2

// function findNumbers(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(findNumbers(['asfas',1,2,3,true]))




////Ex.3

// function countType(arr) {
//     let countStr = '';
//     let countInt = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             countInt++;
//         }else{
//             countStr++;
//         }
//     }
//     console.log(`Number ${countInt}, String ${countStr}`);
// }
// countType([1,2,3,'1','ad',1,1,1]);




////Ex.4

// function MaxAndMinElementSum(arr) {
//     let maxElement = arr[0];
//     let minElement = arr[0];
//         for(let i = 1; i < arr.length; i++) {
//             if (maxElement < arr[i]) {
//                 maxElement = arr[i];
//             }
//             if (minElement > arr[i]) {
//                 minElement = arr[i];
//             }
//         }
//     return maxElement.length + minElement.length
//
// }
// console.log(MaxAndMinElementSum(['111111','11','111','1']))




////Ex.6

// function arrSpl(age){
//     let result = 0;
//         result = age.split(' ');
//     return result;
// }
// console.log(arrSpl('May the Force be with you'));



////Ex.8

// function arraySum(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// function createArrOfSum(...args) {
//     let result = [];
//     for(let i = 0 ; i < args.length; i++){
//         result.push(arraySum(args[i]));
//     }
//     return result;
// }
// console.log(createArrOfSum([1,2,3],[1,25,5],[4,5,6],[8],[8,4]));



















