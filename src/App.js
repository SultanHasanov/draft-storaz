import "./App.css";
import Header from "./component/Header";
import Slider from "./component/Slider/Slider";
import Statistics from "./component/Statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Header />
      <Statistics />
      <Slider />
    </div>
  );
}

export default App;
