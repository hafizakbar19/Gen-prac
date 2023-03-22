// let myVar = prompt("Enter your charecter: ");
// switch(myVar){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         document.write("this is a vowel");
//         break;
//         default:
//         document.write("This is a consonant");


// }
// let weight = 350;
// let time = 5;
// if (weight > 300 && time < 6) {
//      console.log("Come to our tryout!");
//      }
//      else {
//      console.log("Come to our cookout!");
//      }
    
//creating and epmty array and then adding the value to it
// let boys = [];
// boys[0] = "Akbar";
// boys[1] = "Noor";
// console.log(boys);
// //chapter 18

// let array1 = ["Akbar", "Ali", "Raza", "Ahmed",];
// let array2 = ["Karachi", "Lahore", "Multan", "Peshawar"];
// let finalArray = [];
// for (let i = 0; i < array1.length; i++){
    
//     for (let j = 0; j < array2.length; j++){
//         // console.log(array1[i],array2[j]);
//         finalArray.push(array1[i],array2[j]);
    
//     }
// }

// console.log(finalArray);

//object

// let myObj1 = {
//     name: "Akbar",
//     age: 35,
//     city: "Karachi",
// };

// console.log(myObj1.name);

//arry of objects

// let myObj2 = [
//     {
//         name: "Akbar",
//         age: 35,
//         City: "Karachi"
//     },
//     {
//         name: "Noor",
//         age: 38,
//         City: "Lhore"
//     },
//     {
//         name: "Ziarat",
//         age: 39,
//         City: "Islamabad"
//     }
// ];
// myObj2[1].name = "Saeed";
// console.log(myObj2[1].name);


// function 
//1st way to make a function
function a(name){
    console.log(`Hello ${name}`);
};
//second way to make a function
let b= (name) => {
    console.log(`Hi ${name}`);
}
b("Saleem");
// module.exports = { a,b};
export{a,b};