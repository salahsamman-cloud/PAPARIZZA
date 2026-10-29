const slides = [...document.querySelectorAll('[data-slide]')];
const dots = [...document.querySelectorAll('.hero-dot')];
const viewport = document.querySelector('.hero__viewport');
const track = document.querySelector('.hero__slides');
let activeSlide = 0;
let timer;
let dragStartX = 0;
let dragOffset = 0;
let activePointer = null;

function positionTrack(animate = true, offset = 0) {
  if (!viewport || !track) return;
  track.classList.toggle('is-dragging', !animate);
  const x = -(activeSlide * viewport.clientWidth) + offset;
  track.style.transform = `translate3d(${x}px, 0, 0)`;
}

function showSlide(index) {
  if (slides.length === 0) return;
  activeSlide = (index + slides.length) % slides.length;
  positionTrack();
  slides.forEach((slide, i) => {
    const active = i === activeSlide;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  dots.forEach((dot, i) => {
    const active = i === activeSlide;
    dot.classList.toggle('is-active', active);
    if (active) dot.setAttribute('aria-current', 'true');
    else dot.removeAttribute('aria-current');
  });
}

function stopAutoplay() {
  window.clearInterval(timer);
}

function startAutoplay() {
  stopAutoplay();
  if (!document.hidden && slides.length > 1) timer = window.setInterval(() => showSlide(activeSlide + 1), 3000);
}

function chooseSlide(index) {
  showSlide(index);
  startAutoplay();
}

dots.forEach((dot, index) => dot.addEventListener('click', () => chooseSlide(index)));
document.addEventListener('visibilitychange', startAutoplay);
window.addEventListener('resize', () => positionTrack());

if (viewport && track) {
  viewport.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    activePointer = event.pointerId;
    dragStartX = event.clientX;
    dragOffset = 0;
    stopAutoplay();
    track.setPointerCapture(event.pointerId);
    positionTrack(false);
  });

  viewport.addEventListener('pointermove', (event) => {
    if (event.pointerId !== activePointer) return;
    dragOffset = event.clientX - dragStartX;
    positionTrack(false, dragOffset);
  });

  const finishDrag = (event) => {
    if (event.pointerId !== activePointer) return;
    const threshold = Math.max(44, viewport.clientWidth * .16);
    const moved = dragOffset;
    activePointer = null;
    dragOffset = 0;
    if (Math.abs(moved) >= threshold) showSlide(activeSlide + (moved < 0 ? 1 : -1));
    else positionTrack();
    startAutoplay();
  };

  const cancelDrag = (event) => {
    if (event.pointerId !== activePointer) return;
    activePointer = null;
    dragOffset = 0;
    positionTrack();
    startAutoplay();
  };

  viewport.addEventListener('pointerup', finishDrag);
  viewport.addEventListener('pointercancel', cancelDrag);
}

positionTrack();
startAutoplay();

const categoryLinks = [...document.querySelectorAll('[data-category-link]')];
const sections = [...document.querySelectorAll('[data-menu-section]')];
function setActiveCategory(id) {
  categoryLinks.forEach((link) => {
    const active = link.dataset.categoryLink === id;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

categoryLinks.forEach((link) => link.addEventListener('click', () => setActiveCategory(link.dataset.categoryLink)));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveCategory(visible.target.id);
  }, { rootMargin: '-22% 0px -62% 0px', threshold: [0, .15, .4, .7] });
  sections.forEach((section) => observer.observe(section));
}
