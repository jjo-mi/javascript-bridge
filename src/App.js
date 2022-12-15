const { Console } = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const InputView = require("./InputView");
const { ERROR_MESSAGE } = require("./Constant");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const { readBridgeSize } = require("./InputView");



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
      this.repeatInputMove();
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

  repeatInputMove() {
    InputView.readMoving(inputMove => {
      try {
        this.validateMove(inputMove);
        this.handleResultOfMove(inputMove);
      } catch (e) {
        Console.print(e.message)
        this.repeatInputMove();
      }
    })
  }


  /** 입력값 비교해서 정답 여부 안내 */
  handleResultOfMove(inputMove) {
    const movingResult = this.bridgeGame.move(this.bridgeArr[this.bridgeArrIndexNum], inputMove);
    let currentResult = OutputView.printMap(this.bridgeGame.upResult, this.bridgeGame.downResult);
    console.log('###result', movingResult);
    if(movingResult == "O") {
      this.bridgeArrIndexNum++;
      this.repeatInputMove();
    } else if(movingResult == "X") {
      this.retry();
    }
  }

  validateMove(inputMove) {
    try {
      if(inputMove !== "U" && inputMove !== "D") {
        throw new Error(ERROR_MESSAGE.MOVE);
      }
    } catch(e) {
      Console.print(ERROR_MESSAGE.MOVE);
      this.repeatInputMove();
    }
  }

  retry() {
    InputView.readGameCommand(input => {
      this.validateRetry(input);
      if(input == "R") {
        this.bridgeGame.retry();
        this.repeatInputMove();
      } else if(input == "Q") {
        console.log("###아직, 게임최종결과 출력 만드는 중")
      }

    })
  }

  validateRetry(input){
    try {
      if(input !== "R" && input !== "Q") {
        throw new Error(ERROR_MESSAGE.RETRY);
      }
    } catch (error) {
      Console.print(e.message);
      this.retry();
    }

  }





}



const app = new App;
app.play();

module.exports = App;
