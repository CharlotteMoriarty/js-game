class NumberedBox extends createjs.Container {
    constructor(number= 0) {
      super();
      var movieclip = new lib.NumberedBox();
      movieclip.numberText.text=number;
      this.addChild(movieclip);
      this.setBounds(0,0,50,50);
    
    }
}


class Game{
    constructor() {
      console.log(`Welcome to the game. Version ${this.version()}`);
      this.canvas = document.getElementById("game-canvas");
      this.stage = new createjs.Stage(this.canvas);
      this.stage.width = this.canvas.width;
      this.stage.height = this.canvas.height;


      window.debugStage = this.stage;

      createjs.Ticker.setFPS(60);
      createjs.Ticker.on("tick", this.stage); //for re-drawin the stage

      var circle = new createjs.Shape();
      circle.graphics.beginFill("blue").drawCircle(0,0,40);
      circle.x = circle.y = 100;
      this.stage.addChild(circle);

      this.stage.addChild(new lib.Background());

     // this.stage.addChild(new NumberedBox(88)); //test
      this.generateMultiplyBoxes();

    }
    version(){
      return '1.0.0';
    }
    generateMultiplyBoxes(amount=10) {
      //loop for count down
      for (var i=  amount; i>0; i--) {
        var movieclip = new NumberedBox(i);
        this.stage.addChild(movieclip);
          //set the random position
        movieclip.x = Math.random() * (this.stage.width-movieclip.getBounds().width);
        movieclip.y = Math.random() * (this.stage.height-movieclip.getBounds().height);
      }
    }
  }
  //alert("test")
  // start the game
  var game = new Game();
  
