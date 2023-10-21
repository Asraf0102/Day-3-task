const obj1 = {name:"person1", age:5};
const obj2 = {age:5, name:"person1"};

let keys1 = Object.keys(obj1)
let keys2 = Object.keys(obj2)

console.log(keys1, keys2)

let flag = true

if (keys1.length == keys2.length){
     for(let key in obj1){

         if(obj1[key] != obj2[key]){
             flag = false;
         }
     }
}else{
   flag = false;
}
if(flag){
    console.log("Objects are same")
}else{
    console.log("Objects are not same")
}