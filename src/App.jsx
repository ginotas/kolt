import "./App.css";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import { Scooters } from "./Scooters";
import { NewScooter } from "./NewScooter";
import axios from "axios";
import { Modal } from "./Modal";

function App() {
  const [scooters, setScooters] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [modalId, setModalId] = useState(0);
  const [scooterCount, setScooterCount] = useState(0);
  const [scooterKm, setScooterKm] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3003/scooters").then((response) => {
      setScooters(response.data);
    });
  }, [lastUpdate]);

  useEffect(() => {
    axios.get("http://localhost:3003/scooters/count").then((response) => {
      console.log(response.data);
      setScooterCount(response.data[0].scooterCount);
    });
  }, [lastUpdate]);

  useEffect(() => {
    axios.get("http://localhost:3003/scooters/countKm").then((response) => {
      console.log(response.data);
      setScooterKm(response.data[0].scooterKm);
    });
  }, [lastUpdate]);

  const addPaspirtukas = (scooter) => {
    axios.post("http://localhost:3003/scooters", scooter).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const deleteScooter = (id) => {
    axios.delete("http://localhost:3003/scooters/" + id).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const editPaspirtukas = (id, scooter) => {
    axios.put("http://localhost:3003/scooters/" + id, scooter).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const getScooter = (id) => {
    if (id === 0) {
      return [];
    }
    for (let i = 0; i < scooters.length; i++) {
      if (scooters[i].id === id) {
        return { ...scooters[i] };
      }
    }
  };

  const showModal = (id) => {
    setModalId(id);
  };

  const hideModal = () => {
    setModalId(0);
  };

  const sort = (by) => {
    const scootersCopy = scooters.slice();
    if ("total_ride_kilometres" === by) {
      scootersCopy.sort(
        (a, b) => a.total_ride_kilometres - b.total_ride_kilometres
      );
    }
    setScooters(scootersCopy);
  };

  return (
    <>
      <div className="App">
        <Header
          sort={sort}
          scooterCount={scooterCount}
          scooterKm={scooterKm}
        ></Header>
      </div>

      <NewScooter addPaspirtukas={addPaspirtukas}></NewScooter>

      <Scooters
        scooters={scooters}
        deleteScooter={deleteScooter}
        showModal={showModal}
      ></Scooters>

      <Modal
        id={modalId}
        scooter={getScooter(modalId)}
        editPaspirtukas={editPaspirtukas}
        hideModal={hideModal}
      ></Modal>
    </>
  );
}

export default App;
