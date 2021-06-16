import React from 'react'
import Flashcard from './Flashcard';


export default function FlashcardList({Flashcards}) {
    return (
        <div className="card-grid">
            {Flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.Id} />
            })}
        </div>
    )
}