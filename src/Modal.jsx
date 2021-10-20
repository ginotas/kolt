import { useState, useEffect } from "react";

export function Modal({ id, scooter, editPaspirtukas, hideModal }) {
  const [registration_code, setRegistration_code] = useState("");
  const [last_use_time, setLast_use_time] = useState("");
  const [total_ride_kilometres, setTotal_ride_kilometres] = useState("");
  const [is_busy, setIs_busy] = useState("");

  useEffect(() => {
    setRegistration_code(scooter.registration_code);
    setLast_use_time(scooter.setLast_use_time);
    setTotal_ride_kilometres(scooter.setTotal_ride_kilometres);
    setIs_busy(scooter.setIs_busy);
  }, [scooter]);

  const control = (e, what) => {
    switch (what) {
      case "registration_code":
        setRegistration_code(e.target.value);
        break;
      case "is_busy":
        setIs_busy(e.target.value);
        break;
      case "last_use_time":
        setLast_use_time(e.target.value);
        break;
      case "total_ride_kilometres":
        setTotal_ride_kilometres(e.target.value);
        break;
    }
  };

  const edit = () => {
    editPaspirtukas(id, {
      registration_code: registration_code,
      is_busy: is_busy,
      last_use_time: last_use_time,
      total_ride_kilometres: total_ride_kilometres,
    });
    hideModal();
    setRegistration_code("");
    setIs_busy("");
    setTotal_ride_kilometres("");
    setLast_use_time("");
  };

  if (id === 0) {
    return null;
  }

  return (
    <div className="form modal">
      <div>
        <h2>Redaguoti paspirtuka:</h2>
      </div>
      <div>
        <label className="label">Registracijos kodas:</label>
        <input
          type="number"
          onChange={(e) => control(e, "registration_code")}
          value={registration_code}
        />
        <small className="small">Redaguokite registracijos koda</small>
      </div>
      <div>
        <label className="label">Paskutinio naudojimo data:</label>
        <input
          type="date"
          onChange={(e) => control(e, "last_use_time")}
          value={last_use_time}
        />
        <small className="small">Redaguokite data</small>
      </div>
      <div>
        <label className="label">Nuvaziuoti km: </label>
        <input
          type="number"
          onChange={(e) => control(e, "total_ride_kilometres")}
          value={total_ride_kilometres}
          onChange={(e) => control(e, "total_ride_kilometres")}
        />
        <small className="small">Redaguokite paspirtuko rida</small>
      </div>
      <div>
        <label className="label">Ar uzimtas: </label>
        <input
          type="checkbox"
          onChange={(e) => control(e, "is_busy")}
          value={is_busy}
          onChange={(e) => control(e, "is_busy")}
        />
        <small className="small">pazymeti jei uzimtas</small>
      </div>
      <button className="buttonForm" onClick={edit}>
        Redaguoti paspirtuka
      </button>
      <button className="buttonFormDelete" onClick={hideModal}>
        Atsaukti pakeitimus
      </button>
    </div>
  );
}
