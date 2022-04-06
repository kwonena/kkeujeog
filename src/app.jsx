import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
