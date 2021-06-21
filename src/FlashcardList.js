import React from 'react'
import Flashcard from './Flashcard';
import {Link} from "react-router-dom"


export default function FlashcardList(props) {
    const {flashcards} = props
    console.log('flashcards',flashcards)
    return (
        <div className="card-grid">
        <h1>Flashcards</h1>
        <Link to='/create'>
        <button>Add Flashcard</button>
        </Link>
        {flashcards.map( (item, index) => (
            <article id="display-contatiner"
                key={item.Flashcardid}>
                <h3>Subject: {item.Subject}</h3>
                <h3>Question: {item.Question}</h3>
                <h3>Answer: {item.CorrectAns}</h3>
                <button
                    onClick={ () => {
                        props.selectFlashcard(item)
                        props.history.push('/edit')
                    }}
                >Edit
                </button>
                <button
                    onClick={ () => {
                        props.deleteFlashcard(item)
                    }}>
                    Delete
                </button>

            </article>
        ))}
    </div>    

       
    )
}



{/* <div className="card-grid">
{flashcards.map(flashcard => {
    return 
    <Flashcard flashcard={flashcard} key={flashcard.Id}
     />
})}
</div> */}