import React, { useState, useEffect} from "react";
import FlashcardList from "./FlashcardList";
import Navbar from "./components/Navbar"
import Dashboard from './components/Dashboard'
import Register from './components/auth/Register'
import Form from './Form'
import {Route,Switch,Link} from 'react-router-dom'

function App() {
  const url = "https://pk61dchkbl.execute-api.us-east-2.amazonaws.com/dev"

  const [flashcards, setFlashcards] = useState([])
 

  const emptyFlashcard = {
    Subject: "",
    Question: "",
    CorrectAns: ""
  }

  const [selectedFlashcard, setSelectedFlashcard] = useState(emptyFlashcard)

  const getFlashcards = () => {
    fetch(url + "/flashcards")
    .then((response) => response.json())
    .then((data) =>{
      console.log('data',data)
      setFlashcards(data.body)
    }) 
  }

  useEffect(() => {
    getFlashcards()
  },[])

  
const handleCreate = (newFlashcard) => {
  fetch(url + "/flashcards/", {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(newFlashcard)
  })
  .then(() => getFlashcards())
}

const handleUpdate = (updateFlashcard) => {
  fetch(url + "/flashcards/" + updateFlashcard.Flashcardid,{
    method: "PUT", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateFlashcard)
  })
  .then(() => getFlashcards())
}

const selectFlashcard = (flashcard) => {
  setSelectedFlashcard(flashcard)
}


const deleteFlashcard = (flashcard) => {
  fetch(url + "/flashcards/" + flashcard.Flashcardid, {
    method: "delete"
  })
  .then(() => getFlashcards())
}


  return (
    <div className="App">
      <Navbar />
      <Switch>
        
        <Route exact path="/"><Register /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/flashcards" render={(routerProps) => <FlashcardList 
        {...routerProps}
          flashcards={flashcards}
          selectFlashcard={selectFlashcard}
          deleteFlashcard={deleteFlashcard}
         />} />
        <Route exact path="/create" render={(routerProps) => <Form 
          {...routerProps} 
          label="create" 
          flashcards={selectedFlashcard} 
          handleSubmit={handleCreate} />
          }
          />
        <Route exact path="/edit" render={(routerProps) =>
            <Form {...routerProps} 
            label="Submit" 
            flashcards={selectedFlashcard} 
            handleSubmit={handleUpdate} />
          }
          />
      </Switch>
      
    </div>
  );
}



export default App;


