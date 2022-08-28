import React, { useState, useEffect } from "react";
import "./App.css";
import ListCard from "./components/ListCard";

function App() {
  const [planetsData, setPlanetsData] = useState();

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        const planetdata = data.results.filter((v) => v.films.length > 1);
        setPlanetsData(planetdata);
      });
  }, []);

  return (
    <div className="App">
      {planetsData?.map((v) => (
        <ListCard planetdata={v} />
      ))}
    </div>
  );
}

export default App;
