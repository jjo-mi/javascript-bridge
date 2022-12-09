const OutputView = require("./OutputView");
// const { GAUID_MESSAGE } = require("./Constant");




class App {
  play() {
    // console.log(GAUID_MESSAGE.START);
    OutputView.printStart();
  }
}

const app = new App;
app.play();

module.exports = App;
