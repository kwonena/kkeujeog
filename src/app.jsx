import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import "./app.scss";
import Main from "./components/main/main";
import Editor from "./components/editor/editor";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
