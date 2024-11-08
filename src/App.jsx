import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { createContext } from "react";

const ThemeContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [blur, setBlur] = useState("none");

  return (
    <>
      <ThemeContext.Provider value={{ blur, setBlur }}>
        <Header />
        <Home />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
export { ThemeContext };
