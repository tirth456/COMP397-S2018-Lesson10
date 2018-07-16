module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _plane:objects.Plane;
        private _ocean:objects.Ocean;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._plane = new objects.Plane();
            this._ocean = new objects.Ocean();
           
            this.Main();
        }

        public Update():void {
            this._plane.Update();
            this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._ocean);

            // adding the plane to the scene
            this.addChild(this._plane);
        }
    }
}