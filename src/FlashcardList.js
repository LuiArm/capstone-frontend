import React from 'react'
import Flashcard from './Flashcard';
import {Link} from "react-router-dom"


export default function FlashcardList(props) {
    const {flashcards} = props
    console.log('flashcards',flashcards)
    return (
      <div className="f-container">
        <h1 className="f-header">Flashcards</h1>
        <Link to='/create'>
        <button className="f-btn">Add Flashcard</button>
        </Link>
          <div className="card-grid">
        {flashcards.map( (item, index) => (
            <article id="display-contatiner"
                key={item.Flashcardid}>
                <h3 className="s-header">Subject: {item.Subject}</h3>
                <button className="e-btn"
                    onClick={ () => {
                        props.selectFlashcard(item)
                        props.history.push('/edit')
                    }}
                >Edit
                </button>
                <button className="d-btn"
                    onClick={ () => {
                        props.deleteFlashcard(item)
                    }}>
                    Delete
                </button>
                <Flashcard flashcard={item}/>
            </article>
        ))}
    </div>    
    </div>
       
    )
}



