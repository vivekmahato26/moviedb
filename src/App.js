
import { Routes, Route } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";
import Payment from "./pages/payment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </div>
  );
}

export default App;
