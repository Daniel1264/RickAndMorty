import React from 'react'

// THIS COMPONENT ORGANIZES IN THE FORM OF A LIST ALL COMPONENTS OF CHARACTERS

const ResidentList = ({ComponentCard}) => {
  return (
    <div className='location_information_list'>
      {ComponentCard}
    </div>
  )
}

export default ResidentList
