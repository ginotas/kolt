export function Scooter({ scooter, deleteScooter, showModal }) {

  const dateFormat = (date) => {
    date = date.split("-");
    let day = [];
    day.push(date[2][0]);
    day.push(date[2][1]);
    day = day.join("");
    let newDate = [];
    newDate.push(date[0]);
    newDate.push(date[1]);
    newDate.push(day);
    date.push(day);
    return newDate.join(":");
  };

  return (
    <div className="container">
      <h3>Paspirtuko registracijos kodas: {scooter.registration_code}</h3>
      <h4>Paspirtuko paskutine naudojimo data: {dateFormat(scooter.last_use_time)}</h4>
      <h5>Paspirtuko rida: {scooter.total_ride_kilometres} km</h5>
      <h5>Ar paspirtukas uzimtas: {scooter.is_busy}</h5>

      <button className="buttonForm" onClick={() => showModal(scooter.id)}>
        Redaguoti
      </button>
      <button
        className="buttonFormDelete"
        onClick={() => deleteScooter(scooter.id)}
      >
        Trinti
      </button>
    </div>
  );
}

// id, registration_code, is_busy, last_use_time, total_ride_kilometres
