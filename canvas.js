//first
const firstCanvas = document.getElementById('first');
const firstContext = firstCanvas.getContext('2d');

firstContext.fillStyle = "blue";
firstContext.fillRect(10, 10, 150, 50);
firstContext.fillStyle = "yellow";
firstContext.fillRect(10, 60, 150, 50);

//second
const secondCanvas = document.getElementById('second');
const secondContext = secondCanvas.getContext('2d');

secondContext.fillRect(25, 25, 100, 100);
secondContext.clearRect(45, 45, 60, 60);
secondContext.strokeRect(50, 50, 50, 50);

//third
const thirdCanvas = document.getElementById('third');
const thirdContext = thirdCanvas.getContext('2d');

thirdContext.fillStyle = "#025402";
thirdContext.beginPath();
thirdContext.moveTo(100, 25);
thirdContext.lineTo(50, 75);
thirdContext.lineTo(150, 75);
thirdContext.fill();

thirdContext.strokeStyle = "#540249";
thirdContext.beginPath();
thirdContext.moveTo(300, 25);
thirdContext.lineTo(250, 75);
thirdContext.lineTo(350, 75);
thirdContext.closePath();
thirdContext.stroke();

//fourth
const fourthContext = document.getElementById('fourth').getContext('2d');

fourthContext.beginPath();
fourthContext.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
fourthContext.moveTo(110, 75);
fourthContext.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
fourthContext.moveTo(65, 65);
fourthContext.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
fourthContext.moveTo(95, 65);
fourthContext.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
fourthContext.stroke();

//five
const fiveContext = document.getElementById('five').getContext('2d');
let angle = 0;
requestAnimationFrame(draw);

function draw () {
  fiveContext.clearRect(0, 0, 300, 150);
  let x = Math.sin(angle);
  let y = Math.cos(angle);
  fiveContext.beginPath();
  fiveContext.arc(150, 75, 20, 0, Math.PI * 2);
  fiveContext.arc(150 + x * 60, 75 + y * 60, 5, 0, Math.PI * 2);
  fiveContext.fillStyle = '#188ad0';
  fiveContext.fill();
  requestAnimationFrame(draw);
  angle += 0.01;
}