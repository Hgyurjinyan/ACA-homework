////Ex.1

//  const number = +prompt('Number :');
// if(number % 2 === 0){
//     console.log(`${number} even:`);
// }
// else{
//     console.log(`${number} odd:`);
// }




////Ex.2

// const a = +prompt('Number1 : ');
// const b = +prompt('Number2 :');
// if(a % b === 0 || b % a === 0){
//     console.log(1);
// }
// else{
//     console.log(0);
// }




////Ex.3

// let a = +prompt('Erankyan ankyun 1:');
// let b = +prompt('Erankyan ankyun 2:');
// let d = 180 - (a + b) //erankyan 2 ankyunneri gumary
// console.log(`Erankyan 3-rd ankyuny havasar e ${d} astichan`);




////Ex.4

// let a = +prompt('Number:');
// console.log(a + '' + (2 * a) + '' + (3 * a));





////Ex.5


// let num = prompt();
// let newParams = ''; 
// for(let i = 0; i < num.length; i++){
//     if(num.length - 1 !== i){
//        newParams = newParams + num[i];   
//     }
//     if(num.length - 1 === i){
//         if(+num[i]){
//             newParams = num[i] + newParams;
//         }
//         else{
//             newParams = num;
//     }
//   }
// }
// console.log(+newParams);





// let params = prompt();
// let newParams = '';
// let lastName = params.slice(-1)
// newParams = +lastName ? lastName + params.slice(0,-1) : params;
// console.log(newParams); 






////Ex.6

// const num1 = +prompt('Number 1');
// const num2 = +prompt('Number 2');
// const num3 = +prompt('Number 3');
// const num4 = +prompt('Number 4');
// const num5 = +prompt('Number 5');
// const num6 = Number((num1 + num2 + num3 + num4 + num5) / 5);
// console.log(`Mijin tvabanakany kstacvi ${num6}`);




////Ex.7

// const a = +prompt('Number:');
// if(a % 3 === 0 && a % 7 === 0 && a % 5 === 0){
//     console.log(`${a} tivy bazmapatikne 3-i, 5-i, 7-i`);
// }
// else if(a % 3 === 0 && a % 5 === 0){
//     console.log(`${a} tivy bazmapatikne 3-i ev 5-i`);
// }
// else if(a % 3 === 0 && a % 7 === 0){
//     console.log(`${a} tivy bazmapatikne 3-i ev 7-i`);
// }
// else if(a % 5 === 0 && a % 7 === 0){
//     console.log(`${a} tivy bazmapatikne 5-i ev 7-i`);
// }
// else if(a % 3 === 0){
//     console.log(`${a} tivy 3-i bazmapatikne`);
// }
// else if(a % 5 === 0){
//     console.log(`${a} tivy 5-i bazmapatikne `);
// }
// else if(a % 7 === 0){
//     console.log(`${a} tivy 7-i bazmapatikne`);
// }
// else{
//     console.log(`${a} tivy 3,5,7 tveric voch meki bazmapatiky che`);
// }








////Ex.9

// const num1 = +prompt('Number1 :');
// const num2 = +prompt('Number2 :');
// const num3 = +prompt('Number3 :');
// if(num1 > num2 && num1 > num3 && num2 > num3 ){
//     console.log(num3,num2,num1);
// }
// else if(num1 > num2 && num1 > num3 && num3 > num2){
//     console.log(num2,num3,num1);
// }
// else if(num2 > num1 && num2 > num3 && num3 > num1){
//     console.log(num1,num3,num2);
// }
// else if(num2 > num1 && num2 > num3 && num1 > num3){
//     console.log(num3,num2,num1);
// }
// else if(num3 > num1 && num3 > num2 && num1 > num2){
//     console.log(num2,num1,num3);
// }
// else if(num3 > num1 && num3 > num2 && num2 > num1){
//     console.log(num1,num2,num3);
// }




////Ex.10

// let a = +prompt('Exam 1');
// let b = +prompt('Exam 2');
// let c = +prompt('Exam 3');
// if(a + b + c >= 50 && a + b >= 40 && a + c >= 40 && b + c >= 40){
//     console.log('Passed');
// }
// else{
//     console.log('Not Passed');
// }





////Ex.11

// let a = +prompt('Number1 :');
// let b = +prompt('Number2 :');
// let c = +prompt('Number3 :');
// let x = a/(1/b);
// let result = x/(1/c);
// if(result > 0){
//     console.log(result,' + ');
// }
// else{
//     console.log(result,' - ');
// }



////Ex.13

// var n = +prompt();
// var i = 0;
// var j = 0;
// if(n % 2 === 0 && !Math.floor(n / 10)){
    // i = i + 1;
// }
// if(n % 3 === 0 && n % 10 === 1){
    // j = j + 1;
// }





////Ex.14

// let str = prompt('Numbers:');
// let sym = prompt('Number:');
// let result = 'no';
// for(let i = 0; i < str.length; i++){
//     if(Number(str[i]) === Number(sym)){
//         result = 'yes';
//     }
// }
// console.log(result);










////Ex.17

////Erankyan makeres
// let a = +prompt('Erankyan himq (a):');
// let h = +prompt('Erankyan barcrutyun (h):');
// let S = 1/2 * a * h;
// if(a <= 0 || h <= 0){
//     console.log('Please enter only positives');
// }else{
//     console.log(`Erankyan makeresy havasar e ${S}`);
// }



////Uxankyun erankyan makeres
// let b = +prompt('Uxankyun erankyan ej 1');
// let c = +prompt('Uxankyun erankyan ej 2');
// let S1 = b * c / 2;
// if(b <= 0 || c <= 0){
//     console.log('Please enter only positives');
// }
// else{
//     console.log(`Uxankyun erankyan makeresy havasar e ${S1}`);
// }