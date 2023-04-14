const interactableElements = document.querySelectorAll('.interactable');
const previewDiv = document.createElement('div');
previewDiv.classList.add('preview');
document.body.appendChild(previewDiv);

let mouseX = 0;
let mouseY = 0;
let previewX = 0;
let previewY = 0;

interactableElements.forEach((element) => {
  element.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  element.addEventListener('mouseenter', () => {
    const imgSrc = element.querySelector('img').getAttribute('src');
    const description = element.querySelector('.portfolio__projects').textContent;
    previewDiv.style.backgroundImage = `url(${imgSrc})`;
    previewDiv.innerHTML = `<p>${description}</p>`;
    previewDiv.style.display = 'block';
    
    animatePreview();
  });

  element.addEventListener('mouseleave', () => {
    previewDiv.style.display = 'none';
  });
});

function animatePreview() {
  const distX = mouseX - previewX;
  const distY = mouseY - previewY;
  previewX += distX / 5;
  previewY += distY / 5;
  previewDiv.style.transform = `translate3d(${previewX}px, ${previewY}px, 0)`;
  requestAnimationFrame(animatePreview);
}
