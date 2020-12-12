class Sling {
    constructor(bodyA,xOffset,yOffset){
      var options ={
          bodyA:bodyA,
          pointB:{x:xOffset,y:yOffset}     
      }
  
      this.rope=Constraint.create(options);
      this.xOffset = xOffset;
      this.yOffset = yOffset;
      World.add(world,this.rope);
  }
  
  display(){
      var pointA = this.rope.bodyA.position;    
      stroke("black");
      strokeWeight(3);
      line(pointA.x,pointA.y,this.xOffset,this.yOffset)
  }
  }
