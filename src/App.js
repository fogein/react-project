import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { BearCard } from './Components/BearCard';
import { BearInfo } from './Components/BearInfo';

const App = () => {

  const [bear, setBear] = useState([])

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => setBear(response.data))
  }, []);

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<BearCard bear={bear} />}/>
        <Route  path="/:id" element={<BearInfo />}/>
      </Routes>
    </Router>
  );
}

export default App;
