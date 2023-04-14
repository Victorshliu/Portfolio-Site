 // Mission Statement Animation
 const missionStatement =
 "My mission is to utilize my empathetic abilities to impact those around me and to build communities!";
const missionText = document.getElementById("mission-text");
let i = 0;

function typeWriter() {
 if (i < missionStatement.length) {
   missionText.innerHTML += missionStatement.charAt(i);
   i++;
   setTimeout(typeWriter, 30) || null;
 }
}
setTimeout(typeWriter, 6000);




