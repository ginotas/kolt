


export function Scooter({scooter, deleteScooter, showModal}) {

    return (
       <div className="container">
           <h3>Paspirtuko registracijos kodas: {scooter.registration_code}</h3>
           <h4>Paspirtuko paskutine naudojimo data: {scooter.last_use_time}</h4>
           <h5>Paspirtuko rida: {scooter.total_ride_kilometres} km</h5>
           <h5>Ar paspirtukas uzimtas: {scooter.is_busy}</h5>
           <button className="buttonFormDelete" onClick={() => deleteScooter(scooter.id)}>Trinti</button>
           <button className="buttonForm" onClick={() => showModal(scooter.id)}>Redaguoti</button>
       </div>
    )
  }


  // id, registration_code, is_busy, last_use_time, total_ride_kilometres
  