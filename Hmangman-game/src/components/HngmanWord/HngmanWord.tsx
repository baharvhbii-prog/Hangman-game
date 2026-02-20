const HngmanWord = () => {
  const word = "test";
  const guessedLetter =["t","g"]
  return (
    <div
      className="flex gap-5 text-7xl font-bold text-black"
      style={{ textTransform: "uppercase", fontFamily: "monospace" }}
    >
      {word.split("").map((letter, index) => (
        <span className="border-b-8 " key={index}>
          <span style={{visibility:guessedLetter.includes(letter)?"visible":"hidden"}}>
          {letter}

          </span>
        </span>
      ))}
    </div>
  );
};

export default HngmanWord;
