import "./App.scss";
import Counter from "./components/Counter-lvl2_1/Counter";
import DayNight from "./components/Day-Night-lvl2_2/DayNight";
import Faq from "./components/Faq-lvl1_1/Faq";
import Input from "./components/input-lvl1_6/Input";

function App() {
  return (
    <>
      <div className="exercises">
        <Input />
        <DayNight />
        <Counter />
        <Faq />
      </div>
    </>
  );
}

export default App;
