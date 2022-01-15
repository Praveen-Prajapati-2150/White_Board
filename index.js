let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth * 1.0;
canvas.height = window.innerHeight * 1.0;
let context = canvas.getContext('2d');
context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);
let restore_array = [];
let upstore_array = [];
let start_index = -1;
let stroke_color = 'red';
let stroke_width = '2';
let is_drawing = false;

function change_color(element) {
  stroke_color = element.style.background;
}

function change_color_eraser(element) {
  // stroke_color = element.style.background;
  stroke_color = context.fillStyle;
}

function change_width(element) {
  stroke_width = element.innerHTML;
}

function start(event) {
  is_drawing = true;
  context.beginPath();
  context.moveTo(getX(event), getY(event));
  event.preventDefault();
}

function draw(event) {
  if (is_drawing) {
    context.lineTo(getX(event), getY(event));
    context.strokeStyle = stroke_color;
    context.lineWidth = stroke_width;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();
  }
  event.preventDefault();
}

function stop(event) {
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }
  event.preventDefault();
  restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
  start_index += 1;
  upstore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
  // start_index += 1;
}

function getX(event) {
  if (event.pageX == undefined) {
    return event.targetTouches[0].pageX - canvas.offsetLeft;
  } else {
    return event.pageX - canvas.offsetLeft;
  }
}

function getY(event) {
  if (event.pageY == undefined) {
    return event.targetTouches[0].pageY - canvas.offsetTop;
  } else {
    return event.pageY - canvas.offsetTop;
  }
}

canvas.addEventListener('touchstart', start, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('touchend', stop, false);
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('mouseup', stop, false);
canvas.addEventListener('mouseout', stop, false);

let aa = 0;
function Restore() {
  if (start_index <= 0) {
    Clear();
  } else {
    start_index += -1;
    aa += -1;
    if (event.type != 'mouseout') {
      context.putImageData(restore_array[start_index], 0, 0);
    }
  }
}

// function Upstore() {
//   console.log(upstore_array)
//   console.log(restore_array)
//   context.putImageData(upstore_array.length - aa, 0, 0);
//   start_index += 1
//   aa += 1
//   const lastMemento = upstore_array.pop()
//   context.putImageData(restore_array[start_index], 0, 0) = lastMemento ? lastMemento : (context.putImageData(restore_array[start_index], 0, 0))
// }
{
  /* <script src="http://jscolor.com/release/2.0/jscolor-2.0.4/jscolor.js%22%3E"></script>; */
}

function Clear() {
  // context.fillStyle = "white";
  context.fillStyle = context.fillStyle;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);
  restore_array = [];
  start_index = -1;
}

function change_bg_color(element) {
  context.fillStyle = element.style.background;
  // stroke_color.fillStyle = element.style.background;
  // stroke_color = context.fillStyle;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function changeColor() {
  document.getElementById('colorChoice').addEventListener('change', (e) => {
    // let color = e.target.value;
    context.fillStyle = e.target.value;
    context.fillRect(0, 0, canvas.width, canvas.height);
  });
}

changeColor();

//////////////////////////////////////////////////////////////
// Filling shapes in canvas

// fillRect(x, y, width, height)
//   Draws a filled rectangle.
// strokeRect(x, y, width, height)
//   Draws a rectangular outline.
// clearRect(x, y, width, height)
//   Clears the specified rectangular area, making it fully transparent.

function draw_Circle() {
  context.beginPath();
  context.arc(300, 300, 150, 0, 2 * Math.PI);
  context.stroke();
}

function draw_triangle() {
  context.beginPath();
  context.moveTo(125, 125);
  context.lineTo(125, 45);
  context.lineTo(45, 125);
  context.closePath();
  context.stroke();
}

function draw_box(element) {
  console.log('fill');

  // context.fillRect(100, 100, 100, 100);
  // context.clearRect(45, 45, canvas.width/2, canvas.height/2);
  // context.clearRect(25, 25, 100, 100);
  context.strokeRect(canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);

  // let color = context.fillStyle;
  // context.fillStyle = element.style.background;
  // x = 50;
  // y = 50;
  // width = 100;
  // height = 100;
  // context.fillStyle = "cyan";
  // context.fillRect(x, y, width, height);
  // x += 50;
  // y += 50;
  // width += 50;
  // height += 50;

  // context.clearRect(45, 45, 60, 60);
  // context.strokeRect(50, 50, 50, 50);
  // }

  // context.beginPath();
  // context.moveTo(75, 50);
  // context.lineTo(100, 75);
  // context.lineTo(100, 25);
  // context.fill();

  // context.beginPath();
  // context.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  // context.moveTo(110, 75);
  // context.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  // context.moveTo(65, 65);
  // context.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
  // context.moveTo(95, 65);
  // context.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
  // context.stroke();
}

// function draw_() {
//   var context = document.getElementById('canvas').getContext('2d');
//   for (var i = 0; i < 6; i++) {
//     for (var j = 0; j < 6; j++) {
//       context.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
//                        Math.floor(255 - 42.5 * j) + ', 0)';
//       context.fillRect(j * 25, i * 25, 25, 25);
//     }
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// ..........................................Texture Section.............................................//

function draw_grid1() {
  // var context = document.getElementById('canvas').getContext('2d');
  // create new image object to use as pattern
  let img = new Image();
  img.src = 'grid1.jpg';
  img.onload = function () {
    // create pattern
    let ptrn = context.createPattern(img, 'repeat');
    context.fillStyle = ptrn;
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
}

function draw_grid2() {
  let img = new Image();
  img.src = './grid2.jpg';
  img.onload = function () {
    context.fillStyle = context.createPattern(img, 'repeat');
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
}
function draw_grid3() {
  let img = new Image();
  img.src = './grid3.gif';
  img.onload = function () {
    context.fillStyle = context.createPattern(img, 'repeat');
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
}
function draw_grid4() {
  let img = new Image();
  img.src = './grid4.png';
  img.onload = function () {
    context.fillStyle = context.createPattern(img, 'repeat');
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
}
function draw_grid5() {
  let img = new Image();
  img.src = './grid5.svg';
  img.onload = function () {
    context.fillStyle = context.createPattern(img, 'repeat');
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
}
function draw_grid6() {
  let img = new Image();
  img.src = './grid6.jpg';
  img.onload = function () {
    context.fillStyle = context.createPattern(img, 'repeat');
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
}
function draw_grid7() {
  let img = new Image();
  img.src = './grid7.jpg';
  img.onload = function () {
    context.fillStyle = context.createPattern(img, 'repeat');
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
}
function draw_grid8() {
  let img = new Image();
  img.src = './grid8.jpg';
  img.onload = function () {
    context.fillStyle = context.createPattern(img, 'repeat');
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
}

function random() {
  // let gradient = context.createLinearGradient(20, 0, 220, 0);
  let gradient = context.createLinearGradient(
    0,
    0,
    canvas.width,
    canvas.height
  );

  // Add three color stops
  gradient.addColorStop(0, 'green');
  gradient.addColorStop(0.5, 'pink');
  gradient.addColorStop(1, 'green');

  // Set the fill style and draw a rectangle
  context.fillStyle = gradient;
  // context.fillRect(20, 20, 200, 100);
  // context.fillRect(0, 0, canvas.width, canvas.height);
  console.log('hello');
}

//////////////////////// ////////////////////////////////////////////////////

// To get text input in canvas

// variable to store mouse x and y positions
let mouseX = 0;
let mouseY = 0;
let startingX = 0;

// A function called when mouse clicked on canvas

canvas.addEventListener(
  'click',
  function (e) {
    console.log('called');
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    startingX = mouseX;

    console.log(mouseX, mouseY);

    // Restart recent words array
    recentWords = [];

    // console.log(mouseX, mouseY);
    return false;
  },
  false
);

// Add keydown event to document
document.addEventListener(
  'keydown',
  function (e) {
    // Set context font
    context.font = 'bold 16px Arial';
    canvas.shadowColor = 'rgba(0, 0, 0, 0.7)';
    context.fillStyle = '#435a6b';

    // random_msg = "I am just text the app"
    // context.fillText("random_msg", 50, 50);
    // console.log(e.key);

    // An Array to store every word
    let recentWords = [];

    // An Array for backspace
    let undoList = [];

    // A function to save canvas state after every key press
    function saveState() {
      undoList.push(canvas.toDataURL());
    }

    // By default, save the canvas state first
    saveState();

    // A function to be called when backspace is pressed
    function undo() {
      undoList.pop();

      var imgData = undoList[undoList.length - 1];
      var image = new Image();

      // Display old saved state
      image.src = imgData;
      image.onload = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          image,
          0,
          0,
          canvas.width,
          canvas.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
      };
    }

    if (e.keyCode === 8) {
      // Backspace is pressed
      undo();

      // Remove recent Word
      let recentWord = recentWords[recentWords.length - 1];
      console.log(recentWord);
      // Move the cursor back
      mouseX -= context.measureText(recentWord).width;
      recentWords.pop();
    } else if (e.keyCode === 13) {
      // Enter Key is Pressed
      mouseX = startingX;
      mouseY += 20; // The Size of font +4
    } else {
      // Writ text to canvas
      context.fillText(e.key, mouseX, mouseY);

      // Move cursor forward after every key press
      mouseX += context.measureText(e.key).width;

      saveState();
      recentWords.push(e.key);
    }
  },
  false
);

// canvas.addEventListener("touchstart", start, false);
// canvas.addEventListener("touchmove", draw, false);
// canvas.addEventListener("touchend", stop, false);
// canvas.addEventListener("mousedown", start, false);
// canvas.addEventListener("mousemove", draw, false);
// canvas.addEventListener("mouseup", stop, false);
// canvas.addEventListener("mouseout", stop, false);

/////////////////////////////////////////////////////////////////

// Code for drop able shapes

// var c = document.getElementById("canvas");
// var ctx = c.getContext("2d");

// c.width = 600;
// c.height = 300;

// //My mouse coordinates
// var x, y;
// c.addEventListener("mousedown", down);
// c.addEventListener("mousemove", move);
// c.addEventListener("mouseup", up);

// //I'll save my boxes in this array
// var myBoxes = new Array();

// //This function describes what a box is.
// //Each created box gets its own values
// function box(x, y, w, h, rgb) {
//   (this.x = x), (this.y = y);
//   this.xS = x; //saving x
//   this.yS = y; //saving y
//   this.w = w;
//   this.h = h;
//   this.rgb = rgb;

//   //to determine if the box is being draged
//   this.draging = false;
// }

// //Let's make some boxes!!
// myBoxes[0] = new box(10, 10, 50, 100, "green");
// myBoxes[1] = new box(80, 50, 100, 75, "blue");
// myBoxes[2] = new box(40, 150, 20, 70, "yellow");

// //here we draw everything
// function draw() {
//   context.clearRect(0, 0, c.width, c.height);
//   //Dropable area
//   context.fillStyle = "red";
//   context.fillRect(c.width / 2, 0, c.width, c.height);

//   //Boxes!
//   for (var i = 0; i < myBoxes.length; i++) {
//     var b = myBoxes[i];

//     //NEW CODE FOR UPDATE
//     if (b.draging) {
//       //box on the move
//       //Also draw it on the original spot
//       context.fillStyle = "grey"; //I chose a different color to make it appear more as a shadow of the box that's being moved.
//       context.fillRect(b.xS, b.yS, b.w, b.h);
//       context.strokeRect(b.xS, b.yS, b.w, b.h);
//     }
//     //End of new code for update

//     context.fillStyle = b.rgb;
//     context.fillRect(b.x, b.y, b.w, b.h);
//     context.strokeRect(b.x, b.y, b.w, b.h);
//   }

//   //Let's keep re-drawing this
//   requestAnimationFrame(draw);
// }

// function down(event) {
//   event = event || window.event;
//   (x = event.pageX - c.offsetLeft), (y = event.pageY - c.offsetTop);

//   for (var i = 0; i < myBoxes.length; i++) {
//     var b = myBoxes[i];
//     if (x > b.x && x < b.x + b.w && y > b.y && y < b.y + b.h) {
//       b.draging = true;
//     }
//   }
// }

// function move(event) {
//   event = event || window.event;
//   (x = event.pageX - c.offsetLeft), (y = event.pageY - c.offsetTop);

//   for (var i = 0; i < myBoxes.length; i++) {
//     var b = myBoxes[i];
//     if (b.draging) {
//       b.x = x;
//       b.y = y;
//     }
//   }
// }
// function up(event) {
//   event = event || window.event;
//   (x = event.pageX - c.offsetLeft), (y = event.pageY - c.offsetTop);

//   for (var i = 0; i < myBoxes.length; i++) {
//     var b = myBoxes[i];
//     if (b.draging) {
//       //Let's see if the rectangle is inside the dropable area
//       if (b.x > c.width / 2) {
//         //Yes is it!
//         b.x = x;
//         b.y = y;
//         b.draging = false;
//       } else {
//         //No it's not, sending it back to its ordiginal spot
//         b.x = b.xS;
//         b.y = b.yS;
//         b.draging = false;
//       }
//     }
//   }
// }

// draw();
