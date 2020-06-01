var canvas;
const c = 30;
const G = 2;
const dt = 0.1;
var start,end;

var m87;

const particles = [];

function setup(){
canvas = createCanvas(windowWidth,windowHeight);
ellipseMode(RADIUS);

m87 = new blackhole(300,320,3000);

start = height/2;
end = height/2 - m87.rs*2.6;
for(var y = 0; y < start; y += 5){
  particles.push(new Photon(width-20,y));
  }
}

function draw(){
  background(210);

  stroke(0);
  strokeWeight(2);

  m87.show();

  for(var p of particles){
    m87.pull(p);
    p.update();
    p.show();
  }

}