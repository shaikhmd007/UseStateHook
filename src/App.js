import { useState } from "react";
import "./styles.css";

export default function App() {
  const [mode, setMode] = useState(false);
  const [typing, setTyping] = useState("");
  const theme = {
    darkMode: {
      backgroundColor: "black",
      color: "white",
      transition: "900ms"
    },
    lightMode: {
      backgroundColor: "white",
      color: "black",
      transition: "900ms"
    }
  };
  const StateChangingFn = () => {
    let savedTxt = event.target.value;
    setTyping(savedTxt);
  };
  return (
    <div style={mode ? theme.darkMode : theme.lightMode}>
      <span>Dark Mode</span>{" "}
      <input
        type="checkbox"
        onChange={() => setMode((prevMode) => !prevMode)}
        // checked={darkMode}
      />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Real Time Live Typing...</h2>
      <input
        type="text"
        value={typing}
        placeholder="Start Typing..."
        onChange={StateChangingFn}
      />
      <p>U Typed.. {typing}</p>
    </div>
  );
}
