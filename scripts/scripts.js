document.addEventListener('DOMContentLoaded', function() {
  // Navigation Toggle
  const header = document.querySelector('header');
  const navToggle = document.querySelector('.nav-toggle');
  const headerHeight = header.offsetHeight;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerHeight) {
      navToggle.classList.add('sticky');
    } else {
      navToggle.classList.remove('sticky');
    }
  });
  
  navToggle.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Mission Statement Animation
  const missionStatement = "My mission is to utilize my empathetic abilities to impact those around me and to build communities!";
const missionText = document.getElementById("mission-text");
let i = 0;

function typeWriter() {
  if (i < missionStatement.length) {
    missionText.innerHTML += missionStatement.charAt(i);
    i++;
    setTimeout(typeWriter, 30);
  }
}
setTimeout(typeWriter, 6000);



// Mouse effects

  // mouse movement function
const mouseTrail = document.getElementById("mouse-trail");
const animateTrail  = (e, interacting) => {
  const x = e.clientX - mouseTrail.offsetWidth / 2,
        y = e.clientY - mouseTrail.offsetHeight /2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 3:1})` 
    };

  mouseTrail.animate(keyframes, {
    duration: 800,
    fill: 'forwards'
  });
};
// //  mouse icon change based on
const getTrailerClass = type => {
  switch(type) {
    case "link":
      return "link-icon";
    case "inlink":
      return "nav-icon";
    case "button":
      return "button-icon";
    default:
      return "link-icon";
  }
};

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;

  const icon = document.getElementById("trail-icon");

  animateTrail(e, interacting);

  mouseTrail.dataset.type = interacting ? interactable.dataset.type : "";

  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }

};



  //closing bracket for DOM load function 
});