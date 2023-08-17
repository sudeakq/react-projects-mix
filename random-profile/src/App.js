
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

    }
    catch (error) {
      console.log("error");
    }
  }


  return (
    <div className="App">

    </div>
  );
}

export default App;
