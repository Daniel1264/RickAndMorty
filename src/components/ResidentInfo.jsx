import useFetch from "../hooks/useFetch"

// THIS COPONENT IS THE INFORMATION OF  ALL CHARACTERS

const ResidentInfo = ({url}) => {

  const res = useFetch(url)


  return (
    <div className='location_information_resident'>
        <div >
            <img src={res?.image} />
            <h5 className='location_information_reident_status'><p> {res?.status}</p></h5>
            <div className={res?.status === 'Dead' ? 'dead' : 'alive'}></div>
        </div>
        <ul>
            <h2>{res?.name}</h2>
            <li>Origen<span><p>{ res && res.origin.name}</p></span></li>
            <li>Episodios<span><p>{res && res.episode.length}</p></span></li>
        </ul>
    </div>
  )
}

export default ResidentInfo
