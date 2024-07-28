import './App.css';
import AjouterApprenant from './apprenants/AjouterApprenant';
import Classe from './apprenants/Classe';
import Navbar from './apprenants/Navbar';
import Home  from './Home';
import About from './apprenants/About';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import React, { useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/AjouterApprenant" element={<AjouterApprenant />} />
      </Routes>
    </Router>
    <Navbar />
    <br></br>

    <button onClick={() => setShowForm(true)} className='btn btn-success'>Créer apprenant</button>
                         {showForm ? <AjouterApprenant /> : <Classe />}
    </div>
  );
}
export default App;
