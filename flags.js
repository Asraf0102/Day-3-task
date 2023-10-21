const URL = "https://restcountries.com/v3.1/all"

const myReq = new XMLHttpRequest();

//console.log(myReq)

myReq.addEventListener("load", function() {
    const obj = JSON.parse(this.response)
    for(let val of obj){
         //console.log(val.flags.png)
         console.log(val.flags.svg)
    }
})
myReq.open("GET", URL);
myReq.send()

//console.log(myReq)
