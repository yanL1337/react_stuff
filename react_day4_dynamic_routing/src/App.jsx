import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import List from "./pages/List";
import ListItem from "./pages/ListItem";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/list-item/:id" element={<ListItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
