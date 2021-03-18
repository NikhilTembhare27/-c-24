class Paper {
    constructor(x,y) {
      var options = {
          isStatic: false,
          density:2,
          restitution:0.3
      }
      this.body = Bodies.rectangle(x,y,20,20,options);
      this.width = 20;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };
