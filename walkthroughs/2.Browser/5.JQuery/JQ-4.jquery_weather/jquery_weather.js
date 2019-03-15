const authToken = '16d4785f9c10724266053adb3c29dcfd';

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
        resolve($.ajax(url));
    })
    allCitiesPromises.push(promiseCity);
  }
  return Promise.all(allCitiesPromises);
}

let getWeatherForCity = async function(ev) {
  ev.preventDefault();
  let cities = $('input').val().split('-');
  let intervalCounter = 0;

  try {
    let weatherData = await makeAllRequestsSimultaneously(cities);

    let citiesInterval = setInterval(() => {
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
      footer.append(desc, littleImage);
      section.append(heading, tempParagraph, footer);
      section.style.background = color;
      $('#container').append(section);
      $('section').animate({opacity: '1'}, 500);
      $('input').val('');
      intervalCounter++;
    }, 350)
  }catch(e) {
    console.warn(e);
  }
}

$(document).ready(ev => {
  $('form').submit(getWeatherForCity);
})
