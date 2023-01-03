import './style.scss';

// Api key: c2b8d97dd945c77049effafc8232d410
// link: https://api.openweathermap.org/data/2.5/weather?q=London&APPID=c2b8d97dd945c77049effafc8232d410

const cityInput = document.querySelector('input');
const searchIcon = document.querySelector('.fa-magnifying-glass');
const checkbox = document.querySelector('#checkbox');

const city = document.querySelector('.city');
const overview = document.querySelector('.overview');
const temp = document.querySelector('.temp');
const weatherIcon = document.querySelector('#weather-icon');

const feelsLike = document.querySelector('.feels-like.value');
const humidity = document.querySelector('.humidity.value');
const pressure = document.querySelector('.pressure.value');
const windSpeed = document.querySelector('.wind-speed.value');

const weatherData = {};
let units;

function getURL() {
	let inputValue = cityInput.value;

	if (!inputValue) {
		inputValue = 'los angeles';
	}

	if (checkbox.checked === false) {
		units = 'metric';
	} else if (checkbox.checked === true) {
		units = 'imperial';
	}

	let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=${units}&APPID=c2b8d97dd945c77049effafc8232d410`;
	return url;
}

function updateWeatherIcon() {
	weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`;
}

async function getJSON() {
	try {
		let data = await fetch(getURL(), {
			mode: 'cors',
		});

		let json = await data.json();
		return json;
	} catch (err) {
		return console.error(err);
	}
}

async function extractJSON() {
	try {
		let result = await getJSON();

		if (result.cod !== 200) {
			// Capitalize first letter
			city.innerHTML =
				result.message.charAt(0).toUpperCase() + result.message.slice(1);
			overview.innerHTML = '';
			humidity.innerHTML = '';
			pressure.innerHTML = '';
			temp.innerHTML = '';
			feelsLike.innerHTML = '';
			windSpeed.innerHTML = '';

			return false;
		}

		// eslint-disable-next-line prefer-destructuring
		let description = result.weather['0'].description;

		weatherData.overview =
			// Capitalize first letter
			description.charAt(0).toUpperCase() + description.slice(1);
		weatherData.cityName = result.name;
		weatherData.temp = Math.round(result.main.temp);
		weatherData.feelsLike = Math.round(result.main.feels_like);
		weatherData.humidity = Math.round(result.main.humidity);
		weatherData.pressure = Math.round(result.main.pressure);
		weatherData.windSpeed = Math.round(result.wind.speed);
		weatherData.iconCode = result.weather['0'].icon;
	} catch (err) {
		console.log(err);
	}
	return true;
}

function populateHTML() {
	city.innerHTML = weatherData.cityName;
	overview.innerHTML = weatherData.overview;
	humidity.innerHTML = `${weatherData.humidity} %`;
	pressure.innerHTML = `${weatherData.pressure} hPa`;

	if (units === 'metric') {
		temp.innerHTML = `${weatherData.temp} °C`;
		feelsLike.innerHTML = `${weatherData.feelsLike} °C`;
		windSpeed.innerHTML = `${weatherData.windSpeed} m/s`;
	} else if (units === 'imperial') {
		temp.innerHTML = `${weatherData.temp} °F`;
		feelsLike.innerHTML = `${weatherData.feelsLike} °F`;
		windSpeed.innerHTML = `${weatherData.windSpeed} mph`;
	}
}

async function fetchAndPrint() {
	try {
		let successCheck = await extractJSON();
		if (successCheck === false) return;

		updateWeatherIcon();
		populateHTML();
	} catch (err) {
		console.log(err);
	}
}

document.addEventListener('DOMContentLoaded', () => fetchAndPrint());

document.addEventListener('keypress', (e) => {
	if (document.activeElement === cityInput && e.key === 'Enter') {
		fetchAndPrint();
	}
});

searchIcon.onclick = () => fetchAndPrint();
checkbox.onclick = () => fetchAndPrint();
