const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.rect(30, 30, 100, 100);
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();
