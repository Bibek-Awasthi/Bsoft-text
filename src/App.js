//jslint
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="Bsoft"
        aboutus="About-App"
        mode={mode}
        changeMode={changeMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact
            path="/"
            element={
              <TextForm mode={mode} heading="Enter your text below: " showAlert={showAlert} />
            }
          ></Route>

          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      
      </div>
    </>
  );
}

export default App;
