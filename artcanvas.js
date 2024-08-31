const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "blue";
ctx.lineCap = 'round';
ctx.lineJoin = "bevel";
ctx.lineWidth =1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
})


canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mouseout", () => isDrawing = false)
canvas.addEventListener("mouseup", () => isDrawing = false)

  
function draw(event){
    if(!isDrawing) return
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();//clears any existing path segments, allowing you to start drawing a new shape.
    ctx.moveTo(lastX, lastY);//move brush/pen to the starting point.
    ctx.lineTo(event.offsetX, event.offsetY);//Draw a line to the endpoint.
    ctx.stroke()
   lastX = event.offsetX;
   lastY = event.offsetY;
   hue++;
   if(ctx.lineWidth >= 100 || ctx.lineWidth <=1){
    direction = !direction;
   }
   if(direction){
    ctx.lineWidth++
   }else{
    ctx.lineWidth--
   }

    // console.log(event)
}
