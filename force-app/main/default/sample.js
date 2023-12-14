// // setTimeout(()=>{
// // console.log("time interval done");
// // },5000)


// // let setintervalDetails="";
// //  setintervalDetails = setInterval(()=>{

// // },5000)

// // setTimeout(() => {
// //     clearInterval(setintervalDetails)
// //     console.log("timeout interval completed");
// // }, 15000);
// // //import from other js file
// // import {weekdays,DATE_OF_YEAR,syHi} from "./script.js";
// // console.log("weekdays",weekdays);
// // console.log("DATE_OF_YEAR",DATE_OF_YEAR);
// // syHi('hey welcome learn js salesforce ')
// //promise:
// //instead of use callback function we wil have to use the promise
// //generally promise function used for to improve the application performence 
// //create promise:
// function generatePromise(message){
//    return new Promise((resolve, reject)=>{
//     if(!message){
//         reject("message is empty")
//     }else{
//         setTimeout(()=>{
//             console.log(message)
//             resolve();
//         },2000)
//     }

//    })
// }
// //
// async function generateDifferentPromises(){
//     try{
//     await generatePromise("first call")
//     await generatePromise("second call")
//     }catch(error){
//         console.log(error);
//     }
// }
// generateDifferentPromises();
// //how to call the promise
// // generatePromise("Hi its me 1st call")
// // .then(()=>{
// //     console.log("1st promise resolved successfully");
// //     generatePromise("2nd call")  
// // }).then(()=>{
// //     console.log("2nd promise resolved succesfuly")
// //     generatePromise()  
// // }).catch((error)=>{
// //     console.log("promise rejected",error);
// // })

// //promise.all:

// function resolveTimeOut(value, delay){
//     return new Promise((resolve)=> setTimeout(()=>resolve(value),delay))
// }
// function rejectTimeOut(reason, delay){
//    return new Promise((resolve, reject)=>setTimeout(()=>reject(reason),delay))
// }
// async function load(){
//     let promise1 = resolveTimeOut("Well come to tech journey with anklit", 5000);
//    // let promise2 = resolveTimeOut("welcome to bboptcamp",7000);
//     let promise2 = rejectTimeOut("Loading failed",1000);
//     //const allPromises=Promise.all([promise1,promise2]);
//     //const allPromises=Promise.any([promise1,promise2]);
//     const allPromises=Promise.race([promise1,promise2]);

//     try{
//         const lists = await allPromises;
//         console.log("lists",lists);
//     }catch(error){
//          console.log(error);
//     }
// }
// load();
//Fetch Api: promise ----

// function loadRandomUsers(){
//     fetch("https://reqres.in/api/users")
//     .then((response)=> response.json())
//     .then((data)=>console.log(data))
// }
// loadRandomUsers();

//fetch api using asych await--

// async function loadRandomUsers(){
//     let response = await fetch("https://reqres.in/api/users")
//     let data = await response.json();
//     console.log(data);
// }
// loadRandomUsers();

// function randomDog(){
//     fetch("https://thhttps://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1edogapi.com/")
//     .then((response)=> response.json())
//     .then((data)=>console.log(data));
// }
// randomDog();

// function randomCarImage(){
//     fetch("https://api.carsxe.com/pic?image=@VG95b3RhIENhbXJ5IENFIC8gTEUgLyBYTEU=")
//     .then((response)=> response.json())
//     .then((data)=> console.log("response",data))
// }
// randomCarImage();

// async function loadRandomImage(){
//   let response = await fetch('https://www.fruityvice.com/api/fruit/[fruit-name]/image')
//   let data   = await response.json()
//   console.log(data);
//   const imageUrl = data[0].url;
//   console.log(imageUrl);
//   let element = document.querySelector(".carImg")
//   element.src=imageUrl;
// }
// loadRandomImage();

//debugging techniques
//debugger
function calculateArrSum(arr){
    debugger;
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}
const numbers=[2, 4, 5, 6, 7];
const total = calculateArrSum(numbers);
console.log("total", total);