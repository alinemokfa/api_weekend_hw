// var app = function(){
//   const url = 'https://restcountries.eu/rest/v2';
//
//   //Steps to do a get request using javascript
//   //1. Create a new XMLHttpRequest object
//   const request = new XMLHttpRequest();
//
//   //2. Call request open to say what request type (http METHOD (GET, POST, PUT, DELETE)) and url to go to
//   request.open('GET', url);
//
//   //3. What happens when the response is loaded. We need to tell the request object what to do.
//   //using an anonymous
//   request.addEventListener('load', function(event) {
//     if(this.status !== 200){
//       return;
//     }
//
//     const jsonString = this.responseText;
//
//     const countriesListConvertedFromJson = JSON.parse(jsonString);
//
//     console.log(countriesListConvertedFromJson);
//
//   });
//
//   //up until now, we were just setting everything up.
//   //4.DONT FORGET TO ACTUALLY SEND THE REQUEST
//
//   request.send();
// }
//
// document.addEventListener('DOMContentLoaded', app);
