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
// function a(name){
//     console.log(`Hello ${name}`);
// };
// //second way to make a function
// let b= (name) => {
//     console.log(`Hi ${name}`);
// }
// b("Saleem");
// module.exports = { a,b};
// // export{a,b};

// let arr = ["Akbar", "Ahmed","Haniya"];
// arr.length = 0;
// arr.push("Noor");
// console.log(arr);

// for ( let i = 1; i < 100; i++){
//     if(i === 5){
//         console.log(i);
//         break;
//     }
// }
// console.log("Akbar");

// function setInterval(start,end){
//     for (let i = start; i < end; i++)
//     console.log(i);
// }

// setInterval(1986,2023);


// const grades = [91, 66, 77, 84, 66];
// const search = 91;
// function searchGrade(grades, search){
//     for(let i = 0; i < grades.length; i++){
//         if(grades[i] === search){
//             console.log('The grade exist!');
//             break;
//         }else{
//             console.log('doesnt exist!');
//         }
//     }
// }
// searchGrade(grades, search);


const one= [91, 66,77,84,68];
const two =[81,66,78,88,98];
function compareArray(one,two){
    for(let i =0; i< one.length;i++){
        if( one[i] === two[i]){
            console.log("common element", one[i]);
        }
    }return false;
}
compareArray(one,two);