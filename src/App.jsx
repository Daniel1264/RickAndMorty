import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Location from './components/Location'
import randomNumber from './RamdomNumber'
import Form from './components/Form'


function App() {

  // ?STATE OF COMPONENTS 
// LOCATION
  const [location, Setlocation] = useState('')
  // INPUT CONTROLET
  const [inputText, setInputText] = useState('')
  // BAR OF RESULTS
  const [suggestions, setSuggestions] = useState('')

  // ?PETITION  HTTP OF AXIOS 

  useEffect(() => {
    let id = randomNumber(126);
    if(inputText){
      id = inputText
    } 
    let url = `https://rickandmortyapi.com/api/location/${id}`
      axios.get(url)
      .then(res => Setlocation(res.data))
      .catch(err => console.log(err))

  },[inputText])


  // ?FUNCTIONS 


// EVENT OF INPUT (LOCALITATION OF CHARACTERS)
  const handleSubmit = (e) => {
    e.preventDefault()
    setInputText(e.target.search.value)
  }

  // EVENT OF INPUT AND PETITION (LOCATION SUGGESTIONS)
  const handleChange = (e) => {
    if (e.target.value == '') {
      setSuggestions('')
    } else {
      let URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
  
      axios.get(URL)
      .then(res => setSuggestions(res.data.results))
      .catch(err => console.log(err))
    }
  }

  // ?JSX RETURN OF COMPONET APP

  return (
    <div className="App">
    
    {/* HEADER */}
        <div className='card_presentation'>
      <h3>Bienvenido || Rick and Morty API</h3>
        </div>

    {/* FORM FOR RESULTS OF THE API RICK AND MORTY */}


    <Form 
      handleSubmit = {handleSubmit}
      onChange = {handleChange}
      resultRecoment = {suggestions}
      setInputText = {setInputText}
    />

      
    {/* COMPONENT LOCATION (INFORMATION OF CHARACTERS ) */}

    <Location 
      location = {location}
    />
    </div>
  )
}

export default App
