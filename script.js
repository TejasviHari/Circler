canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";

ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle=color;
ctx.arc(400,250,50,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;

console.log(" X= "+mouse_x+" Y= "+mouse_y);
circle(mouse_x,mouse_y);

}

function circle(mouse_x,mouse_y){
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle=color;
ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();    
}
