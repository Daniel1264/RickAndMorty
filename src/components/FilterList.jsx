import React from 'react'

// THIS COMPONENT IS THE FILTER OOF THE SEARCHES
const FilterList = ({resultRecoment, setInputText}) => {

  const handlerOnclick = (e) => {
    setInputText(e)
  }

  const handlerSubmit = () => {
    setInputText('')
  }
  return (
    <ul className='filter_list'>
        {
            resultRecoment && resultRecoment.map((result) => (
                <h4 onSubmit={handlerSubmit()} className='filter_list_suggestions'  onClick={() => handlerOnclick(result.id)} key={result.id}>{result.name}</h4>
            ))
        }
    </ul>
  )
}

export default FilterList
