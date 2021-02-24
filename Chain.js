class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.ch = Constraint.create(options);
        World.add(world, this.ch);
    }

    fly(){
        this.ch.bodyA = null;
    }

    display(){
        if(this.ch.bodyA){
            var pointA = this.ch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}