import { useCallback, useEffect, useState } from "react";
import words from "./wordsList.json";
import HngmanDrawing from "./components/HngmanDrawing/HngmanDrawing";
import HngmanWord from "./components/HngmanWord/HngmanWord";
import Keyboard from "./components/Keyboard/Keyboard";
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  console.log(wordToGuess);
  const [guessLtters, setGuessLtters] = useState<string[]>([]);
  const inCorrecctLetters = guessLtters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessLtters.includes(letter)) return;

      setGuessLtters((currentLetters) => [...currentLetters, letter]);
    },
    [guessLtters]
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
  return (
    <div className="max-w-200 flex flex-col gap-8 m-auto items-center border">
      <div className="text-2xl text-center">lose win</div>
      <HngmanDrawing numberOfGuesses={inCorrecctLetters.length} />
      <HngmanWord guessLtters={guessLtters} wordToGuess={wordToGuess} />
      <div className="self-stretch">
        <Keyboard
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
