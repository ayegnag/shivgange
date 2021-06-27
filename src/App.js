import "./App.css";
import PageContainer from "./components/pageContainer/pagecontainer";
// import Header from "./components/header/header";
// import Maincard from "./components/mainCard/maincard";
// import imgSrc from "./assets/images/cornerFern.png";
function App() {
  return (
    <div className="App">
      <div id="loaderDots" className="loading">
        <span>...</span>
      </div>
      <PageContainer></PageContainer>
    </div>
  );
}

setTimeout(() => {
  var loader = document.getElementById("loaderDots");
  loader.remove();
}, 3000);

export default App;

// {/* <Header></Header> */}
// {/* <Maincard></Maincard>
// <div className="corner-left fern"></div>
// <div className="corner-right fern"></div> */}
