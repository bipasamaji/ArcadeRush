import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Hangman from "./games/Hangman/game";
import Minesweeper from "./games/Minesweeper/game";
import SimonSays from "./games/Simon/game";
import SlidingPuzzle from "./games/Sliding/game";
import FlappyBird from "./games/Flappy/game";
import PegSolitaire from "./games/peg/game";
import LightsOut from "./games/LightsOut/game";
import Mastermindgames from "./games/Mastermind/game";
import Mazegames from "./games/maze/game";
import Reversigames from "./games/reversi/game";
import Sudoku from "./games/Sudoku/game";
import WordGuessing from "./games/Wordle/WordGuessing";
import TowerOfHanoi from "./games/TowerofHanoi/game";
import Kakurogames from "./games/kokuro/game";
import TicTacToe from "./games/TicTacToe/game";
import Hexgames from "./games/hex/game";
import "./App.css";

// Game data with name, path, and emoji/icon representation
const gamesList = [
  { id: 1, name: "Hangman", path: "/games/1", emoji: "📝", color: "#FF6B6B" },
  { id: 2, name: "Minesweeper", path: "/games/2", emoji: "💣", color: "#4ECDC4" },
  { id: 3, name: "Simon Says", path: "/games/3", emoji: "🎮", color: "#FFD166" },
  { id: 4, name: "Sliding Puzzle", path: "/games/4", emoji: "🧩", color: "#06D6A0" },
  { id: 5, name: "Flappy Bird", path: "/games/5", emoji: "🐦", color: "#118AB2" },
  { id: 6, name: "Peg Solitaire", path: "/games/6", emoji: "🔵", color: "#EF476F" },
  { id: 7, name: "Lights Out", path: "/games/7", emoji: "💡", color: "#FFD166" },
  { id: 8, name: "Mastermind", path: "/games/8", emoji: "🎯", color: "#06D6A0" },
  { id: 9, name: "Maze", path: "/games/9", emoji: "🌀", color: "#073B4C" },
  { id: 10, name: "Reversi", path: "/games/10", emoji: "⚫", color: "#FF6B6B" },
  { id: 11, name: "Sudoku", path: "/games/11", emoji: "🔢", color: "#118AB2" },
  { id: 12, name: "Word Guessing", path: "/games/12", emoji: "🔤", color: "#4ECDC4" },
  { id: 13, name: "Tower of Hanoi", path: "/games/13", emoji: "🗼", color: "#FF9F1C" },
  { id: 14, name: "Kakuro", path: "/games/14", emoji: "➕", color: "#EF476F" },
  { id: 15, name: "Tic Tac Toe", path: "/games/15", emoji: "⭕", color: "#073B4C" },
  { id: 16, name: "Hex", path: "/games/16", emoji: "⬡", color: "#FF9F1C" },
];

// Header Component
const Header = () => {
  return (
    <header className="arcade-header">
      <div className="logo-container">
        <h1 className="arcade-title">
          <span className="arcade-text">Arcade</span> 
          <span className="rush-text">Rush</span>
        </h1>
        <div className="arcade-subtitle">Your Pocket Game Paradise</div>
      </div>
    </header>
  );
};

// Game Card Component
const GameCard = ({ game }) => {
  return (
    <Link to={game.path} className="game-card" style={{ backgroundColor: game.color }}>
      <div className="game-emoji">{game.emoji}</div>
      <h3 className="game-name">{game.name}</h3>
      <div className="game-shine"></div>
    </Link>
  );
};

// Games Grid Component (Main Page)
const GamesGrid = () => {
  return (
    <div className="arcade-container">
      <Header />
      <div className="games-intro">
        <h2>Select Your Game</h2>
        <p>Jump into fun with our collection of classic and modern games!</p>
      </div>
      <div className="games-grid">
        {gamesList.map((game, index) => (
          <GameCard key={game.id} game={game} style={{"--order": index}} />
        ))}
      </div>
      <footer className="arcade-footer">
        <p>© 2025 ArcadeRush - All games ready to play!</p>
      </footer>
    </div>
  );
};

// Back Button Component for Game Pages
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className="back-button" onClick={() => navigate('/')}>
      ←
    </button>
  );
};

// Game Page Wrapper
const GamePageWrapper = ({ Component }) => {
  return (
    <>
      <BackButton />
      <Component />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<GamesGrid />} />
          <Route path="/games/1" element={<GamePageWrapper Component={Hangman} />} />
          <Route path="/games/2" element={<GamePageWrapper Component={Minesweeper} />} />
          <Route path="/games/3" element={<GamePageWrapper Component={SimonSays} />} />
          <Route path="/games/4" element={<GamePageWrapper Component={SlidingPuzzle} />} />
          <Route path="/games/5" element={<GamePageWrapper Component={FlappyBird} />} />
          <Route path="/games/6" element={<GamePageWrapper Component={PegSolitaire} />} />
          <Route path="/games/7" element={<GamePageWrapper Component={LightsOut} />} />
          <Route path="/games/8" element={<GamePageWrapper Component={Mastermindgames} />} />
          <Route path="/games/9" element={<GamePageWrapper Component={Mazegames} />} />
          <Route path="/games/10" element={<GamePageWrapper Component={Reversigames} />} />
          <Route path="/games/11" element={<GamePageWrapper Component={Sudoku} />} />
          <Route path="/games/12" element={<GamePageWrapper Component={WordGuessing} />} />
          <Route path="/games/13" element={<GamePageWrapper Component={TowerOfHanoi} />} />
          <Route path="/games/14" element={<GamePageWrapper Component={Kakurogames} />} />
          <Route path="/games/15" element={<GamePageWrapper Component={TicTacToe} />} />
          <Route path="/games/16" element={<GamePageWrapper Component={Hexgames} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;