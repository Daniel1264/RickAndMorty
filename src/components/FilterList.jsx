import React from 'react'

// THIS COMPONENT IS THE FILTER OOF THE SEARCHES
const FilterList = ({resultRecoment, setInputText}) => {

  const handlerOnclick = (id) => {
    setInputText(id)
  }

 
  return (
    <ul className='filter_list'>
        {
            resultRecoment && resultRecoment.map((result) => (
                <h4  className='filter_list_suggestions'  onClick={() => handlerOnclick(result.id)} key={result.id}>{result.id} {result.name}</h4>
            ))
        }
    </ul>
  )
}

export default FilterList
