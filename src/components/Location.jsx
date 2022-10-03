import ResidentInfo from '../components/ResidentInfo'
import ResidentList from '../components/ResidentList'

// THIS COMPONENT CONTENT ALL CHILLS COMPONENTS AND INHERITS PROPERTIES
const Location = ({location}) => {



  return (
    <div className='location'> 
      <div className='location_information'>
      <h1>{location?.name}</h1>
      <ul>
        <li>Tipo:<span> {location?.type}</span></li>
        <li>Dimension:<span> {location?.dimension}</span></li>
        <li>Poblacion:<span> {location && location.residents.length}</span></li>
      </ul>
      </div>
      <ResidentList 
        ComponentCard =                 {
          location.residents?.map(url => (
      <ResidentInfo
        url = {url}
        key = {url}
      />
          ))
        }
      />

    </div>
  )
}

export default Location
