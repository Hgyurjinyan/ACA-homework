////Ex.1


// let numbers1 = prompt('Numbers:');
// let number = prompt('Number:');
//  function NumberRepeating(numbers1,number){
//     for(let i = 0; i < numbers1.length; i++){
//         if(Number(numbers1[i]) === Number(number)){
//             return 'yes';
//         }
        
//     }
//     return 'no';
// }
// console.log(NumberRepeating(numbers1,number));




////Ex.2


// let number = prompt('Number');
// function ReverseNumber(number){
//     let reverse = '';
//         for(let i = number.length - 1; i >= 0; i--){
//             reverse += number[i];
//         }
//     return reverse;    
// }
// console.log(ReverseNumber(number));




////Ex.3


// let num = +prompt('Number');
// function MaxMin(num){
//     const strNum = '' + num;
//     let min = 9;
//     let max = 0;
//         for(let i = 0; i < strNum.length; i++){
//             const current = +strNum[i];
//                 if(current > max) max = current;
//                 if(current < min) min = current;
//         }
//     return max - min;    
// }
// console.log(MaxMin(num));




////Ex.4

// let num1 = +prompt('Number:');
// function Prime(num1){
//     for(let i = 2; i <= num1/2; i++){ 
//         if(num1 % i == 0){
//             return 'Parz tiv chi';
//         }
//     }
//     return 'Parz tiv';
// }
// alert(Prime(num1));





////Ex.5

// let str1 = prompt('Player 1: Rock-Paper-Scissors');
// let str2 = prompt('Player 2: Rock-Paper-Scissors');
//     function RockPaperScissors(str1,str2){
//         if(str1 === 'Paper' && str2 === 'Paper'){
//             return 'Draw! Enter new values.';
//         }
//         else if(str1 === 'Rock' && str2 === 'Rock'){
//             return 'Draw! Enter new values.';
//         }
//         else if(str1 === 'Scissors' && str2 === 'Scissors'){
//             return 'Draw! Enter new values.';
//         }
//         else if(str1 === 'Paper' && str2 === 'Rock'){
//             return '1nd player wins!';
//         }
//         else if(str1 === 'Paper' && str2 === 'Scissors'){
//             return '2nd player wins!';
//         }
//         else if(str1 === 'Rock' && str2 === 'Paper'){
//             return '2nd player wins!';
//         }
//         else if(str1 === 'Rock' && str2 === 'Scissors'){
//             return '1nd player wins!';;
//         }
//         else if(str1 === 'Scissors' && str2 === 'Paper'){
//             return '1nd player wins!';
//         }
//         else if(str1 === 'Scissors' && str2 === 'Rock'){
//             return '2nd player wins!';
//         }
//         else{
//             return 'Invalid input, enter correct value.'
//         }
//     }
// console.log(RockPaperScissors(str1,str2));



////Ex.6

// let num = Number(prompt('Number:'));
//  function FibonachiNumber(index){
//     if(index <= 1) return index;
//     return FibonachiNumber(index - 1) + FibonachiNumber(index - 2);
// }
// console.log(FibonachiNumber(num));



////Ex.7

// let num = +prompt('Number');
//    let i = 0;
//     while(FibonachiNumber(i) < num){     
//         console.log(FibonachiNumber(i));
//         i++;
//     }

// function FibonachiNumber(index){
//     if(index <= 1) return index;
//     return FibonachiNumber(index - 1) + FibonachiNumber(index - 2);
// }




////Ex.9

// function Combinations(){
//   let age = '';
//     for(let i = 0; i < 100; i++){
//         if(i >= 0 && i < 10){
//             age += '0' + [i] + ',';
//         }
//         else if(i >= 10 && i < 100){
//             age += String(i) + ',';
//         }
//     }
//     return age 
// }
// console.log(Combinations());





let num = +prompt('Number');

function isPrime(num){
    for(var i = 2 ; i <=  num / 2 ; i++)
        if(num % i === 0)// i = 2 , i = 3,  i = 4, .. i = num/2
            return "Parz che";
    return "Parza";
}

console.log(isPrime(num));













































