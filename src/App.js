const OutputView = require("./OutputView");
const InputView = require("./InputView");


class App {
  play() {
    OutputView.printStart();
    const bridgeSize = InputView.readBridgeSize();
    // const move = InputView.readMoving();

  }



}



const app = new App;
app.play();

module.exports = App;
