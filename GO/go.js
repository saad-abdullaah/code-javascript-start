// console.log("Hello")
// accountId ="ffffffff"
// accountEmail="sada@gmail.com"
// accountPassword="lpdl"
// console.table([accountId,accountEmail,accountPassword])
// "use strict" // use newer version of javascript
// let myDate = new Date()
// console.log(myDate .toString());
// console.log(myDate .toDateString());
// console.log(myDate .toISOString());
// console.log(myDate .toJSON());
// console.log(myDate .toLocaleString());
// // ARRAY+++++++++++++++++++++++++++++++++++++++++++
// const myArr = [0,1,2,3,4,5,true,"coding"]

// console.log(myArr);

// console.log("A" , myArr);
//  const myn1 = myArr.slice(1,3)
//  console.log(myn1)
//  console.log("B" , myArr)
// const myn2 = myArr.splice(1,3)
//  console.log(myn2)
//  const jsuser = {
//     name:"Saad",
//     age : 19,
//     location : "lahore",
//     lastLoggedinDays :["Monday","Saturday"]
//  }
 // Arry Method 
 //Use push method to add Element  in array
 // use Pop method to remove last value in array
 // Use Unshift add element in first
 // use shift to remove first 
 // use Includes method to check that element is in array or not 
 //also we use  indexof to check index
 // Use .join bind the array and convert array into string
 // Use slice and splice
// concat combine two arry and give new array
 // if we have arry in arry in aryy us flat method this give us a new arry 
 // to check arry use isArray 
 // to make arry use Array.from
 // to use multiple let use of 
 // OBJECTs
 // in  object we can define our keys values 
//  const mysym = Symbol("Iron Man")
// const jsuser = {
//      name:"Saad",
//      [mysym] : "mykey1",
//     age : 19,
//     location : "lahore",
//     lastLoggedinDays :["Monday","Saturday"]
//  }
// // console.log(jsuser.location)
// // console.log(jsuser["location"])
// // console.log(jsuser[mysym])
 
// // jsuser.email = "BANANA"
// // Object.freeze(jsuser)// now the object is freeze no one can change it
//  jsuser.greeting = function () {
//    console.log("Hello JS user ")
// }
// jsuser.greetingTwo = function () {
//    console.log(`Hello JS user , ${this.name} `)
// }
// console.log(jsuser.greeting());
// console.log(jsuser.greetingTwo())
 
//const dateuser = new Object() 
const dateusers = {} 
dateusers.id="7223"
dateusers.name="Andrew"
dateusers.isLoggedIn=false

console.log(dateusers);
// object in objects
const regularuser={
   email : "right@gmail.com",
   fullname : {
      userfullname: {
         firstname:"Andrew",
         lastname:"Tate"
      }
   }
}
console.log (regularuser.fullname.userfullname.firstname )
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);
  
const data = [
   {
      id:568,
      email: "google@gmail.com",
   },
    {
      id:578,
      email: "google@gmail.com",
   },
    {
      id:888,
      email: "google@gmail.com",
   }
]
 data[1].email
console.log(dateusers);
console.log(Object.keys(dateusers));
console.log(Object.values(dateusers));
console.log(Object.entries(dateusers));
console.log(dateusers.hasOwnProperty("name"));