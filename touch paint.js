/*get the canvas element using its id and store it in a variable “canvas” so that we can 
manipulate the canvas throughout the js code.*/

Canvas = document.getElementById("mycanvas");
ctx = Canvas.getContext("2d");


var mouseEvent = "empty";
var last_position_mouse_x, last_position_mouse_y;

var color  = "black";
var width_line = 3;
// Attach canvas and addEventListener with 'mousedown' event.

Canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    width_line = document.getElementById("Line_Width").value;
    //additional activity ends
    //Get the x and y coordinates when the mouse is clicked.
    last_position_mouse_x = e.clientX-Canvas.offsetLeft;
    last_position_mouse_y = e.clientY-Canvas.offsetTop;
        
    mouseEvent = "mouseDown";
}

Canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}



Canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
   mouseEvent = "mouseLeave";
}


Canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_mouse_x = e.clientX-Canvas.offsetLeft;
    current_position_mouse_y = e.clientY-Canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle  = color;
      ctx.lineWidth = width_line;
      ctx.moveTo(last_position_mouse_x,last_position_mouse_y);
      ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
      ctx.stroke();
        
    }
    last_position_mouse_x = current_position_mouse_x;
    last_position_mouse_y = current_position_mouse_y;
}


//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
}
	
