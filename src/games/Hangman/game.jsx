import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const words = [
  "javascript", "react", "developer", "computer", "algorithm",
  "variable", "object", "string", "number", "boolean"
];

const Hangman = () => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const maxMistakes = 6;

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
  }, []);

  const handleGuess = (letter) => {
    if (gameOver || guessedLetters.includes(letter)) return;

    setGuessedLetters(prevLetters => [...prevLetters, letter]);

    if (!word.includes(letter)) {
      setMistakes(prevMistakes => prevMistakes + 1);
    }
  };

  const displayWord = () => {
    return word
      .split("")
      .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  };

  useEffect(() => {
    if (mistakes >= maxMistakes) {
      setGameOver(true);
    } else if (word && word.split("").every(letter => guessedLetters.includes(letter))) {
      setGameOver(true);
    }
  }, [mistakes, guessedLetters, word]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hangman</h1>
      <p className={styles.wordDisplay}>{displayWord()}</p>
      <p className={styles.mistakes}>Mistakes: {mistakes} / {maxMistakes}</p>

      <div className={styles.alphabetGrid}>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
          <button
            key={letter}
            className={styles.letterButton}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameOver}
          >
            {letter}
          </button>
        ))}
      </div>

      <button onClick={() => window.location.reload()} className={styles.resetButton}>Restart</button>

      {gameOver && (
        <p className={`${styles.gameOver} ${mistakes >= maxMistakes ? styles.lose : styles.win}`}>
          {mistakes >= maxMistakes 
            ? `You Lost! 😞 The word was ${word}` 
            : "You Won! 🎉"}
        </p>
      )}
    </div>
  );
};

export default Hangman;