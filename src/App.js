import "./App.css";
// import Header from "./components/header/header";
import Maincard from "./components/mainCard/maincard";
// import imgSrc from "./assets/images/cornerFern.png";
import CountDown from "./components/countdownTimer/countdown";
function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      {/* <Maincard></Maincard>
      <div className="corner-left fern"></div>
      <div className="corner-right fern"></div> */}
      <CountDown></CountDown>
    </div>
  );
}

export default App;
