import React, { useState, useEffect } from "react";
import "./container.css";
import PlayerCard from "../container/playerCard/PlayerCard";

const Container = () => {
  const [playerList, setPlayerList] = useState([]);
  const [fullPlayerList, setFullPlayerList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch(`https://api.npoint.io/20c1afef1661881ddc9c`)
        .then((res) => res.json())
        .then((data) => setFullPlayerList(data.playerList));
    };
    getData();
  }, []);

  useEffect(() => {
    setPlayerList(fullPlayerList);
  }, [fullPlayerList]);

  const handleChange = (e) => {
    setPlayerList(
      fullPlayerList.filter(
        (player) =>
          player.PFName.toLowerCase().startsWith(
            e.target.value.toLowerCase()
          ) ||
          player.TName.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <span>Sportz</span> Interactive
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search your player by Team Name or Full Name"
            onChange={handleChange}
          />
          <button>Search</button>
        </div>
      </div>
      <div className="player-container">
        {playerList
          .sort((a, b) => {
            return a.Value - b.Value;
          })
          .map((player) => (
            <PlayerCard key={player.Id} player={player} />
          ))}
      </div>
    </div>
  );
};

export default Container;
