/* Template navigation without the original demo-image preloader. */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar-burger');
  const menu = document.querySelector('.navbar-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.classList.toggle('is-active', open);
      menu.classList.toggle('is-active', open);
    });
  }
  document.querySelectorAll('table').forEach(table => {
    if (table.parentElement.classList.contains('table-scroll')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', 'Research results table');
    table.before(wrapper);
    wrapper.append(table);
  });
  document.querySelectorAll('.section h6.title').forEach(heading => {
    const replacement = document.createElement('h3');
    replacement.className = heading.className;
    replacement.append(...heading.childNodes);
    heading.replaceWith(replacement);
  });
});
