class Launcher {
    constructor(bodyA,pointB){
        var Options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB
        this.launcher=Constraint.create(Options)
        World.add(world,this.launcher)
    }
  
    fly(){
        this.launcher.bodyA = null
    }

    attach(){
        this.launcher.bodyA = null
    }

    display(){
        if(this.launcher.bodyA) {

     var pointA=this.launcher.bodyA.position;
     var pointB=this.pointB;
     strokeWeight(3);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
      } 
    }
  }
  