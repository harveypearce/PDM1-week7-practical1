
let button

function setup(){
createCanvas(600,600);
const container = select("main");
button = createButton ('clickme');
button.position(0,500);
button.parent(container);
button.size(600,100);
button.mousePressed(createCircle);
}

function draw(){

}
function createCircle(){ 
    fill(random(255),random(255),random(255));
    ellipse(random(600),random(600),random(600),random(600))

}

