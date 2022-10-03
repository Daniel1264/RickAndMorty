import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Location from './components/Location'
import randomNumber from './RamdomNumber'
import FilterList from './components/FilterList'


function App() {

  // ?SESTATE OF COMPONENTS 
// LOCATION
  const [location, Setlocation] = useState('')
  // INPUT CONTROLET
  const [inputText, setInputText] = useState('')
  // BAR OF RESULTS
  const [suggestions, setSuggestions] = useState('')

  // ?PETICION GET HTTP TO AXIOS 

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

    <form onSubmit={handleSubmit}>
      <input type='text' id='search' onChange={handleChange} placeholder= 'Escribe la ubicacion o el id' />
      <button className='form_button'>Search</button>
    </form>

    {/* LIST OF FILTERS OF THE  LOCATIONS */}
    <FilterList 
        resultRecoment = {suggestions}
        setInputText = {setInputText}
      />
      
    {/* COMPONENT LOCATION (INFORMATION OF CHARACTERS ) */}

    <Location 
      location = {location}
      inputText = {inputText}
    />
    </div>
  )
}

export default App
