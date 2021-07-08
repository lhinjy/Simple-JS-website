/* eslint-disable */

/* DEMO: show how to make FAQ collapsible */
// function makeCollapsible(panelId) {
//   const btn = document.querySelector(`button[aria-controls=${panelId}]`);
//   const panel = document.querySelector(`#${panelId}`);
//   panel.classList.add('hidden');

//   btn.addEventListener('click', function () {
//     panel.classList.toggle('hidden');
//   });
// }

// makeCollapsible('faq-0');
// makeCollapsible('faq-1');
// makeCollapsible('faq-2');
// makeCollapsible('faq-3');
// makeCollapsible('faq-4');
// makeCollapsible('faq-5');
// makeCollapsible('faq-6');
// makeCollapsible('faq-7');

/* (Chapter 6) DEMO: allow html editor 
to add more faq in future without js change */

const accordionBtns = Array.from(document.querySelectorAll('.js-accordion'));

accordionBtns.forEach((btn) => {
  const panelId = btn.getAttribute('aria-controls');
  const panel = document.querySelector(`#${panelId}`);
  if (panel) {
    panel.classList.add('hidden');
    btn.addEventListener('click', () => panel.classList.toggle('hidden'));
  }
});
