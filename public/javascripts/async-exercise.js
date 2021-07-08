/* eslint-disable */

// TODO: rewrite the following code using Promise instead of callback
function getServerTimeCallBack(callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('HEAD', window.location.href);
  xmlHttp.setRequestHeader('Content-Type', 'text/html');
  xmlHttp.addEventListener('load', () => {
    callback(xmlHttp.getResponseHeader('Date'));
  });
  xmlHttp.send('');
}

function getServerTime() {
  return new Promise((resolve) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('HEAD', window.location.href);
    xmlHttp.setRequestHeader('Content-Type', 'text/html');
    xmlHttp.addEventListener('load', () => {
      resolve(xmlHttp.getResponseHeader('Date'));
    });
    xmlHttp.send('');
  });
}
getServerTime().then((serverDate) =>
  console.log(`Server date is ${serverDate}`)
);

// getServerTime((serverDate) => console.log(`Server date is ${serverDate}`));

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

// TODO: rewrite the following code using async function
function wait(second) {
  return new Promise((resolve) => setTimeout(resolve), second * 1000);
}

function fetchPricingData() {
  return fetch('/api/pricing').then((res) => res.json());
}

function fetchDataThenWait() {
  return fetchPricingData().then((pricingData) => {
    return wait(1).then(() => pricingData);
  });
}

async function fetchPricingData1() {
  const res = await fetch('/api/pricing');
  return res.json();
}

async function fetchDataThenWait1() {
  const pricingData = await fetchPricingData1();
  await wait(1);
  console.log(pricingData);
  return pricingData;
}

(async () => {
  const result = await fetchDataThenWait1();
})();
