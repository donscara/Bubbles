//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
// Adapted from https://github.com/nature-of-code/
// released under MIT license

var ball=[];
////////////////////////////////////////////////
function setup() {
  createCanvas(900, 600);
    for (i = 0; i<200;i++){
        ball[i] = new Ball();  

    } 

}
////////////////////////////////////////////////


    function draw() {
        background(0);
        for (i = 0; i<200;i++){
            
            ball[i].run();  

        }        
        
  
    }

////////////////////////////////////////////////
class Ball {

  constructor(){
    this.speedX = random(-2,2);
    this.speedY = random(-2,2);
    this.locX = random(width);
    this.locY = random(height);
    this.color = color(random(0,255),random(0,255),random(0,255));
  }

  run(){
    this.draw();
    this.move();
    this.bounce();
  }

  draw(){
    fill(this.color);
    ellipse(this.locX, this.locY, 40, 40);
  }

  move(){
    this.locX += this.speedX;
    this.locY += this.speedY;
  }

  bounce(){
    if (this.locX<0 || this.locX>width) this.speedX*=-1;
    if (this.locY<0 || this.locY>height) this.speedY*=-1;
  }
}
