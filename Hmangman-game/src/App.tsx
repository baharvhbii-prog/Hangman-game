import { useState } from "react";
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
  return (
    <div className="max-w-200 flex flex-col gap-8 m-auto items-center ">
      <div className="text-2xl text-center">lose win</div>
      <HngmanDrawing />
      <HngmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
