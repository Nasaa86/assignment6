var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var i = 0;



// Here I am going to set the speed
var incrementor = 2;

function Square() {
  ctx.fillStyle = "red";
  ctx.fillRect(x, 10, 100, 100);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Square();


  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  console.log(incrementor + "  incrementor value");
}

setInterval(drawBoxxy, 10);



var incrementor1 = 2;

function Square1() {
  ctx.fillStyle = "green";
  ctx.fillRect(y, 450, 100, 800);
}

function drawBoxxy1() {
  ctx.clearRect(0, 100, canvas.width, canvas.height);
  Square1();

  /* Here I am creating a simple while statement. 
   The statement says that x is added to incrmentor (speed)
   if the incrementor is greater than canvas width or 
   incrementor is less than 0 then make whatever the current
   number for incrementor negative */

  while (y + incrementor1 > canvas.width || y + incrementor1 < 0) {
    incrementor1 = -incrementor1;
  }
  y += incrementor1;
  console.log(incrementor1 + "  incrementor value");
}

setInterval(drawBoxxy1, 8);



var incrementor2 = 2;

function Square2() {
  ctx.fillStyle = "blue";
  ctx.fillRect(i, 240, 100, 100);
}

function drawBoxxy2() {
  ctx.clearRect(0, 100, canvas.width, canvas.height);
  Square2();

  /* Here I am creating a simple while statement. 
   The statement says that x is added to incrmentor (speed)
   if the incrementor is greater than canvas width or 
   incrementor is less than 0 then make whatever the current
   number for incrementor negative */

  while (i + incrementor2 > canvas.width || i + incrementor2 < 0) {
    incrementor2 = -incrementor2;
  }
  i += incrementor2;
  console.log(incrementor2 + "  incrementor value");
}

setInterval(drawBoxxy2, 6);
