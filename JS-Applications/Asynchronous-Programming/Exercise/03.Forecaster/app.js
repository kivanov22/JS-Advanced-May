function attachEvents() {
    let buttonSubmit = document.querySelector('#submit');
    buttonSubmit.addEventListener('click', getWeather);

}
attachEvents();
async function getWeather() {
    let userLocation = document.querySelector('#location');
      

    const cityName = userLocation.value;
    const code = await getCode(cityName);//if no await return promise

    //Destructuring the promises and calling the requests together
    const [current, upcoming] = await Promise.all([
        await getCurrent(code),
        await getUpcoming(code)
    ]);

    const forecastDiv = document.querySelector('#forecast');
    const currentDiv = document.querySelector('#current');
    const upcomingDiv = document.querySelector('#upcoming');

    //Fixed the problem with innerHTml deleting the labels by creating them again
    // clear divs instead of looping through all tags and remove
    currentDiv.innerHTML = '';
    upcomingDiv.innerHTML = '';

    //Show information
    forecastDiv.style.display = 'block';

    const alldataForecast = createElement('div', undefined, 'forecasts');

    const divlabelCurrent = createElement('div','Current conditions','label');
  

    //Current Condition elements creation
    const spanConditionSymbol = createElement('span', weatherSymbols(current.forecast.condition), 'condition symbol');
    const spanCondition = createElement('span', undefined, 'condition');


    const spanCityName = createElement('span', current.name, 'forecast-data');
    const spanMinMaxDegrees = createElement('span', `${current.forecast.low}°/${current.forecast.high}°`, 'forecast-data');
    const spanWeather = createElement('span', `${current.forecast.condition}`, 'forecast-data');

    //Append elements
    currentDiv.appendChild(divlabelCurrent);
    spanCondition.appendChild(spanCityName);
    spanCondition.appendChild(spanMinMaxDegrees);
    spanCondition.appendChild(spanWeather);
    alldataForecast.appendChild(spanConditionSymbol);
    alldataForecast.appendChild(spanCondition);
    currentDiv.appendChild(alldataForecast);

    //i thought there is a difference in symbol appereance but it was the % of zoom in browser on 100% icon is above text,instead of left side
        // alldataForecast.appendChild(spanConditionSymbol);
        // alldataForecast.appendChild(spanCondition);
        // spanCondition.appendChild(spanCityName);
        // spanCondition.appendChild(spanMinMaxDegrees);
        // spanCondition.appendChild(spanWeather);
        // currentDiv.appendChild(divlabelCurrent);
        // currentDiv.appendChild(alldataForecast);


    //Three day forecast element creation
        const createDivForecast = createElement('div', undefined, 'forecast-info');

    //Take from object values
    const days = Object.values(upcoming.forecast);

    const divlabelThreeDay = createElement('div','Three-day forecast','label');
    //Day one spans
    const spanUpcoming1 = createElement('span', undefined, 'upcoming');
    const spanDayOneSymbol = createElement('span', weatherSymbols(days[0].condition), 'symbol');
    const spanDayOneDegrees = createElement('span', `${days[0].low}°/${days[0].high}°`, 'forecast-data');
    const spanDayOneWeather = createElement('span', `${days[0].condition}`, 'forecast-data');

    //Day two spans
    const spanUpcoming2 = createElement('span', undefined, 'upcoming');
    const spanDayTwoSymbol = createElement('span', weatherSymbols(days[1].condition), 'symbol');
    const spanDayTwoDegrees = createElement('span', `${days[1].low}°/${days[1].high}°`, 'forecast-data');
    const spanDayTwoWeather = createElement('span', `${days[1].condition}`, 'forecast-data');

    //Day three spans
    const spanUpcomin3 = createElement('span', undefined, 'upcoming');
    const spanDayThreeSymbol = createElement('span', weatherSymbols(days[2].condition), 'symbol');
    const spanDayThreeDegrees = createElement('span', `${days[2].low}°/${days[2].high}°`, 'forecast-data');
    const spanDayThreeWeather = createElement('span', `${days[2].condition}`, 'forecast-data');

    //Append Label THree day
    upcomingDiv.appendChild(divlabelThreeDay);

    //Append first day spans
    upcomingDiv.appendChild(createDivForecast);
    createDivForecast.appendChild(spanUpcoming1);
    spanUpcoming1.appendChild(spanDayOneSymbol);
    spanUpcoming1.appendChild(spanDayOneDegrees);
    spanUpcoming1.appendChild(spanDayOneWeather);

    //Append second day spans
    createDivForecast.appendChild(spanUpcoming2);
    spanUpcoming2.appendChild(spanDayTwoSymbol);
    spanUpcoming2.appendChild(spanDayTwoDegrees);
    spanUpcoming2.appendChild(spanDayTwoWeather);

    //Append third day span
    createDivForecast.appendChild(spanUpcomin3);
    spanUpcomin3.appendChild(spanDayThreeSymbol);
    spanUpcomin3.appendChild(spanDayThreeDegrees);
    spanUpcomin3.appendChild(spanDayThreeWeather);



}

function weatherSymbols(condition) {
    if (condition === 'Sunny') {
        return '☀';
    }
    else if (condition === 'Partly sunny') {
        return '⛅';
    }
    else if (condition === 'Overcast') {
        return '☁';
    }
    else if (condition === 'Rain') {
        return '☂';
    }
}

async function getCode(cityName) {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;

    const response = await fetch(url);
    const data = await response.json();

    return data.find(x => x.name.toLowerCase() == cityName.toLowerCase()).code;

}

async function getCurrent(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function getUpcoming(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function createElement(type, text, att) {
    const result = document.createElement(type);

    if (text) {
        result.textContent = text;
    }

    if (att) {
        result.className = att;
    }

    return result;
}




