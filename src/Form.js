import React from "react"

const Form =(props) =>{

    const [formData, setFormData] = React.useState(props.flashcards)
    console.log('props',props)
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push('/flashcards')
    }

    const handleChange = (event) => {
        setFormData( {...formData, [event.target.name] : event.target.value} )
    }

    
    return ( 
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='Subject'
            value={formData.Subject}
            onChange={handleChange}
            /> 
            <input
            type='text'
            name='Question'
            value={formData.Question}
            onChange={handleChange}
            />
            <input
            type='text'
            name='CorrectAns'
            value={formData.CorrectAns}
            onChange={handleChange}
            />
            <input
            type='submit'
            name="submit"
            value={props.label}
            />
        </form>
    )
}
export default Form