function setup(){
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.size(400,400);
}
function draw(){
fill("#BE93D4");
stroke("#BE93D4");
square(200,200,100);
}