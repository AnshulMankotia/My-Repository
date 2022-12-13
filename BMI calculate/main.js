
//------------ case1-------------
//1) store values in variables
const markWeight=78;
const markHeight=1.69;
const johnWeight=92;
const johnHeight=1.95;

// const user = {
//     name : 'Kartik',
//     age : 27,
//     username : 'kartikmalviya',
//     email : 'kartik@fanaticcoders.com'
// }


// let outputValue = `The name of the user is ${user.name} and his age is <span class="aga">${user.age}</span> and he contains username ${user.username} under the mailing address ${user.email}`;

// console.log(outputValue);

//2) formula for both BMI's
let BMI1=markWeight/(markHeight*markHeight);
let BMI2=johnWeight/(johnHeight*johnHeight);

console.log(BMI1 +" kg/m^2")
console.log(BMI2 +" kg/m^2")

// 3)create variable that contain boolean value
let markHigherBMI=BMI1>BMI2;
console.log(markHigherBMI);


// 4)message to show that mark has higher bmi than john's
if(markHigherBMI){
    console.log("Mark's BMI is higher than John's BMI")
}else{
    console.log("John's BMI is higher than Mark's BMI")
}

// 5)Using literal template
console.log(`Mark's BMI ${BMI1} is higher than John's BMI ${BMI2}`)

