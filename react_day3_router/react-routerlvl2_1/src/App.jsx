import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speisekarte from "./components/Speisekarte";
import Kontakt from "./components/Kontakt";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Speisekarte />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/" element={""} />
          <Route path="/" element={""} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
