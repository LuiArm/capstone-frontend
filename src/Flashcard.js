import React, {useState} from 'react'
import './Flashcard.css'


export default function Flashcard( {flashcard} ) {
    const [flip,setFlip] = useState(false)


    return (
        <div
            className={`card ${flip ? "flip" : "" }`}
            onClick={() => setFlip(!flip)}>
            
            <div className="front">
                {flashcard.Question}
            </div>
            <div className="back">{flashcard.Answer}</div> 
        </div>
    )
}