module managers {
    export class Collision {

        public static check(object1:objects.GameObject, object2:objects.GameObject):void {
            let P1 = new math.Vec2(object1.x, object1.y);
            let P2 = new math.Vec2(object2.x, object2.y);
            
            if(math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                console.log("Collision!");
            }
        }
    }
}