import React, { useState} from "react";
import FlashcardList from "./FlashcardList";
import './App.css'

function App() {
  const [Flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  console.log(Flashcards)
  return (
    <div className="App">
      <FlashcardList Flashcards={Flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    Id:1,
    Question: 'what is 2+100?',
    Answer: '4'
  },
  {
    Id:2,
    Question: 'question',
    Answer: 'answer'
  }
]

export default App;
