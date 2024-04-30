import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} exact />
          <Route path="/chats" component={Chatpage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
