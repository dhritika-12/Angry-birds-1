class Chain {
constructor(bodyA, bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness: 0.1,
        length: 5
    }
    this.Chain = Constraint.create(options);
    World.add(world, this.Chain);
}
display (){
var pointA = this.Chain.bodyA.position;
var pointB = this.Chain.bodyB.position;
strokeWeight(6);
line(pointA.x, pointA.y,pointB.x, pointB.y);

}

}