/* EXERCISE: make each section collapsible */

// function makeSectionCollapsible(btnId, sectionId) {
//   const btn = document.querySelector(`#${btnId}`);
//   const section = document.querySelector(`#${sectionId}`);
//   section.classList.add('hidden');
//   btn.addEventListener('click', function () {
//     section.classList.toggle('hidden');
//   });
// }

// makeSectionCollapsible('toggle-btn-0', 'section-0');
// makeSectionCollapsible('toggle-btn-1', 'section-1');
// makeSectionCollapsible('toggle-btn-2', 'section-2');
// makeSectionCollapsible('toggle-btn-3', 'section-3');

const accordionBtns = Array.from(
  document.querySelectorAll(`button[aria-controls*='section-']`)
);

accordionBtns.forEach((btn) => {
  const sectionID = btn.getAttribute('aria-controls');
  const section = document.querySelector(`#${sectionID}`);
  if (section) {
    section.classList.add('hidden');
    btn.addEventListener('click', () => section.classList.toggle('hidden'));
  }
});
