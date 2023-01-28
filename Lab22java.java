let inches = prompt ("Enter height in inches");
let centimeters = inches * 2.54;
let lbs = prompt ("Enter weight in pounds");
let kilos = lbs / 2.205;

 let bmi = (kilos / ((centimeters * centimeters) 
                            / 10000)).toFixed(2);
 console.log("Height in centimeters is: " + centimeters);
 console.log("Weight in kilos is : " + kilos);
console.log("Your BMI is: " + bmi);
