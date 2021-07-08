const pricesTxt = Array.from(document.querySelectorAll(`span[id$='-price']`));

function initYearlyBills() {
  removeBills();
  fetch('/api/pricing')
    .then((res) => res.json())
    .then((prices) => {
      prices.forEach((price, idx) => {
        pricesTxt[idx].innerHTML = price.annualPrice;
        // console.log(price.annualPrice);
      });
    });
}

function removeBills() {
  pricesTxt.forEach((item) => (item.innerHTML = ''));
}

function initMonthlyBills() {
  removeBills();
  fetch('/api/pricing')
    .then((res) => res.json())
    .then((prices) => {
      prices.forEach((price, idx) => {
        pricesTxt[idx].innerHTML = price.monthlyPrice;
        // console.log(price.monthlyPrice);
      });
    });
}

document.querySelector('#monthly-plans-btn').addEventListener('click', () => {
  initMonthlyBills();
  toggleButtonChoiceStyle();
});
document.querySelector('#annual-plans-btn').addEventListener('click', () => {
  initYearlyBills();
  toggleButtonChoiceStyle();
});
