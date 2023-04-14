var coinContainer = document.getElementById("coin-container");

coinContainer.addEventListener("click", function() {
  var heads = "images/VictorHS.png";
  var tails = "images/VictorHS.png";
  
  var randomNum = Math.floor(Math.random() * 2);
  
  if (randomNum == 0) {
    coinContainer.style.backgroundImage = "url(" + heads + ")";
  } else {
    coinContainer.style.backgroundImage = "url(" + tails + ")";
  }
  
  coinContainer.classList.add("flip-animation");
  
  setTimeout(function() {
    coinContainer.classList.remove("flip-animation");
  }, 1000);
});



let text = document.querySelector(".text");

setInterval(function() {
  let width = text.offsetWidth;
  let containerWidth = document.querySelector(".container").offsetWidth;

  if (width > containerWidth) {
    text.style.transform = "translateX(-" + (width + 10) + "px)";
  }
}, 50);