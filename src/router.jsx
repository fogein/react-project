import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import { BeerCard } from './Components/BeerCard/BeerCard';
import { BeerInfo } from './Components/BeerInfo/BeerInfo';
import { Header } from './Components/Header/Header';

export function MainRouter() {

  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<BeerCard />} />
        <Route path="/:id" element={<BeerInfo />} />
      </Routes>
    </HashRouter>
  );
}