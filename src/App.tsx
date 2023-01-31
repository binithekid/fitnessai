import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
