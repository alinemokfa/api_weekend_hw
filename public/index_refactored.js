const app = function() {
  const url = 'https://restcountries.eu/rest/v2';

  makeRequest(url, requestComplete); //requestComplete (named) = callback in this case
}

//if funtion is created here, it's reusable

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

const requestComplete = function() {
  if(this.status !== 200){
       return;
     }

     const jsonString = this.responseText;

     const countriesListConvertedFromJson = JSON.parse(jsonString);
}


document.addEventListener('DOMContentLoaded', app);
