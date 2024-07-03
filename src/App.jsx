import "./App.css";
import Home from "./pages/Home";
import Meal from "./pages/Meal";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="meal/:id" Component={Meal} />
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
