
let img = document.querySelector('img');
let dogButton = document.querySelector('button');


dogButton.addEventListener('click', () => {

    fetch('https://dog.ceo/api/breeds/image/random').then(function(response){
    //console.log(response.json());
    console.log(2)
    return response.json()
})
.then(function(data){
    // console.log(data);
    // console.log(data.message); // use this message url for the image
    // console.log(data.status);
    console.log(3)

    img.src = data.message;
})
})
















// Part 2

let weatherForm = document.querySelector('#weatherForm');
let cityInput = document.querySelector('#cityInput');
let temperature = document.querySelector('#temperature');
let wind = document.querySelector('#wind');
let description = document.querySelector('#description');




weatherForm.addEventListener('submit', (event) => {
event.preventDefault();
//https://goweather.herokuapp.com/weather/
fetch(encodeURI(`https://goweather.herokuapp.com/weather/${cityInput.value}`)).then(function(response){

return response.json()

})
 .then(function(data){
   
   city.innerText = cityInput.value
   temperature.innerText = data.temperature
   wind.innerText = data.wind
   description.innerText = data.description
   
    
})
})