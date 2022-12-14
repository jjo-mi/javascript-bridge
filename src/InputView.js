const { Console } = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE, INPUT_MESSAGE } = require("./Constant");
const BridgeMaker = require("./BridgeMaker");


/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /** 2. 다리길이 입력 받기 */
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.LENGTH, (callback) => {
      let inputSize = Number(callback);
      this.validateSize(inputSize);
      const bridgeArr = BridgeMaker.makeBridge(inputSize, BridgeMaker.generateRandomNumber);
      console.log('###다리', bridgeArr);
      this.readMoving();
    });
  },

  validateSize(inputSize) {
    try {
      if(inputSize < 3 || inputSize > 20) {
        throw new Error(ERROR_MESSAGE.LENGTH);
      }
    } catch(e) {
      Console.print(ERROR_MESSAGE.LENGTH);
      this.readBridgeSize();
    }
  },


  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.MOVE, (inputMove) => {
      this.validateMove(inputMove);
      // let moveArr = callback;
    });
  },

  validateMove(inputMove) {
    try {
      if(inputMove !== "U" && inputMove !== "D") {
        throw new Error(ERROR_MESSAGE.MOVE);
      }
    } catch(e) {
      Console.print(ERROR_MESSAGE.MOVE);
      this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
