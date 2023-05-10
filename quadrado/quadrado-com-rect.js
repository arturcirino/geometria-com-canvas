const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.rect(30, 30, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
ctx.clearRect(45, 45, 70, 70);
