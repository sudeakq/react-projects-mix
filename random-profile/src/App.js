
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [profilName, setProfilName] = useState("");
  const [profilCell, setProfilCell] = useState("");
  const [profilImage, setProfilImage] = useState("");
  const [profilEmail, setProfilEmail] = useState("");


  const ProfileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api");
      console.log(res);
      setProfilCell(res.data.results[0].cell);
      setProfilEmail(res.data.results[0].email);
      setProfilImage(res.data.results[0].picture.large);
      setProfilName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);



    }
    catch (error) {
      console.log("error");
    }
  }


  return (
    <div className="App">

      <div className='profileContainer'>
        <img src={profilImage} />
        <h1>{profilName}</h1>
        <p>{profilEmail}</p>
        <p>{profilCell}</p>




        <button onClick={ProfileData}>Click for new profile</button>
      </div>






    </div>
  );
}

export default App;
