const OutputView = require("./OutputView");
const InputView = require("./InputView");


class App {
  play() {
    OutputView.printStart();
    const bridgeSize = InputView.readBridgeSize();
    // console.log('###3', bridgeSize);

  }
}



const app = new App;
app.play();

module.exports = App;
