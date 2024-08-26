import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Global from "./components/Global/Global";
import SplitImage from "./components/SplitImage/SplitImage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Global />}>
            <Route path="/" element={<Home />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
