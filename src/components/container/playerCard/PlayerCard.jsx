import React from "react";
import "./playerCard.css";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card" onClick={() => console.log(player)}>
      <div className="player-name">{player.PFName}</div>
      <div className="player-avatar">
        <img
          src={require(`../../../../public/player-images/${player.Id}.jpg`)}
          alt={player.PFName}
        />
      </div>
      <div className="player-card-mid">
        <div className="player-skill">{player.SkillDesc}</div>
        <div className="player-value">$ {player.Value}</div>
      </div>

      <div className="player-upcomingMatch-container">
        <div className="container-title">Upcoming Match</div>
        {player.UpComingMatchesList[0].MDate ? (
          <>
            <div className="upcomingMatch">
              <div>{player.UpComingMatchesList[0].CCode}</div>
              <div>v/s</div>
              <div>{player.UpComingMatchesList[0].VsCCode}</div>
            </div>
            <div className="upcomingMatch-DateTime">
              {new Date(
                new Date(player.UpComingMatchesList[0].MDate).getTime() -
                  new Date(
                    player.UpComingMatchesList[0].MDate
                  ).getTimezoneOffset() *
                    60000
              ).toLocaleString()}
            </div>
          </>
        ) : (
          <div className="upcomingMatch-DateTime">No Match Data</div>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
