/* main function */
const main =() => {


  /*variable declarations */
  var birthYear = null;
  var birthMonth = null;
  var birthDay = null;
  var gender = null;
  var birthCentury = null;
  var birthCenturyDigits = null;
 var birthYearDigits = null;

 /* Male List  
Male Names
Sunday: Kwasi
Monday: Kwadwo
Tuesday: Kwabena
Wednesday: Kwaku
Thursday:  Yaw
Friday: Kofi
Saturday: Kwame
*/
const maleNameList = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  /*  Female List
Female Names
Sunday: Akosua
Monday: Adwoa
Tuesday: Abenaa
Wednesday: Akua
Thursday:  Yaa
Friday: Afua
Saturday: Ama
*/
  const femaleNameList = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];


    /*Getting inputs from HTML Form*/
    birthYear = document.getElementById("form").elements[0].value;
    birthMonth = document.getElementById("form").elements[1].value;
    birthDay = document.getElementById("form").elements[2].value;
    gender = document.getElementById("form").elements[3].value;
    
    //clear previous update on response and error id on HTML, if any.
    document.getElementById("demo").innerHTML = null;
    document.getElementById("error").innerHTML = null;
  /*Getting the inputs via prompt*/ 
  // birthYear = prompt("Enter Birth Year:");
  // birthMonth = prompt("Enter Month Birth:");
  // birthDay = prompt("Enter day of Birth:");
  // gender = prompt("Enter your gender:");

  console.log("Birth Year " + birthYear);
  console.log("Birth Month " + birthMonth);
  console.log("Birth Day " + birthDay);
  console.log("Your Gender " + gender);



//Validate birthYear is made up of number characters only
if(containNumbersOnly(birthYear) === true){
    console.log("OK: Year Numbers only:" +birthYear);

    //Validate birthMonth is made up of number characters only
    if(containNumbersOnly(birthMonth) === true){
   console.log("OK: Month Numbers only:" +birthYear);

        //Validate birthDay is made up of number characters only
    if(containNumbersOnly(birthDay) === true){
   console.log("OK: Day Numbers only:" +birthDay);
        
        
    //check that the year is 4 digits long => CCYY i.e 1934
    if(birthYear.length === 4){
        
        //observe the year input in string
        console.log("OK: Length is OK:" +birthYear);
        //slice the CC and YY values and observe the value
        birthCenturyDigits = birthYear.slice(0,2);
        birthYearDigits = birthYear.slice(2,4);
        console.log("OK birthCenturyDigits  :" +birthCenturyDigits);
        console.log("OK: birthYearDigits:  " +birthYearDigits);

        //observe the datatye of CC and YY
        console.log("OK birthCenturyDigits  :" +typeof(birthCenturyDigits));
        console.log("OK: birthYearDigits:  " +typeof(birthYearDigits));
        
        //Parse from String to Numbers
        birthCenturyDigits = parseInt(birthYear.slice(0,2));
        birthYearDigits = parseInt(birthYear.slice(2,4));
       
        //Observe the Parsing is data Type of the output
        console.log("OK birthCenturyDigits  :" +birthCenturyDigits);
        console.log("OK: birthYearDigits:  " +birthYearDigits);
        console.log("OK birthCenturyDigits  :" +typeof(birthCenturyDigits));
        console.log("OK: birthYearDigits:  " +typeof(birthYearDigits));


      /*parsing the inputs to help in validation - for Day DD, Month, MM, and Gender*/
       birthMonth = parseInt(birthMonth);
       console.log("Parsed Birth Month " + birthMonth);
       birthDay = parseInt(birthDay);
       console.log("Parsed Birth Day " + birthDay);
       gender = gender.toLowerCase();
       console.log("Your Gender " + gender);
       

    /*Validating the Months & Day inputs*/
    if (birthMonth >= 1 && birthMonth <= 12) {
      //Month is OK  (m>= 1) or (m <= 12) : Now validate the Day.
      console.log("OK: Month is OK -> Validate the Day");

      if (birthDay >= 1 && birthDay <= 31) {
        //Day is OK  (d > 0) or (d< =31) : Now validate the gender.
        console.log("OK: Day is OK -> validate the Gender");

        //Strict validatation of gender
        if ((gender === "m" || gender === "f") || (gender === "male" || gender === "female")) {
          //Gender is OK: m or f) : Now invoke function to calculate values to calculate index of day.
          console.log("OK: Gender is OK -> Calculate Akan Name");

      //Call the Akan Name Function to Check the Name 
        getAkanName();
            
        } else {
          //Gender is not Ok: Throw Error
          console.log("Error: Enter Gender as M or F or Male or Female");
          //alert("Error: Enter Gender as M or F or Male or Female");
          document.getElementById("error").innerHTML = "Enter Gender as M or F or Male or Female";
        }
      } else {
        //Day is not Ok: Throw Error
        console.log("Error: Enter Birth Day between 1 and 31");
        //alert("Error: Enter Birth Day between 1 and 31");
        document.getElementById("error").innerHTML = "Enter Birth Day between 1 and 31";
      }
    } else {
      //Month is not Ok: Throw Error
      console.log("Error: Enter Birth Month between 1 and 12");
      //alert("Error: Enter Birth Month between 1 and 12");
      document.getElementById("error").innerHTML = "Enter Birth Month between 1 and 12";
    }

        
    }
        
   else {
       //Throw Error: The length of the Year is Less than or More than 4 digits i.e CCYY
        console.log("Error: Fill the Year in Four Digits:" +birthYear);
        //alert("Error: Fill the Birth Year in Four Digits");
        document.getElementById("error").innerHTML = "Fill the Birth Year in Four Digits";
    }

    }

    else {

        //Throw Error: the Day Entry contain non-numbers i.e #^7* @ e.t.c
    console.log("Error: Fill Day  Date in Numbers:" +birthDay);
    //alert("Error: Fill the Birth Day Date in Numbers"); 
    document.getElementById("error").innerHTML = "Fill Birth Day in Numbers";
    }
}
else {
     //Throw Error: the Month Entry contain non-numbers i.e #^7* @ e.t.c
    console.log("Error: Fill Month  Date in Numbers:" +birthMonth);
    //alert("Error: Fill the Birth Month Date in Numbers");
    document.getElementById("error").innerHTML = "Fill Birth Month in Numbers";
}
}
    
else
{
    //Throw Error: the Entry contain non-numbers i.e #^7* @ e.t.c
    console.log("Error: Fill Year Date in Numbers:" +birthYear);
   // alert("Error: Fill the Birth Year Date in Numbers");
    document.getElementById("error").innerHTML = "Fill the Birth Year in Numbers";
}


/*REGEX Function to validate the year INPUT only has numbers*/
function containNumbersOnly (str){
    return /^\d+$/.test(str); 
}


/*Start of getAkanName Function*/
function getAkanName () {
 
  //declare project local variables
let akanName = null;
let indexOf = null;

//call the indexOfDay function to calculate index to access the 2 array lists.
indexOf = getDayOfTheWeekIndex(birthCenturyDigits, birthYearDigits, birthMonth, birthDay);

//Observe the response from the Function
console.log("Test the response of the function call "+ indexOf);

//Strict check of gender! NULL Index means the Name does not exist.
    if ((gender ==="f" || gender ==="female") && indexOf !== null )
{
    akanName = femaleNameList[indexOf];
    console.log("Your Akan Name -> Woman :" +akanName);
   // alert("Your Akan Name is : " +akanName);
    document.getElementById("demo").innerHTML = "Your Akan Name is : " +akanName;
}
else if ((gender ==="m" ||gender ==="male" ) && indexOf !== null) {
    
    akanName = maleNameList[indexOf];
   console.log("Your Akan Name -> Man  : " +akanName);
   //alert("Your Akan Name is : " +akanName);
   document.getElementById("demo").innerHTML = "Your Akan Name is : " +akanName;
} 
else{
    //Throw Error: Akan Name does not exixt
    console.log("Your Akan Name does not exist");
}
    
}
    

/*Function to Get Day of the Week Starts here start here*/
function getDayOfTheWeekIndex (birthCenturyDigits, birthYearDigits, birthMonth, birthDay) {

/* -- Part of Project Documenation on HOW to calculate Day of the Week
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;
 CC - is the century digits. For example 1989 has CC = 19
 YY - is the Year digits (1989 has YY = 89)
 MM -  is the Month
 DD - is the Day of the month 
 mod - is the modulus function ( % )
*/

 //Local variable declarations: Project documentation convention used for ease of reading. 
let d = null;
let CC = birthCenturyDigits;
let YY = birthYearDigits;
let MM = birthMonth;
let DD = birthDay;  
let dayOfTheWeekIndex =null;
    
    //To observe the values called in the function
  console.log("Birth Centuary " + CC);
  console.log("Birth Year " + YY);
  console.log("Birth Month " + MM);
  console.log("Birth Day " + DD);

    //Calculating the day of the Week as per project documentation 
d =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;

 console.log("The index of day is: " +d);

  if(d >= 0){
      //Round of to the floor and return the Index.
   dayOfTheWeekIndex = Math.floor(d);
   return dayOfTheWeekIndex;
  
   }
   else{
    //The index should always be +ve and  => Akan Name does not exist in the 2 lists.
    console.log("Your Akan Name does not Exist");
    alert("Your Akan Name does not Exist");
     // Return NULL or Error message to HTML:
       return null;
   }

}

}
