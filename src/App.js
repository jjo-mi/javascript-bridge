const { Console } = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const InputView = require("./InputView");
const { ERROR_MESSAGE, INPUT_MESSAGE } = require("./Constant");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");



class App {
  bridgeArr;
  size = 0;
  bridgeArr = [];

  constructor() {
    // this.size = 0;
    // this.bridgeArr = [];
    this.bridgeGame = new BridgeGame();
    this.bridgeArrIndexNum = 0;
  }

  play() {
    OutputView.printStart();
    this.inputSize();
    // const bridgeSize = InputView.readBridgeSize();
    // const move = InputView.readMoving();
  }

  inputSize() {
    InputView.readBridgeSize(inputSize => {
      this.size = Number(inputSize);
      this.validateSize(this.size);
      this.bridgeArr = BridgeMaker.makeBridge(this.size,BridgeRandomNumberGenerator.generate);
      console.log('###다리', this.bridgeArr);
      this.inputMove();
    })

  }

  validateSize(size) {
    try {
      if(size < 3 || size > 20) {
        throw new Error(ERROR_MESSAGE.LENGTH);
      }
    } catch(e) {
      Console.print(ERROR_MESSAGE.LENGTH);
      this.inputSize();
    }
  }

  inputMove() {
    InputView.readMoving(inputMove => {
      this.validateMove(inputMove);
      const movingResult = this.bridgeGame.move(this.bridgeArr[this.bridgeArrIndexNum], inputMove);
      // this.bridgeArrIndexNum++;
      let currentResult = OutputView.printMap(this.bridgeGame.upResult, this.bridgeGame.downResult); 

    })

  }

  validateMove(inputMove) {
    try {
      if(inputMove !== "U" && inputMove !== "D") {
        throw new Error(ERROR_MESSAGE.MOVE);
      }
    } catch(e) {
      Console.print(ERROR_MESSAGE.MOVE);
      this.inputMove();
    }
  }





}



const app = new App;
app.play();

module.exports = App;
