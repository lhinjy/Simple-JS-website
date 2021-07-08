const pricesChoiceBtn = Array.from(
  document.querySelectorAll(`button[id$='-plans-btn']`)
);

const clickedBtnStyle = `relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8`;
const unclickedBtnStyle = `ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8`;

function toggleButtonChoiceStyle() {
  return pricesChoiceBtn[0].className === clickedBtnStyle
    ? (pricesChoiceBtn[0].className = unclickedBtnStyle) &&
        (pricesChoiceBtn[1].className = clickedBtnStyle)
    : (pricesChoiceBtn[0].className = clickedBtnStyle) &&
        (pricesChoiceBtn[1].className = unclickedBtnStyle);
}
