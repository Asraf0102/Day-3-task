let req = new XMLHttpRequest();

req.open("GET","https://restcountries.com/v3.1/all")

req.send()

req.onload = function(){
    let result = JSON.parse(req.response)
     for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags.png);
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population);    

     }
}