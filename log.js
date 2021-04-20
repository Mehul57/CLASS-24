class Log {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':0.9,
          'density':0.9
      }
      this.x=x
      this.y=y
     
      this.body = Bodies.rectangle(this.x, this.y,20, height, options);
      Matter .Body.setAngle(this.body,angle)
      this.width =20
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("Brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  