 /* main function */
const main = () => {
  /*variable declarations */
  var birthYear = null;
  var birthMonth = null;
  var birthDay = null;
  var gender = null;
  var birthCentury = null;
  var birthCenturyDigits = null;
  var birthYearDigits = null;
  var form = document.getElementById("form");

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
  const maleNameList = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
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
  const femaleNameList = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

   /*Getting inputs from HTML Form*/
   birthYear = form.elements[0].value;
   birthMonth = form.elements[1].value;
   birthDay = form.elements[2].value;

   /*Get choice of gender from the Radio Button*/
   gender = checkGenderChoice();

   /*clear previous update on response and error id on HTML, if any.*/
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

   // Function to check the Radio Option picked
   function checkGenderChoice() {
     let genderChoice = null;
     if (document.getElementById("male").checked === true) {
      genderChoice = "male";
      return genderChoice;
     } 
     else if (document.getElementById("female").checked === true) {
      genderChoice = "female";
      return genderChoice;
     } 
       else {
       return null;
      }
     }

     //validate all the entries in the form are filled. None is left blank.
     if (birthYear == "" || birthMonth == "" || birthDay == "") {
     //print error message on console
     console.log("Error: Ensure you fill all the entries -> Some entries are blank");
     //Alert error message on console
     alert("Ensure you fill in all the entries");
     //Update on web page
     //document.getElementById("error").innerHTML = "Ensure you fill all the entries";
     //Refresh the form
      form.reset();
     } 
     else {
     //Validate birthYear is made up of number characters only
     if (containNumbersOnly(birthYear) === true) {
       console.log("OK: Year Numbers only:" + birthYear);

       //Validate birthMonth is made up of number characters only
       if (containNumbersOnly(birthMonth) === true) {
        console.log("OK: Month Numbers only:" + birthMonth);

        //Validate birthDay is made up of number characters only
         if (containNumbersOnly(birthDay) === true) {
           console.log("OK: Day Numbers only:" + birthDay);

           //check that the year is 4 digits long => CCYY i.e 1934
           if (birthYear.length === 4) {
            //observe the year input in string
            console.log("OK: Length is OK:" + birthYear);
            //slice the CC and YY values and observe the value
            birthCenturyDigits = birthYear.slice(0, 2);
            birthYearDigits = birthYear.slice(2, 4);
            console.log("OK birthCenturyDigits  :" + birthCenturyDigits);
            console.log("OK: birthYearDigits:  " + birthYearDigits);

            //observe the datatye of CC and YY
            console.log("OK: birthCenturyDigits :" + typeof birthCenturyDigits);
            console.log("OK: birthYearDigits:  " + typeof birthYearDigits);

            //Parse from String to Numbers
            birthCenturyDigits = parseInt(birthYear.slice(0, 2));
            birthYearDigits = parseInt(birthYear.slice(2, 4));

            //Observe the Parsing is data Type of the output
            console.log("OK birthCenturyDigits  :" + birthCenturyDigits);
            console.log("OK: birthYearDigits:  " + birthYearDigits);
            console.log("OK birthCenturyDigits  :" + typeof birthCenturyDigits);
            console.log("OK: birthYearDigits:  " + typeof birthYearDigits);

            /*parsing the inputs to help in validation - for Day DD, Month, MM*/
            birthMonth = parseInt(birthMonth);
            console.log("Parsed Birth Month " + birthMonth);
            birthDay = parseInt(birthDay);
            console.log("Parsed Birth Day " + birthDay);
            console.log("Your Gender " + gender);

             /*Validating the Months & Day inputs*/
             if (birthMonth >= 1 && birthMonth <= 12) {
              //Month is OK  (m>= 1) or (m <= 12) : Now validate the Day.
               console.log("OK: Month is OK -> Validate the Day");

               if (birthDay >= 1 && birthDay <= 31) {
                 //Day is OK  (d > 0) or (d< =31) : Now validate the gender.
                 console.log("OK: Day is OK -> validate the Gender");

                 //Strict validatation of gender
                 if (gender === "male" || gender === "female") {
                    //Gender is OK: m or f) : Now invoke function to calculate values to calculate index of day.
                   console.log("OK: Gender is OK -> Calculate Akan Name");

                   //Call the Akan Name Function to Check the Name
                   getAkanName();
                 } 
                   else {
                     //Gender is not Ok: Throw Error
                     console.log("Error: Choose Gender as Either Male or Female");
                     //Print alert on screen
                     alert("Choose Gender as either Male or Female");
                     //display error message on the web
                     //document.getElementById("error").innerHTML ="Choose Gender as either Male or Female";
                     //Refresh the form
                      form.reset();
                 }

                 } 
                 else {
                 //Day is not Ok: Throw Error
                 console.log("Error: Enter Birth Day between 1 and 31");
                 //Alert message on the screen
                 alert("Enter Birth Day between 1 and 31");
                 //display on the web form
                 //document.getElementById("error").innerHTML ="Enter Birth Day between 1 and 31";
                  //refresh the form
                  form.reset();
                }
               } 
               else {
                 //Month is not Ok: Throw Error
                 console.log("Error: Enter Birth Month between 1 and 12");
                 alert("Enter Birth Month between 1 and 12");
                 //display on the web form
                 //document.getElementById("error").innerHTML ="Enter Birth Month between 1 and 12";
                 //Refresh the form
                 form.reset();
               }
             } 
           
             else {
              //Throw Error: The length of the Year is Less than or More than 4 digits i.e CCYY
              console.log("Error: Fill the Year in Four Digits:" + birthYear);
              alert("Fill the Birth Year in Four Digits");
              //display on the web form
              //document.getElementById("error").innerHTML ="Fill the Birth Year in Four Digits";
              //Refresh the form
              form.reset();
           } 
        } 
        
         else {
              //Throw Error: the Day Entry contain non-numbers i.e #^7* @ e.t.c
             console.log("Error: Fill Day  Date in Numbers:" + birthDay);
              alert("Fill the Birth Day in Numbers");
              //display on the web form
             //document.getElementById("error").innerHTML ="Fill Birth Day in Numbers";
              //Refresh the form
              form.reset();
        }
      } 
       else {
             //Throw Error: the Month Entry contain non-numbers i.e #^7* @ e.t.c
             console.log("Error: Fill Month  Date in Numbers:" + birthMonth);
             //Alert message
             alert("Fill the Birth Month in Numbers");
             //display on the webpage
             //document.getElementById("error").innerHTML = "Fill Birth Month in Numbers";
             //Refresh the form
             form.reset();
      }
    } 
     else {
             //Throw Error: the Entry contain non-numbers i.e #^7* @ e.t.c
             console.log("Error: Fill Year Date in Numbers:" + birthYear);
             //Alert message
              alert("Fill the Birth Year in Numbers");
              //display on the web
             //document.getElementById("error").innerHTML ="Fill the Birth Year in Numbers";
             //Refresh the form
             form.reset();
    }
   }

   /*REGEX Function to validate the year INPUT only has numbers*/
   function containNumbersOnly(str) {
    return /^\d+$/.test(str);
   }

   /*Start of getAkanName Function*/
   function getAkanName() {
    //declare project local variables
    let akanName = null;
    let indexOf = null;

    //call the indexOfDay function to calculate index to access the 2 array lists.
    indexOf = getDayOfTheWeekIndex(birthCenturyDigits, birthYearDigits, birthMonth,birthDay);

    //Observe the response from the Function
    console.log("Test the response of the function call " + indexOf);

    //Strict check of gender! NULL Index means the Name does not exist.
    if (gender === "female" && indexOf !== null) {
         akanName = femaleNameList[indexOf];
         console.log("Your Akan Name -> Woman : " + akanName);
         //Alert to show Akan Name
         alert("Your Akan Name is : " +akanName);
         //Display Akan Name on the web
        // document.getElementById("demo").innerHTML ="Your Akan Name is : <strong>" + akanName + "</strong>";
         //Refresh/clear the form
         form.reset();
    } 
     else if (gender === "male" && indexOf !== null) {
         akanName = maleNameList[indexOf];
         console.log("Your Akan Name -> Man  : " + akanName);
         //Alert to show Akan Name 
         alert("Your Akan Name is : " +akanName);
         //Display Akan Name on the web
        // document.getElementById("demo").innerHTML ="Your Akan Name is : <strong>" + akanName + "</strong>";
         //Refresh/clear the form
         form.reset();
    } 
    
      else {
      //Throw Error: Akan Name does not exixt
       console.log("Your Akan Name does not exist");
       //Alert to display Akan Name does not exist
        alert("Your Akan Name does not exist");
       //Display Akan Name on the web
       //document.getElementById("demo").innerHTML ="Your Akan Name does not exist";
       //Refresh/clear the form
       form.reset();

    }
   }

   /*Function to Get Day of the Week Starts here start here*/
   function getDayOfTheWeekIndex(birthCenturyDigits, birthYearDigits, birthMonth,birthDay) {

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
    let dayOfTheWeekIndex = null;

    //To observe the values called in the function
    console.log("Birth Centuary " + CC);
    console.log("Birth Year " + YY);
    console.log("Birth Month " + MM);
    console.log("Birth Day " + DD);

    //Calculating the day of the Week as per project documentation
    d = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;

    console.log("The index of day is: " + d);

     if (d >= 0) {
       //Roundoff to the floor and return the Index. Index is +ve hence Akan Name exists in both lists. 
       dayOfTheWeekIndex = Math.floor(d);
       // Return Index to getAkanName function
       return dayOfTheWeekIndex;
     } 
     
       else {
       //The index should always be +ve, Akan Name does not exist in the 2 lists, wher index is -ve.
       // Return NULL to getAkanName function
       return null;
       
     }
  }
};
