import React from 'react'
import FilterList from './FilterList'

const Form = ({onChange, handleSubmit, resultRecoment, setInputText}) => {
  return (
    <div>
          <form onSubmit={handleSubmit}>
      <input type='text' id='search' onChange={onChange} placeholder= 'Escribe la ubicacion o el id' />
      <button className='form_button'>Search</button>
    </form>
    <FilterList 
        resultRecoment={resultRecoment}
        setInputText={setInputText}
    />
    </div>
  )
}

export default Form
