import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FirstPage from "./views/FirstPage";
import NotFound from "./components/NotFound";
import WaiterBreakfast from "./views/WaiterBreakfast";
import Kitchen from "./views/Kitchen";
import WaiterLunch from "./views/WaiterLunch";
import WaiterReady from "./views/WaiterReady";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/breakfast" element={<WaiterBreakfast />} />
        <Route path="/lunch" element={<WaiterLunch />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/orders" element={<WaiterReady />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
