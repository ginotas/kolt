import { useState } from "react";



export function NewScooter({addPaspirtukas}) {

  const [registration_code, setRegistration_code] = useState("");
  const [last_use_time, setLast_use_time] = useState("");
  const [total_ride_kilometres, setTotal_ride_kilometres] = useState("");
  const [is_busy, setIs_busy] = useState("");

  const control = (e, what) => {
    switch(what) {
      case "registration_code": setRegistration_code(e.target.value); break;
      case "is_busy": setIs_busy(e.target.value); break;
      case "last_use_time": setLast_use_time(e.target.value); break;
      case "total_ride_kilometres": setTotal_ride_kilometres(e.target.value); break;
    }
    
  }

  const insert = () => {
    addPaspirtukas ({
      registration_code: registration_code,
      is_busy: is_busy,
      last_use_time: last_use_time,
      total_ride_kilometres: total_ride_kilometres
    });
    setRegistration_code("");
    setIs_busy("");
    setTotal_ride_kilometres("");
    setLast_use_time("");
  }

  return (
    <div className="form">
      <div>
        <h2>Naujas paspirtukas</h2>
        </div>
        <div>
        <label className="label">Registracijos kodas:</label>
        <input type="number" onChange={(e) => control(e, 'registration_code')} value={registration_code}  />
        <small className="small">Iveskite astuoniu skaitmenu registracijos koda</small>
      </div>
      <div>
        <label className="label">Paskutinio naudojimo data:</label>
        <input type="date" onChange={(e) => control(e, 'last_use_time')} value={last_use_time}  />
        <small className="small">Iveskite data</small>
      </div>
      <div>
        <label className="label">Nuvaziuoti km: </label>
        <input type="number" onChange={(e) => control(e, 'total_ride_kilometres')} value={total_ride_kilometres} onChange={(e) => control(e, "total_ride_kilometres")} />
        <small className="small">iveskite paspirtuko rida</small>
      </div>
      <div>
        <label className="label">Ar uzimtas: </label>
        <input type="number" onChange={(e) => control(e, 'is_busy')} value={is_busy} onChange={(e) => control(e, "is_busy")} />
        <small className="small">irasyti 1 jei uzimtas, 0 jei laisvas</small>
      </div>
      <button className="buttonForm" onClick={insert}>Prideti paspirtuka</button>
     
    </div>
  );
}
