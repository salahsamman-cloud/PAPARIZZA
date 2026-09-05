// Switch the visible menu panel without navigating away or reloading the page.
const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const selectedSection = tab.dataset.tab;

    // Hide every panel except the one selected by the customer.
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== selectedSection;
    });

    // Keep the visual state and accessibility state in sync.
    tabs.forEach((button) => {
      const isActive = button === tab;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });
  });
});
