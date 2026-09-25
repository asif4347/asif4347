const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !expanded;
});
mobileNav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();

const imageViewer = document.querySelector('.image-viewer');
const viewerImage = imageViewer.querySelector('.viewer-image');
const viewerTitle = imageViewer.querySelector('#image-viewer-title');
const originalImageLink = imageViewer.querySelector('.viewer-original');
let galleryTrigger = null;
document.querySelectorAll('[data-gallery]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof imageViewer.showModal !== 'function') return;
    event.preventDefault();
    galleryTrigger = link;
    viewerImage.src = link.href;
    viewerImage.alt = link.querySelector('img').alt;
    viewerTitle.textContent = link.dataset.title;
    originalImageLink.href = link.href;
    imageViewer.showModal();
    document.body.classList.add('viewer-open');
  });
});
imageViewer.querySelector('.viewer-close').addEventListener('click', () => imageViewer.close());
imageViewer.addEventListener('click', event => {
  if (event.target !== imageViewer) return;
  const bounds = imageViewer.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) imageViewer.close();
});
imageViewer.addEventListener('close', () => {
  document.body.classList.remove('viewer-open');
  galleryTrigger?.focus();
});
