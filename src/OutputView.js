const { Console } = require("@woowacourse/mission-utils");
const { GAUID_MESSAGE, OUTPUT_MESSAGE } = require("./Constant");
// const BridgeGame = require("./BridgeGame");


/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(GAUID_MESSAGE.START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upResult, downResult) {
    Console.print("[ " + upResult.join(" | ") +" ]");
    Console.print("[ " + downResult.join(" | ") +" ]");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upResult, downResult, tryCount) {
    Console.print(OUTPUT_MESSAGE.TITLE);
    Console.print(this.printMap(upResult, downResult));
    Console.print(OUTPUT_MESSAGE.ISSUCCESS + this.isSuccess(upResult, downResult));
    Console.print(OUTPUT_MESSAGE.TRYCOUNT + tryCount);

  },

  isSuccess(upResult, downResult) {
    let isSuccess = "성공";
    if(upResult.includes("X") || downResult.includes("X")) {
      isSuccess = "실패"
    }
    return isSuccess;
  }
};

module.exports = OutputView;
