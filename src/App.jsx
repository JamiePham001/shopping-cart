import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { CardContainer } from "./components/CardContainer";
import { Card } from "./components/Card";

import "./App.css";

function App() {
  const [rotation, setRotation] = useState(0);
  const [unseenWords, setUnseenWords] = useState([
    "apple",
    "mountain",
    "sprint",
    "flame",
    "orange",
    "bottle",
    "guitar",
    "zebra",
    "cloud",
    "rocket",
    "pencil",
    "forest",
    "ocean",
    "tiger",
    "shadow",
    "crystal",
    "galaxy",
    "feather",
    "laptop",
    "drift",
    "banana",
    "mirror",
    "volcano",
    "silver",
    "cotton",
    "planet",
    "eagle",
    "circle",
    "anchor",
    "whistle",
    "grape",
    "jungle",
    "cherry",
    "quartz",
    "plasma",
    "desert",
    "castle",
    "dragon",
    "candle",
    "echo",
    "helmet",
    "honey",
    "icicle",
    "kettle",
    "lantern",
    "marble",
    "nectar",
    "opal",
    "prism",
    "quill",
    "raven",
    "saddle",
    "temple",
    "umbrella",
    "violet",
    "window",
    "xenon",
    "yogurt",
    "zeppelin",
    "amber",
    "blossom",
    "carrot",
    "daisy",
    "ember",
    "flute",
    "garden",
    "harbor",
    "island",
    "jacket",
    "koala",
    "lemon",
    "magnet",
    "needle",
    "orbit",
    "pirate",
    "quokka",
    "ripple",
    "safari",
    "turbo",
    "unicorn",
    "vacuum",
    "wander",
    "xylophone",
    "yellow",
    "zipper",
    "algae",
    "brick",
    "canvas",
    "dolphin",
    "engine",
    "fossil",
    "glider",
    "hazel",
    "igloo",
    "jungle",
    "kite",
    "ladder",
    "moose",
    "nugget",
    "oxide",
  ]);
  const [seenWords, setSeenWords] = useState([]);
  const [cardWord, setCardWord] = useState({ word: "", type: null });
  const [score, setScore] = useState({ highscore: 0, currentScore: 0 });
  // const [needsReset, setNeedsReset] = useState(false);

  // write functions that will handle whenever a seen or unseen word it chosen. These functions should return true or false if the user incorrectly guesses
  const getWord = () => {
    // randomise a number between 0 and 1, with a 33% probability of selecting 1
    const randList = Math.random() < 0.66 ? 0 : 1;

    // if 0, randomise a word from the unseen list and return 0. Append word to seen list and remove word from unseen list.
    if (seenWords.length === 0 || randList === 0) {
      const randIndex = Math.floor(Math.random() * unseenWords.length);
      const selectedWord = unseenWords[randIndex];

      const newUnseenWords = [...unseenWords];
      newUnseenWords.splice(randIndex, 1);
      setUnseenWords(newUnseenWords);

      setSeenWords([...seenWords, selectedWord]);

      setCardWord({
        word: selectedWord,
        type: 0,
      });

      return;
    } else {
      // if 1, randomise a word from the seen list and return 1
      const randIndex = Math.floor(Math.random() * seenWords.length);
      const selectedWord = seenWords[randIndex];
      setCardWord({ word: selectedWord, type: 1 });
    }
  };

  const checkSeen = () => {
    if (cardWord.type === 1) {
      // Correct answer for seen word
      setScore((prev) => ({
        currentScore: prev.currentScore + 1,
        highscore: Math.max(prev.currentScore + 1, prev.highscore),
      }));
      getWord();
    } else {
      setScore((prev) => ({ ...prev, currentScore: 0 }));

      // Immediately reset arrays before getting new word
      const combinedWords = [...unseenWords, ...seenWords];
      setUnseenWords(combinedWords);
      setSeenWords([]);

      // Get new word from fully reset arrays
      const randIndex = Math.floor(Math.random() * combinedWords.length);
      const selectedWord = combinedWords[randIndex];

      setUnseenWords(combinedWords.filter((_, i) => i !== randIndex));
      setSeenWords([selectedWord]);

      setCardWord({
        word: selectedWord,
        type: 0, // Force as new word after reset
      });
    }
  };

  const checkNew = () => {
    if (cardWord.type === 0) {
      setScore((prev) => ({
        currentScore: prev.currentScore + 1,
        highscore: Math.max(prev.currentScore + 1, prev.highscore),
      }));
      getWord();
    } else {
      setScore((prev) => ({ ...prev, currentScore: 0 }));

      // Immediately reset arrays before getting new word
      const combinedWords = [...unseenWords, ...seenWords];
      setUnseenWords(combinedWords);
      setSeenWords([]);

      // Get new word from fully reset arrays
      const randIndex = Math.floor(Math.random() * combinedWords.length);
      const selectedWord = combinedWords[randIndex];

      setUnseenWords(combinedWords.filter((_, i) => i !== randIndex));
      setSeenWords([selectedWord]);

      setCardWord({
        word: selectedWord,
        type: 0, // Force as new word after reset
      });
    }
  };

  const handleClick = (degrees) => {
    setRotation((prev) => prev + degrees);
  };

  useEffect(() => {
    getWord();
  }, []);

  return (
    <>
      <Header></Header>
      <main className="page-container">
        <CardContainer
          highscore={score.highscore}
          currentScore={score.currentScore}
        >
          <Card rotation={rotation}>{cardWord.word}</Card>
        </CardContainer>
        <div className="button-container">
          <button
            className="seen"
            onClick={() => {
              handleClick(-360);
              checkSeen();
            }}
          >
            seen
          </button>
          <button
            className="new"
            onClick={() => {
              handleClick(360);
              checkNew();
            }}
          >
            new
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
