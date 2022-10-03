import useFetch from "../hooks/useFetch"

// THIS COPONENT IS THE INFORMATION OF  ALL CHARACTERS

const ResidentInfo = ({url}) => {

  const res = useFetch(url)


  return (
    <div className='location_information_resident'>
        <div >
            <img src={res?.image} />
        </div>
        <ul>
            <h2>{res?.name}</h2>
            <li>Status<span><p className={res?.status === 'Dead' ? 'dead' : 'alive'}> {res?.status}</p></span></li>
            <li>Origen<span><p>{ res && res.origin.name}</p></span></li>
            <li>Episodios<span><p>{res && res.episode.length}</p></span></li>
        </ul>
    </div>
  )
}

export default ResidentInfo
