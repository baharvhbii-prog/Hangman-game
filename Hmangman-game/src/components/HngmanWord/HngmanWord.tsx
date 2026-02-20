type HangmanWordsProps = {
  wordToGuess: string;
  guessLtters: string[];
  reveal?: boolean;
};
const HngmanWord = ({
  wordToGuess,
  guessLtters,
  reveal = false,
}: HangmanWordsProps) => {
  const guessedLetter = guessLtters;
  return (
    <div
      className="flex gap-5 text-7xl font-bold text-black"
      style={{ textTransform: "uppercase", fontFamily: "monospace" }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-8 " key={index}>
          <span
            style={{
              visibility:
                guessedLetter.includes(letter) || reveal ? "visible" : "hidden",
                color:!guessLtters.includes(letter) && reveal?"red":"black"           }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HngmanWord;
