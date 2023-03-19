import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [champions, setChampions] = useState([]);
  const [random, setRandom] = useState(Math.floor(Math.random() * 162));

  useEffect(() => {
    fetch("http://localhost:5000/api/champions")
      .then((response) => response.json())
      .then((data) => setChampions(data));
  }, []);

  const updateRandom = () => {
    setRandom(Math.floor(Math.random() * 162));
    console.log(random);
  };

  return (
    <div className="start">
      {champions.map((champion, index) => {
        if (index === random) {
          return (
            <div key={champions.id}>
              <div className="container-img">
                <img
                  src={champions[random].imageUrl}
                  alt={champions[random].name}
                ></img>
                 <p>
                  {champions[random].tags[0]} {champions[random].tags[1]}
                </p>
              </div>
              <div className="container-text">
                <h2>{champions[random].name} {champions[random].title}</h2>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <button className="btn" onClick={updateRandom}>
        Random!
      </button>
    </div>
  );
}

export default App;
