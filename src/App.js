import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("ON MOUNT:");
    async function fetchMovies() {
      const response = await axios.get(
        "http://www.omdbapi.com/?s=love&apikey=804956f8"
      );
      console.log(response.data.Search);
    }

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header">MOVIES:</header>
    </div>
  );
}

export default App;
