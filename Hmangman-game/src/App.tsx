import { useCallback, useEffect, useState } from "react";
import words from "./wordsList.json";
import HngmanDrawing from "./components/HngmanDrawing/HngmanDrawing";
import HngmanWord from "./components/HngmanWord/HngmanWord";
import Keyboard from "./components/Keyboard/Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}
function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  console.log(wordToGuess);
  const [guessLtters, setGuessLtters] = useState<string[]>([]);

  const inCorrecctLetters = guessLtters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = inCorrecctLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessLtters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessLtters.includes(letter) || isLoser || isWinner) return;

      setGuessLtters((currentLetters) => [...currentLetters, letter]);
    },
    [guessLtters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessLtters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setWordToGuess(getWord());
      setGuessLtters([]);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="max-w-200 flex flex-col gap-8 m-auto items-center ">
      <div className="text-2xl text-center">
        {isWinner && "YOU WON!!- Refresh to try again"}
        {isLoser && "Nice Try- Refresh to try again"}
      </div>
      <HngmanDrawing numberOfGuesses={inCorrecctLetters.length} />
      <HngmanWord
        reveal={isLoser}
        guessLtters={guessLtters}
        wordToGuess={wordToGuess}
      />
      <div className="self-stretch">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetter={guessLtters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={inCorrecctLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
