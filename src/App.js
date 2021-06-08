import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("ON MOUNT:");
  }, []);

  return (
    <div className="App">
      <header className="App-header">MOVIES:</header>
    </div>
  );
}

export default App;
