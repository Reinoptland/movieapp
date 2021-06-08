import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(null);
  console.log("WHAT IS THE STATE:", movies);

  useEffect(() => {
    console.log("ON MOUNT:");
    async function fetchMovies() {
      const response = await axios.get(
        "http://www.omdbapi.com/?s=love&apikey=APIKEY_HERE"
      );
      console.log(response.data.Search);
      setMovies(response.data.Search); // trigger rerender
    }

    fetchMovies();
  }, []);

  // 1. "WHAT IS THE STATE:" null
  // 2. "ON MOUNT:"
  // ... even wachtten
  // 3. console.log([{}, {}, {}]); -> de data
  // 4. console.log("WHAT IS THE STATE:", [{}, {}, {}]);

  return (
    <div className="App">
      <header className="App-header">
        MOVIES:
        <div>
          {movies ? (
            movies.map((movie) => {
              console.log(movie);
              return (
                <div key={movie.imdbID}>
                  <h1>{movie.Title}</h1>
                  <img src={movie.Poster} />
                </div>
              );
            })
          ) : (
            <h1>Loading</h1>
          )}
          {/* we zien objecten -> we zien alle films */}
        </div>
      </header>
    </div>
  );
}

export default App;
