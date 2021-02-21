class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 80, 80, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(7)
      stroke("yellow")
      fill("green");
      rect(0, 0, 50, 50);
      pop();
    }
  };
  