const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./Constant");


/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /** 2. 다리길이 입력 받기 */
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.LENGTH, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.MOVE, callback); 
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.RETRY, callback);
  },
};

module.exports = InputView;
