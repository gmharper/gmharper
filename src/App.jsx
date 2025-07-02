import { useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css'

// COMPONENTS
import TopNavBar from './components/TopNavBar'
import BotNavBar from './components/BotNavBar';

import { Home, BrewReview, FatPigeon, XPointer, Chess, Go, ThirteenStep, FantasyFantasy, OpenFL } from './components/pages/index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-zinc-700'>
    <TopNavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brewReview" element={<BrewReview />} />
      <Route path="/fatPigeon" element={<FatPigeon />} />
      <Route path="/xPointer" element={<XPointer />} />
      <Route path="/chess" element={<Chess />} />
      <Route path="/go" element={<Go />} />
      <Route path="/13Step" element={<ThirteenStep />} />
      <Route path="/fantasyfantasy" element={<FantasyFantasy />} />
      <Route path="/openFL" element={<OpenFL />} />
    </Routes>
    <BotNavBar />
    </div>
  )
}

export default App
