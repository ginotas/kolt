
import { Scooter } from "./Scooter";

export function Scooters({scooters, deleteScooter, showModal}) {

  

    return (
       <div className="scooters">
           {scooters.map(scooter => <Scooter key={scooter.id} scooter={scooter} deleteScooter={deleteScooter} showModal={showModal}></Scooter>)}
       </div>
    )
  }
  