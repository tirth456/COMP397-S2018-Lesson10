module objects {
    export abstract class GameObject extends createjs.Bitmap {
        // member variables
        public width:number;
        public height:number;
        public halfWidth:number;
        public halfHeight:number;

        // constructors
        constructor(imagePath) {
            super(managers.Game.AssetManager.getResult(imagePath));

            this._initialize();


        }

        // private methods


        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
        }

        // public methods
        public Start():void {

        }

        public Update():void {

        }

        public Reset():void {

        }
    }
}