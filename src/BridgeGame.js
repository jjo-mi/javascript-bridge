const { generateRandomNumber } = require("./BridgeMaker");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");



const bridgeArr = BridgeMaker.makeBridge(InputView.inputSize, generateRandomNumber);

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.currentUpResult = [];
    this.currentDownResult = [];
    this.bridgeArrIndexNum = 0;
    this.move(inputMove);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(inputMove) {
    // const inputMove = InputView.readMoving();
    let result = "x";
    if(bridgeArr[this.bridgeArrIndexNum] == inputMove) {
      result = "o"
      this.bridgeArrIndexNum++;
    }
    this.compareCase(inputMove);
    console.log("###up", this.currentUpResult);
    console.log("###down", this.currentDownResult);


    // for(let i = 0; i < bridgeArr.length; i++) {
    //   if(bridgeArr[i] == inputMoveArr) {
    //     this.compareCase(inputMoveArr);
    //   } else if(bridgeArr[i] !== inputMoveArr[i]) {
    //     this.differntCase(inputMoveArr);
    //   }
    // }
  }

  compareCase(inputMove) {
    switch(inputMove) {
      case "U": 
        this.currentUpResult.push(result);
        this.currentDownResult.push(" ");
        break;
      case "D":
        this.currentUpResult.push(" ");
        this.currentDownResult.push(result);
        break;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
