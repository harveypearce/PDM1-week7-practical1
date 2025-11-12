let slider
let colourpicker1
let clearButton

function setup(){
    
    createCanvas(600,600);
     clearButton = createButton("clear");
     clearButton.size(200);
     clearButton.position(400,690);
    slider = createSlider(0,255);
    slider.position(150,700);
colourpicker1 = createColorPicker("deeppink");
colourpicker1.position(70,700);
clearButton.mousePressed(clear);

}

function draw(){
    if(mouseIsPressed){
        noStroke()
        fill(colourpicker1.value())
circle(mouseX,mouseY,slider.value());
    }
fill(0)
rect(0,500,600)
}
function clear(){
    background(255);
}