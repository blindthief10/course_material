const authToken = '16d4785f9c10724266053adb3c29dcfd';
const btn = document.querySelector('button');
const form = document.querySelector('form');
const inputField = document.querySelector('input');
const divContainer = document.querySelector('#container');

const colorTemperatures = [
  {limitTemp: 40, color: 'red'},
  {limitTemp: 35, color: 'orange'},
  {limitTemp: 30, color: 'yellow'},
  {limitTemp: 20, color: 'deepskyblue'},
  {limitTemp: 10, color: 'purple'},
  {limitTemp: 0, color: 'grey'},
  {limitTemp: -100, color: 'white'}
];

let makeAllRequestsSimultaneously = collectionOfCities => {
  let allCitiesPromises = [];
  for (city of collectionOfCities) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken}`
    let promiseCity =  new Promise((resolve, reject) => {
        resolve(fetch(url));
    })
    allCitiesPromises.push(promiseCity);
  }
  return Promise.all(allCitiesPromises);
}

let getWeatherForCity = async ev => {
  ev.preventDefault();
  let cities = inputField.value.split(`-`);
  let intervalCounter = 0;
  try {
      let allResponses = await makeAllRequestsSimultaneously(cities);
      let weatherData = [];
      for (response of allResponses) {
        let convertedResponse = await response.json();
        weatherData.push(convertedResponse);
      }

      let citiesInterval = setInterval( async () => {
        if (intervalCounter === weatherData.length - 1) {
          clearInterval(citiesInterval);
        }
        let section = document.createElement('SECTION');
        let heading = document.createElement('H3');
        let tempParagraph = document.createElement('P');
        let desc = document.createElement('SPAN');
        let littleImage = document.createElement('IMG');
        let footer = document.createElement('FOOTER');
        let tempInCelsius = Math.round(weatherData[intervalCounter].main.temp - 273);
        let color = colorTemperatures.find(entry => tempInCelsius > entry.limitTemp).color;
        heading.innerText = weatherData[intervalCounter].name;
        tempParagraph.innerHTML = `<b>${tempInCelsius}</b> <sup>O</sup>C`;
        desc.innerText = weatherData[intervalCounter].weather[0].description;
        littleImage.src = `http://openweathermap.org/img/w/${weatherData[intervalCounter].weather[0].icon}.png`;
        section.appendChild(heading);
        section.appendChild(tempParagraph);
        footer.appendChild(desc);
        footer.appendChild(littleImage);
        section.appendChild(footer);
        section.style.background = color;
        divContainer.appendChild(section);
        inputField.value = '';
        inputField.focus();
        intervalCounter++;
      }, 200)
  }catch (e) {
    console.warn(e);
  }

}

form.addEventListener('submit', getWeatherForCity);
