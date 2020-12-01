class Ball {
    constructor(x,y,radius){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':3.0
    }
    this.body = Bodies.circle(x, y, radius);
    this.radius = radius;
    //this.image=loadImage("polygon.png");
    World.add(world, this.body);
    }
  
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius, this.radius);
      
    }
  }
  