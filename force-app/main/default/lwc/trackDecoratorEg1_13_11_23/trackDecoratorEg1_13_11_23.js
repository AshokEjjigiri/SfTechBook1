import { LightningElement,track } from 'lwc';

export default class TrackDecoratorEg1_13_11_23 extends LightningElement {
     Message;
    onchangeGreetings(event){
        this.Message=event.target.value;
        console.log(this.Message)
        // console.log('Well come Javascript');
        // console.log("Well come Javascript");
        // console.error("Well come Javascript");
        // console.warn('Well come Javascript');

         let name="Ashok";
         console.log('name is',name);

         name="ashok ss"
         console.log('name is',name);

         //let namew="gshjj";
         const fName="Ejji";
         console.log("fname",fName);
         //const fName="Ejji";
         //fName="hsjakakl";
         //console.log("fnameupdate",fName);
         const obje={fname:"Ashok", sname:"Ejj"};
         console.log("fname1",obje.fname);
         obje.fname="ashokee";
         console.log("fname",obje.fname);

         //Data Types
         let myName="Power";
         console.log("myname",myName);
         console.log("typeof myname", typeof myName);

         myName=1;
         console.log("myname",myName);
         console.log("typeof myname", typeof myName);

         myName=true;
         console.log("myname",myName);
         console.log("typeof myname", typeof myName);

         myName={}
         console.log("myname",myName);
         console.log("typeof myname", typeof myName);
         
         myName=[];
         console.log("myname",myName);
         console.log("typeof myname", typeof myName);

         myName=null;
         console.log("myname",myName);
         console.log("typeof myname", typeof myName);

         myName;
         console.log("myname",myName);
         console.log("typeof myname", typeof myName);

         myName=undefined;
         console.log("myname",myName);
         console.log("typeof myname", typeof myName);

         console.log("Logical Operators")

         let myNum1=20;
         let myNum2="30";
         console.log(typeof myNum1, typeof myNum2);
         if(isNaN(myNum2)){
            console.log("myNum2 is a not number thus conversion not happend")
         }else {
         console.log(myNum1+Number(myNum2));
           }

         let myNum3="20";
         let myNum4=30;
         console.log(typeof myNum4, typeof myNum3);
         console.log(myNum4+Number(myNum3));
         console.log(myNum4-myNum3);
         console.log(myNum4*myNum3);
         console.log(myNum4/myNum3);
         console.log(myNum4+myNum3);
         
         console.log("Logical operators")
         let myNumber1 = 34;
         let myNumber2= 45;
         console.log(myNumber1 > myNumber2);
         console.log(myNumber1 < myNumber2);

         console.log(myNumber1 > 50 && myNumber1 <50);
         console.log(myNumber1 > 50 && myNumber1 >50);

         console.log(true && true);
         console.log(true && false);
         console.log(false && true);
         console.log(false && false);

         console.log(true || true);
         console.log(true || false);
         console.log(false || true);
         console.log(false || false);

         let age=34;
         let output= age>23 ? "wrong answeer" : "write answer";
         console.log("output", output);

         // equal == 
         // ===

         let myNum5= 76
         let myNum6=76;
         console.log(typeof myNum5, typeof myNum6);
         console.log(myNum5 == myNum6);
         console.log(myNum5 === myNum6);

         console.log("myNum5" == "MyNum6");
         console.log("myNum5" == "myNum5");
         console.log("myNum5" === "myNum5");
         console.log("myNum5" == "MyNum6");

         let numnber=null;
         let numbneh;
         console.log(typeof numnber, typeof numbneh);
         console.log(numnber == numbneh);
         console.log(numnber === numbneh);
         
         //Object 

         let employee={
            fName:"suresh",
            lName:"takur",
            age:45,
            skills:["java","admin","sfdc","lwc"]
         }
         console.log(typeof employee);
         console.log("employee", employee);

         //object to string
         let objString = JSON.stringify(employee);
         console.log(typeof objString);
         console.log(" employee details", objString);

         //string to Object
         let stringObject= JSON.parse(objString);
         console.log(typeof stringObject);
         console.log(" stringObject employee details", stringObject);


         employee.dob="01/01/1940";
         console.log("employeeadddob ",employee);
         employee.age=2023-1934;
         console.log("employeeadddob ",employee);

        //  mycountry="country";
        //  employee[mycountry] = "India";
        //  console.log("employeeadcountry" ,employee);

        //  employee["state"] = "Delhi";
        //  console.log("employeeaState" ,employee);
       
        let agee=employee["age"];
        console.log("age",agee)

        console.log("spread Operator");
        let set1 = [1, 2, 3];
        let set2 = [4, 5, 6];
        console.log(typeof set1, typeof set2);
        console.log(...set1, ...set2);

        let myNamew = "My name is Rahul";
        console.log(typeof myNamew);
        console.log("myna",myNamew);
        console.log(...myNamew);

        //Object cancatination using spread operator
        let obj1 = {age:30, skills:['admin', 'dev', 'Lwc']};
        let obj2 = {Name:'Shuabhs', Skills:['admin', 'dev', 'Lwc']};
        let finalObj = {...obj1, ...obj2};
        console.log("finalObj" ,finalObj);

        //copy the array or object;
        let myFavFruits=['jamakaya','Arati','apple','garpes'];
        console.log("myFavruotefruit",myFavFruits);
        let myFavfruitCopy=myFavFruits;
        console.log("copyFruit", myFavfruitCopy);
        myFavfruitCopy.push("cherry");//deep copy
        console.log("myFavruotefruit",myFavFruits);
        console.log("copyFruit", myFavfruitCopy);
        let myfavfruitsCopy2 = [...myFavFruits];
        myfavfruitsCopy2.push('tomato');//shallow copy
        console.log("myFavruotefruit",myFavFruits);
        console.log("copyFruit", myfavfruitsCopy2);

        let myobjects={name:'ankit', lname:'jain'};
       // let myobjectsCopy =myobjects;
        console.log('myobject',myobjects);
        //console.log('myobjectCopy',myobjectsCopy);
       // myobjectsCopy.age=45;
       // console.log('myobjectCopy',myobjectsCopy);

        let myobjectsCopyyy = {...myobjects};
        myobjectsCopyyy.age=34;
        console.log('myobject',myobjects);
        console.log('myobjectCopy1',myobjectsCopyyy);

        //destructering arrays and objects
       let myFavFruirts=["gauva","banana", "custord","orange"];
       console.log(myFavFruirts);
       let namee1 = myFavFruirts[0];
       console.log("namee",namee1);
       let [name1, name2, , name4]=myFavFruirts;
       console.log("name1",name1);
       console.log("name2",name2);
       console.log("name4",name4);

       let employeeDetailss={
        fNamee:"Ankit",
        lName:'Jain',
        doy:2033
       }
       let{fNamee,doy}=employeeDetailss;
       console.log("empdetails",fNamee);
       console.log("empdetails",doy);

       //string interpolation

    let myString1 = "my name is";
    let myString2 = "Ankit"
    let myString3 = "I stay In"
    let myString4 = "Hyd"
    let myString5 = 2023-1974;
    let myString6 = "my Age is"+myString5;
     
    let myFinalString=`my name is ${myString2}. I stay In ${myString4} ${myString6}`;
    console.log("finalstring",myFinalString);

    let mystr="my name is tufaan jain";
    let mystrArray =mystr.split("");
    console.log("arry",mystrArray);
    let mysrraystatu=mystrArray[19];
    console.log('array19 is' ,mysrraystatu);

    //for loop

   let myFavCas = ["Audi","BMW","Ford","VolksWagen"];
   for(let i = 0; i < myFavCas.length; i++){
    console.log(`${i + 1}. ${myFavCas[i]}`);
   }
   //for of
   for(let curritem of myFavCas){
    console.log('currentItem,',curritem);
   }
   ///index and item
   for(let curritem of myFavCas.entries()){
    console.log('currentItem,',curritem);
   }

   for(let [index,name] of myFavCas.entries()){
    console.log(`${index+1}. ${name}`);
   }
   //for of loop in objects;

   let myData={
    fName:"Testing",
    lName:"test2",
    age:"34",
   }
   console.log("myDetails",myData);
   for(let curritem of Object.keys(myData)){
    console.log("mydata",curritem);
   }
   for(let curritem of Object.values(myData)){
    console.log("mydata",curritem);
   }
   let current=0;
   for(let [key, value] of Object.entries(myData)){
    console.log(`${current+1}.` ,key, value);
   }
  // for of-- if u want to access the values of array then go with for of loop
  //for in-- if u want to access the indexs of array then go with the for in loop
  for(let curritem in myFavFruirts){
    console.log(curritem);
    console.log(curritem, myFavFruirts[curritem]);//for in with array
  }
  //for in with object
  for(let item in myData){
    console.log(item);
    console.log(item, myData[item]);
  }

  let workHours={
 fri:{open:"10 AM" , close:"7 PM"},
 sat:{open:"9 AM" , close:"6 PM"},
 thurs:{open:"8 AM" , close:"6 PM"}
  }
 for(let currItem in workHours){
    console.log(currItem);
    console.log(currItem, workHours[currItem]);

    let{open,close} =workHours[currItem];
    console.log(open ,close);
    console.log(`the working hours of ${currItem} starts at ${open} and close at ${close}`);
 }
 for(let [day,{open,close}] of Object.entries(workHours)){
    console.log(day, open , close);
    console.log(`the working hours of ${day} starts at ${open} and close at ${close}`);
 }
  
 //In javascript Object "key" always a string. if u want to go to other than string data type you have to use the Map collection in JS
//Map Collection;
let  myMap= new Map();
console.log("Mymap",myMap);
//Add elements to map
myMap.set("1","Ankit");
myMap.set(1,100);
myMap.set(true,"Trainer");
myMap.set("Name","Ankit1");
console.log("Mymap",myMap);
//get elements from map
myMap.get("1");
myMap.get(true);
console.log("Mymap",myMap.get("1"));
//modern js map
let favPLaces=[
    ["Jaipur","palaces"],
    ["Goa","Beaches"],
    ["pune","fort"]
]
 for(let [key, value] of favPLaces){
    console.log(key, value);

for(let curreItem of Object.keys(favPLaces)){
    console.log(curreItem);
}

 }
 for(let curreItem of Object.values(favPLaces)){
    console.log(curreItem);
}
for(let curreItem of Object.entries(favPLaces)){
    console.log(curreItem, favPLaces[curreItem]);
}

// Assignment

const game={
    team1:"India",
    team2:"Australia",
    players:[["Dhoni","Sachin","Kohli","sharma","Pandya","shami","gill","kuldeep","Rahul","Jadeja","Ashwin"],
    ["wade","cummons","green","maxwell","finch","hazleewood","marsh","stoins","Rechardson","stare","warner"]],
    century:["Kohli","Sharma","Warner","maxwel"],
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.25
    },
}
//1.create one player array for each team (variables players1 and players2)
let [players1,players2] = game.players;
console.log("players1" ,players1);
console.log("players2",players2);
//the first player in any player array is the wicket keeper and others are field players
//in india team1 create one variable ind with the wicket keeper name

let[captain, ...fieldplayers]=players1;
console.log("captain", captain);
console.log("fieldplayers", fieldplayers);

let[captain2, ...fieldplayers2]=players2;
console.log("captain", captain2);
console.log("fieldplayers", fieldplayers2);
// print the total number of players from each teams using spread operators
let finalArray=[...players1,...players2];
console.log(finalArray);
//during game add 3 more substitues for team1 for india players like sandeep, joh, chahal

let addnewArray = [...players1,"Sandeep","Chahal","jOHN"];
console.log("addnewArray",addnewArray);
//based on game.odds object create a one variable for each odd(like team1, draw, team2)

let{team1,x:draw,team2}=game.odds;
console.log("team1",team1);
console.log("draw",draw);
console.log("team2",team2);
//which team has the lowest probablity that team will win
//if block using
if(team1<team2){
    console.log("team1 will win");
}else {
    console.log("team2 will win");
}
 //ternanry operator 
 team1<team2 ? console.log("team1 will win"): console.log("team2 will win");

//logical operators

team1<team2 && console.log("team1 will win");
team2<team1 && console.log("team2 will win");
//print like this century 1:Kohli

for(let currItem of game.century){
    console.log( currItem);
}
for(let currItem of Object.entries(game.century)){
    console.log( currItem);
}
for(let [index, value] of game.century.entries()){
    console.log(`Century ${index+1}. ${value}`);
}
//calculate avg of odds object
let sum=0;
let counter = 0;
for(let currentItem of Object.values(game.odds)){
    console.log("currentitem",currentItem);
    sum = sum+currentItem;
    console.log(sum);
    counter=counter+1;
}
    console.log(counter);
    console.log("avg",sum/counter);
    console.log("avg",Math.round(sum/counter));

//Function declaration and function expression

 //Function declaration-calling function before declartion-legacy
 let calcReult = clal1(10,20);
console.log("calcReult", calcReult);
 function clal1(num1,num2){
    sum=num1+num2;
    return sum;
 }        

//function expression
//whenever we go and store the function in variable we can reffered as a function expression

let calc2 = function(num1,num2){
    if(num2){
 sum=num1+num2;
 return sum;
}else{
    return num1;
}
 
}

let calcReult1=calc2(10,20);
console.log("calcReult1", calcReult1);

let calcResult2 =calc2(10);
console.log("calcResult2", calcResult2);

//Arrow Functions allow us to write the shorter function syntax
//Arrow functions are modern way of writing the function expression

let mul=function(number1, number2){
    sum=number1-number2;
    return sum;
}
let result = mul(93,45);
console.log("mulresut", result);

//now convert into arrow function
let mulArrow =(number3,number4)=>{
    sum=number3-number4;
    return sum;
}
let result1 = mulArrow(933,45);
console.log("mulresut", result1);
//call back functions
//pass the arguments from one function to another function
//pass the function name as a argument then second parameter will be the call act as call back function

function welcome(name,callMe, mesgame){
    console.log(`Hello ${name}`);
    callMe();
    mesgame();
}

function greetingMsg(){
    console.log("Wellcome to tech journey");
   
}
function gdbye(){
    console.log("See you in next session");
}

welcome("Ankit",greetingMsg,gdbye);
// String Methods
let myDetails = "my name is Js learner";
console.log("myDetails",myDetails);
console.log("myDetails", myDetails.length);
//extracting string

let text = "Apple, Banana, Cherry";
console.log("text",text);
//slice
let bananPrint = text.slice(7,13)
console.log("banana print",bananPrint);
let textSlice = text.slice(7)
console.log("banana print",textSlice);
// replace
 let replacewith = text.replace("Banana", "Mango")
 console.log("replace",replacewith );
 console.log("text",text);
 //trim
 let trimText = "   Hello World  ";
 console.log(trimText.trim());
 console.log(trimText.trimStart());
 console.log(trimText.trimEnd());
//PadStart, padEnd
let myNumberr = "5";
let padAdd  = myNumberr.padStart(3,"*");
console.log(padAdd);
let padEnds = myNumberr.padEnd(4,"$")
console.log(padEnds);
//split=> convert string to array
//split will used to make the string to array
let myFavPlaces = "Hyd, Delhi, kerala, kodikenal,manali";
console.log("myFavPlaces", myFavPlaces);
let splitted = myFavPlaces.split(",");
console.log("splitted",splitted);
//to convert array to string
//toString
//join
let myToString = splitted.toString(",");
console.log("myToString",myToString)
// search string
//index => index is position of a stringf

console.log(text);
console.log(text.indexOf("Banana"));
console.log(text.indexOf("Mango"));
console.log(text.includes("Banana"));
console.log(text.includes("Hjj"));
//What is array
//array is type of varibale which can hold the single or multple values
//Array and Array Methods
 let myCars = ["BMW", "Audi","Bnez",];
 console.log("myCars",myCars);
 let emptyAry = [];
 console.log("emptyAry", emptyAry);
 //add the elemt at the begining the of array use unShift method
 myCars.unshift("Ford");
 console.log("myCars",myCars);
 //add the elemt at the begining the of array use push method
 myCars.push("TATA");
 console.log("myCars",myCars);
 //spread opertor
 myCars=["Maruthi", ...myCars, "suzuki"]
 console.log(myCars);
//Remove the elements from the array
//shift--remove the element from the entry of the array start
//pop-- remove the element from the array from the end 
console.log(myCars);
let popItem = myCars.pop()
console.log("popItem",popItem);
console.log(myCars);
let popItem1 = myCars.shift()
console.log("popItem1",popItem1);
console.log(myCars);
//modify the element of the array
///replace the element in array
console.log(myCars);
myCars[2 ] = "Suzuki"
console.log(myCars);
//Remove the Duplicates from the array
myCars.push= "Suzuki";
console.log("myCars", myCars);
let mySet = new Set(myCars);
console.log("mySet",mySet);
//search element
//indexOf
//includes
console.log("myCarsIndex of", myCars.indexOf("Suzuki"));
console.log("myCarsIndex of", myCars.includes("Suzuki"));
//Convert array into string
//toString method. by defalut separated by comma ","
//join  method. -ndecide operator
console.log("To string", myCars.toString());
console.log("To String", myCars.join("*"));
//splice==> to add element to the array to remove the element from the array
//splice(param1,param2,rest)
//param1=>position where new element will be added
//param2=>how many elements needs to be removed
//rest=> new elements you have to add
//splice=>return the array of deleted elements
//splice=> modify the original array

let fruits  = ["Banana","Kiwi","cherry","gauve"]
console.log("fruits",fruits)
let addFruitss = fruits.splice(2,0,"Apple","Custord");//added two fruits
console.log("addFruitss",addFruitss);
console.log("fruits",fruits);

let removeFrits = fruits.splice(0,2);// remove two fruits
console.log("removeFrits",removeFrits)
console.log("fruits",fruits)

//slice--> extract the any portion from array  go for slice
//slice--> return the new array it will not modify the original array
//slice(param1,param2)
//param1---> index of the starting argument 
//param2--> index of the ending argument+1
console.log("fruits",fruits)
let extractArray = fruits.slice(1,3);
console.log("extractArray",extractArray)
console.log("fruits",fruits)
//forEach 
//forEach((currItem, index, originalArray)=>{
//});
let bankingTrnasactions = [5000, -7000, 9000, -4000, 2000];
console.log("bankingTrnasactions",bankingTrnasactions);

bankingTrnasactions.forEach((curritem)=>{
    curritem=curritem/10;
    console.log(curritem);
});

let updateArray = bankingTrnasactions.map((currItem)=>{
    return currItem/10;
})
console.log("updateArray",updateArray)
//filer method--> it always return the array
//filer is used to filtering the main array
//filter the deposites from the main array
let deposites = bankingTrnasactions.filter((currItem)=> currItem>0)
console.log("deposites",deposites)
//filer the withdras from the main array
let withdras = bankingTrnasactions.filter((currItem)=> currItem<0)
console.log("withdras",withdras);
//currentItem length charector length is greater than 3char print
let myfrits = ["fig","apple","custord","grapes"];
let fileredArray = myfrits.filter((currItem)=> currItem.length>3)
console.log("fileredArray", fileredArray);
//find method-->it always return the single entry or item
let findOut  = bankingTrnasactions.find((currItem)=> currItem===9000)
console.log("findOut",findOut)
//Assignment-2
//1Q: write a function that takes string as a input and return new string with the fst letter of each word captalised
//input:hello world welcome to learn salesforce
//output:Hello World
const stringFunction = (inputString)=>{
  let convertArray = inputString.split(" ")//converted string to array
  let captlisedArray = convertArray.map(currItem=> currItem[0].toUpperCase()+currItem.slice(1))//return array using map
  let arrayTostring = captlisedArray.join(" ");
  console.log("convertArray",convertArray);
  console.log("captlisedArray",captlisedArray);
  console.log("arrayTostring",arrayTostring);

}
stringFunction("hello world welcome to learn salesforce");
//2Q: write a function that takes input as a string and return a reverse of the string  maintaning cases of each char
//input:Hello World
//output:dlrow olleH
const reverseString = (inputItem)=>{
    let conArray =inputItem.split("");//convert string to array
    console.log("conArray",conArray);
   let reverseLtter=conArray.reverse();
   console.log("reverseLtter",reverseLtter);
   let output = reverseLtter.join("");
   console.log("output",output);


}
reverseString("Hello World");

const reverseString2= (inputItem)=>
inputItem.split("").reverse().join("");
console.log("reverseString2",reverseString2("Hello World"))// direct method
//3Q: create a function takes the input as a string returns the number of occurances of each charector in the string
//input:"hello"
//output:{h:1, e:1, l:2, o:1}
const countCharectors = (inputString)=>{
    let output={};
    let conArray = inputString.split("");
    console.log("conArray",conArray);
    for(let currItem of conArray){
        console.log("currItem",currItem);
        if(output.hasOwnProperty(currItem)){
            output[currItem]=output[currItem]+1;
        }else{
            output[currItem]=1;
        }
    }
    console.log("output",output)
}
countCharectors("hellollou")
//4Q: write a function to generate the username of the based on firstname lastname middlename
//input: ankit dileepji jain
//output: ADJ
let usernameGenerate = (inputString) =>{
    let convUppercase = inputString.toUpperCase();//convert uppercase
    let convArray = convUppercase.split(" ");//convert strin to array
    console.log("convUppercase", convUppercase);
    console.log("convArray", convArray);
    let intialCharect = convArray.map((currentItem)=>currentItem[0])//iterate through array and return array
    console.log("intialCharect", intialCharect);
    let convString = intialCharect.join("");// array to string
    console.log("convString", convString);
   
    //direct way
    let result = inputString
                .toUpperCase()
                .split(" ")
                .map((currItem)=>currItem[0])
                .join("")
    console.log("result",result);   
}
usernameGenerate("ankit dileepji jain");
//5Q: write a function that takes array of string as input and return a new array 
//of each charector in the array of element greater than or equal to 5
//input:["Apple","Banana","custord","guava","fig","Cherry"]
//output:["apple"]
let charectorLength = (inputArray)=>{
    let lengthChar = inputArray.filter((currentItem)=>currentItem.length>=5);
    console.log("lengthChar",lengthChar);
}
charectorLength(["Apple","Banana","custord","guava","fig","Cherry"]);
//An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
//HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.










    }
    
    clickme(){
        alert("hello its me");
    }
    mouseoverhandler(event){
        console.log("mouse over working");
        let element = document.querySelector(".hoverme");
        element.style.display="none";

    }
    mouseouthandler(){
        let element = document.querySelector(".hoverme");
        element.style.display="";

    }
    chnagehandler(event){
        console.log(event.target.value)
    }

    //handle the event
    
    hanbdlechnagenumber(event){
        console.log(event.target.value);
        let value = event.target.value;

        //whenever user go and enter the value then fire the custom event
        //step-1 create custom event
        if(value==20){
            const myEventvar = new CustomEvent("myeventname" ,{
                detail:{
                    Message:"User have enter value 10"
                }
            });
            //step2-dispatch event
            document.dispatchEvent(myEventvar)
        }
        document.addEventListener("myeventname",(event)=>{
            console.log("access the data",event.detail.message);
        });
    }
    
   
}