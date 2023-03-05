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

var birthYear = prompt("Enter Birth Year:");
var birthMonth = prompt("Enter Month Birth:");
var birthDay = prompt("Enter day of Birth:");
var gender = prompt("Enter your gender:");

//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

birthYear = prompt("Enter Birth Year:");
birthMonth = prompt("Enter Month Birth:");
birthDay = prompt("Enter day of Birth:");
gender = prompt("Enter your gender:");

console.log("Birth Year "+ birthYear);
console.log("Birth Month "+ birthMonth);
console.log("Birth Day "+ birthDay);
console.log("Your Gender "+ gender);

//---------------

birthYear = parseInt(birthYear);
console.log("Parsed Birth Year "+ birthYear);
birthMonth = parseInt(birthMonth);
console.log("Parsed Birth Month "+ birthMonth);
birthDay = parseInt(birthDay);
console.log("Parsed Birth Day "+ birthDay);
gender = gender.toLowerCase();
console.log("Your Gender "+ gender); 


//validate day of birth invalid day should be (d<=0) or (d>31)

// const validateDayofBirth =() => {
//     if(birthDay)
// }

if(birthYear >= 0 && birthYear <= 9999){

     //Year is OK: Now validate the Month.
    console.log("Year OK: We can validate the Month");
   
    if(birthMonth >= 0 && birthMonth <= 12){

        //Month is OK  (m<= 0) or (m > 12) : Now validate the Day.
        console.log("Month OK: We can validate the Day");

        if(birthDay >= 0 && birthDay <= 31){
            
        //Day is OK  (d<=0) or (d>31) : Now validate the gender.
        console.log("Day OK: We can validate the Gender");

            if(gender==="m" || gender==="f"){
                //Gender is OK: m or f) : Now invoke function to calculate values to calculate index of day.
        console.log("Day OK: We can validate the Gender");
            }
            else
            {
                 //Gender is not Ok: Throw Error
        console.log("Gendor Error: Enter between M or F");
    alert("Day Error: Day between 0 and 31");
            }
                
        }
        else{
               //Day is not Ok: Throw Error
        console.log("Day Error: Enter between 0 and 31");
    alert("Day Error: Day between 0 and 31");
        }
    
    }
    else{
         //Month is not Ok: Throw Error
        console.log("Month Error: Enter between 0 and 31");
    alert("Month Error: Enter Month between 0 and 12");
    }
}

else {

    //Year is not Ok: Throw Error
    console.log("Year Error: Enter between 0000 and 9999");
    alert(" Year Error: Enter Year between 0000 and 9999");
}


//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

birthYear = prompt("Enter Birth Year:");
birthMonth = prompt("Enter Month Birth:");
birthDay = prompt("Enter day of Birth:");
gender = prompt("Enter your gender:");

console.log("Birth Year "+ birthYear);
console.log("Birth Month "+ birthMonth);
console.log("Birth Day "+ birthDay);
console.log("Your Gender "+ gender);

//---------------

birthYear = parseInt(birthYear);
console.log("Parsed Birth Year "+ birthYear);
birthMonth = parseInt(birthMonth);
console.log("Parsed Birth Month "+ birthMonth);
birthDay = parseInt(birthDay);
console.log("Parsed Birth Day "+ birthDay);
gender = gender.toLowerCase();
console.log("Your Gender "+ gender); 


//validate day of birth invalid day should be (d<=0) or (d>31)

// const validateDayofBirth =() => {
//     if(birthDay)
// }

if(birthYear >= 0 && birthYear <= 9999){

     //Year is OK: Now validate the Month.
    console.log("Year OK: We can validate the Month");
   
    if(birthMonth >= 0 && birthMonth <= 12){

        //Month is OK  (m<= 0) or (m > 12) : Now validate the Day.
        console.log("Month OK: We can validate the Day");

        if(birthDay >= 0 && birthDay <= 31){
            
        //Day is OK  (d<=0) or (d>31) : Now validate the gender.
        console.log("Day OK: We can validate the Gender");

            if(gender==="m" || gender==="f"){
                //Gender is OK: m or f) : Now invoke function to calculate values to calculate index of day.
        console.log("Day OK: We can validate the Gender");
            }
            else
            {
                 //Gender is not Ok: Throw Error
        console.log("Gendor Error: Enter between M or F");
    alert("Day Error: Day between 0 and 31");
            }
                
        }
        else{
               //Day is not Ok: Throw Error
        console.log("Day Error: Enter between 0 and 31");
    alert("Day Error: Day between 0 and 31");
        }
    
    }
    else{
         //Month is not Ok: Throw Error
        console.log("Month Error: Enter between 0 and 31");
    alert("Month Error: Enter Month between 0 and 12");
    }
}

else {

    //Year is not Ok: Throw Error
    console.log("Year Error: Enter between 0000 and 9999");
    alert(" Year Error: Enter Year between 0000 and 9999");
}
