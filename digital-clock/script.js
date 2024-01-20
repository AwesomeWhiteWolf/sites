const date = document.querySelector("#date");
const time = document.querySelector("#time");
let dateToday = new Date();
let optionsForDate = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
let optionsForTime = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

function start() {
	dateToday = new Date();
	date.textContent = dateToday.toLocaleString("en-US", optionsForDate);
	time.textContent = dateToday.toLocaleString("en-US", optionsForTime);
}let inter = setInterval(start,1000);


