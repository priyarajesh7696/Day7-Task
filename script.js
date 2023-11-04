//!step 1:- Create a XHR Object
var request = new XMLHttpRequest();
//*step 2:- Opening a connection to the server
request.open("GET","https://restcountries.com/v3.1/all",true)
//step 3:- Initiating a bridge to the server / sending a request / sending a connection
request.send();
//!step 4:- server response
request.onload = function(){
    var data = request.response;
    //console.log(data);
    var result = JSON.parse(data);
   
    // A : Get all the countries from Asia continent /region using Filter function
   let results = result.filter((ele)=>ele.region==="Asia" || ele.continents==="Asia");
   results.map((ele)=>console.log(ele.name.common));

   console.log(`    POPULATION < 200000
   ---------------------  `);
   /* B : Get all the countries with a population of less than 2 lakhs using Filter fun */
   let result1 = result.filter((ele)=>ele.population<200000)
   result1.map((ele)=>console.log(ele.name.common)) 
   console.log(`    `);
   
   // c: Print the following details name, capital, flag, using forEach function
  
  result.forEach((ele)=>console.log(`NAME : ${ele.name.common} / CAPITAL : ${ele.capital} / FLAG : ${ele.flag}`))
  console.log(`    `);
  

  // D : Print the total population of countries using reduce function
  
  const result2 = result.reduce((acc,cv)=>  
   acc+cv.population,0)
   console.log(`TOTAL POPULATION :${result2}`);
   console.log(`    `);

 // E :Print the country that uses US dollars as currency.
 
 let result3 = result.filter((ele)=>ele.currencies && ele.currencies.USD);
 result3.forEach((ele)=>console.log(ele.name.common)) 
 
}