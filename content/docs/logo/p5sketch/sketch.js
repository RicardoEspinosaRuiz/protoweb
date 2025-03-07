var R1=0;
var R2=0;

function setup() {
  createCanvas(400, 400);
  background(220);
  R1=int(random(0,2))
  R2=int(random(0,2))
  noStroke()
  if(R1==R2&&R1==0){
      circle(200,200,250);
     }
  else if(R1==R2&&R1==1){
      fill(100,158,230)
      circle(200,200,250);
     }
  else{
      square(80,80,240);
     }
    print(R2);
    print(R1);
}

function draw() {
  fill(0)
  textAlign(CENTER);
  textSize(40)
  text("helloWorld",200,215);  
}