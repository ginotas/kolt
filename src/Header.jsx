export function Header({ sort, scooterCount, scooterKm, sortDate }) {
  return (
    <div>
      <h1>KOLT PASPIRTUKAI</h1>
      <h2>Paspirtuku kiekis: {scooterCount}</h2>
      <h2>Visu paspirtuku nuvaziuoti km: {scooterKm} km</h2>
      <button
        className="buttonHeader"
        onClick={() => sort("total_ride_kilometres")}
      >
        Rusiuoti pagal km
      </button>
      <button className="buttonHeader" onClick={() => sortDate("last_use_time")}>
        Rusiuoti pagal naudojimo data
      </button>
    </div>
  );
}
