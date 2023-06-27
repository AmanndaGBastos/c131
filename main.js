function preLoaded(){
    img = loadImage('sadie.jpg')
   }
function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
}
function draw(){
    image(img ,0,0, 500,400)
    fill(255,0,0)
    text("Sadie" ,45 , 75)
    noFill();
    stroke(255, 0, 0); rect(30, 60, 450, 350 );}