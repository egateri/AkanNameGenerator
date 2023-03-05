/*
Male Names
Sunday: Kwasi
Monday: Kwadwo
Tuesday: Kwabena
Wednesday: Kwaku
Thursday:  Yaw
Friday: Kofi
Saturday: Kwame
*/
const maleNameList =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
/*
Female Names
Sunday: Akosua
Monday: Adwoa
Tuesday: Abenaa
Wednesday: Akua
Thursday:  Yaa
Friday: Afua
Saturday: Ama
*/
const femaleNameList = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
/*
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
 where;
 CC - is the century digits. For example 1989 has CC = 19
 YY - is the Year digits (1989 has YY = 89)
 MM -  is the Month
 DD - is the Day of the month 
 mod - is the modulus function ( % )
 */
//  var dayOfTheWeekIndex =null;

//  d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;

let birthYear = prompt("Enter Birth Year:");
let birthMonth = prompt("Enter Month Birth:");
let birthDay = prompt("Enter day of Birth:");
let gender = prompt("Enter your gender:");

console.log("Birth Year "+ birthYear);
console.log("Birth Month "+ birthMonth);
console.log("Birth Day "+ birthDay);
console.log("Your Gender "+ gender);