/* eslint-disable */

console.log('getCurrentYear', helpers.getCurrentYear());
/* DEMO: show how to update current year */

// get the footer year element
const footerYear = document.querySelector('#footer-year');
footerYear.innerHTML = helpers.getCurrentYear();
// update the content of the year element to result of helpers.getCurrentYear

console.log('getCurrentDate', helpers.getCurrentDate());
/* EXERCISE: practice how to update current date */

const footerDay = document.querySelector('#footer-today');
footerDay.innerHTML = helpers.getCurrentDate();
// TODO: get the footer today element

// TODO: update the content of the today element to result of helpers.getCurrentDate
