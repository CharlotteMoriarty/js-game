class NumberedBox extends createjs.Container {
    constructor(number= 0) {
      super();
      var movieclip = new lib.NumberedBox();
      movieclip.numberText.text=number;
      this.addChild(movieclip);
      //set the random position
      movieclip.x = Math.random() *200;
      movieclip.y = Math.random() *200;
    }
}


class Game{
    constructor() {
      console.log(`Welcome to the game. Version ${this.version()}`);
      this.canvas = document.getElementById("game-canvas");
      this.stage = new createjs.Stage(this.canvas);

      window.debugStage = this.stage;

      createjs.Ticker.setFPS(60);
      createjs.Ticker.on("tick", this.stage); //for re-drawin the stage

      this.stage.addChild(new lib.Background()); //background

      this.stage.addChild(new NumberedBox(88)); //test
    }
    version(){
      return '1.0.0';
    }
  }
  //alert("test")
  // start the game
  var game = new Game();
  
