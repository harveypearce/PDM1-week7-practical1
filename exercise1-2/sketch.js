let colourpicker1
let colourpicker2

function setup(){
createCanvas(600,600);
colourpicker1 = createColorPicker("deeppink");
colourpicker1.position(100,300);
colourpicker2 = createColorPicker("blue");
colourpicker2.position(400,300);
const container = select("main");
colourpicker1.parent(container);
colourpicker2.parent(container);
}
function draw(){
    background(colourpicker1.value());
    fill(colourpicker2.value());
    text("hello world",100,300)
    textSize(100)

}