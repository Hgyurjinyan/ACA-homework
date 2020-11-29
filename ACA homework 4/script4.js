////Ex.1

// function evenDigitSum(number1,number2) {
//     let numbers = [];
//     for(let i = number1; i <= number2; i++ ){
//         let isEven = true;
//         let digitSum = i + '';
//
//         for(let j = 0; j < digitSum.length; j++){
//             isEven = isEven && (digitSum[j] % 2 === 0);
//         }
//             if(isEven === true){
//                 numbers.push(i);
//             }
//         }
//             if(numbers.length > 0){
//                 return numbers.join(',');
//             }
//             else{
//                 return  'Such Number Does Not Exist';
//         }
// }
// console.log(evenDigitSum());





////Ex.3

// function calculateInArray(arr,a,b) {
//     let resultArr = [];
//     for (let i = 0; i <= arr.length; i++){
//         if(arr[i] >= a  &&  arr[i] <= b) {
//             resultArr.push(arr[i]);
//         }
//     }
//     return resultArr;
// }
// console.log(calculateInArray());




////Ex.4

// function plusCount(textNumber) {
//     let  count = 0;
//     for (let  i = 0; i < textNumber.length; i++){
//         if (textNumber[i] == '+'){
//             count++;
//         }
//     }
//     if (count == 1 && textNumber[0] == '+'){
//         return true;
//     }
//     return false;
// }
//
// function ContainPlus(textNumber) {
//     for (let i = 0; i < textNumber.length; i++){
//         if (textNumber[i] === '+'){
//             return true;
//         }
//     }
//     return false;
// }
//
// function RemoveFirst(text) {
//     let  result = "";
//     for (let  i = 1; i < text.length; i++){
//         result += text[i];
//     }
//     return result;
// }

//Eric jan im mot shift function-y cher ashxatum karoxa esem sxalvel dra hamar stex es im hamar mi hat
//im remove-n em sarqel:


//
// function IsBad(textNumber) {
//         let  result = "0";
//         if (textNumber.length === 10) {
//             if (!ContainPlus(textNumber)){
//                 result = textNumber;
//             }
//             else{
//                 result = "Bad Number";
//             }
//         }
//         else if (textNumber.length === 11){
//             if (plusCount(textNumber)){
//                     result = RemoveFirst(textNumber)
//             }
//             else{
//                 result = "Bad Number";
//             }
//         }
//         else {
//             result = "Bad Number";
//         }
//
//         return result;
// }
// console.log(IsBad());












