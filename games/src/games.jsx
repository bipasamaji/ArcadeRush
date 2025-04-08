import React from "react";
import { useNavigate } from "react-router-dom";
import "./games.css";
import background from "./assets/images/homebackground.png";
import trees1 from "./assets/svgs/trees.svg";
import trees2 from "./assets/svgs/trees2.svg";
import bottom from "./assets/images/bottom.svg";

const Games = () => {
  const navigate = useNavigate();

  const handleLevelClick = (levelNumber) => {
    navigate(`/games/${levelNumber}`);
  };

  const renderLevelBox = (levelNumber) => {
    return (
      <div 
        className="game1 unlocked"
        onClick={() => handleLevelClick(levelNumber)}
      >
        Level {levelNumber}
      </div>
    );
  };

  return (
    <div className="home-container">
      <div className="background-wrapper">
        <img src={background} alt="Background" className="background-image" />
      </div>
      <div className="bottomparent">
        <img src={bottom} alt="bottom" className="bottom" />
      </div>
      <div className="trees1parent">
        <img src={trees1} alt="trees1" className="trees1" />
      </div>
      <div className="trees2parent">
        <img src={trees2} alt="trees2" className="trees2" />
      </div>
      <div className="maingridtemplateforgamesparent">
        <div className="maingridtemplateforgames">
          <div className="gamesrow1">
            {renderLevelBox(1)}
            {renderLevelBox(2)}
            {renderLevelBox(3)}
            {renderLevelBox(4)}
          </div>
          <div className="gamesrow2">
            {renderLevelBox(5)}
            {renderLevelBox(6)}
            {renderLevelBox(7)}
            {renderLevelBox(8)}
          </div>
          <div className="gamesrow3">
            {renderLevelBox(9)}
            {renderLevelBox(10)}
            {renderLevelBox(11)}
            {renderLevelBox(12)}
          </div>
          <div className="gamesrow4">
            {renderLevelBox(13)}
            {renderLevelBox(14)}
            {renderLevelBox(15)}
            {renderLevelBox(16)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;