import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatpage from "./pages/Chatpage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/chats" Component={Chatpage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
