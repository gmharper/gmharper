import { createContext, useEffect, useLayoutEffect, useCallback, useContext, useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css'

// COMPONENTS
import TopNavBar from './components/TopNavBar'
import BotNavBar from './components/BotNavBar';

import { Home, BrewReview, FantasyFantasy, OpenFL } from './components/pages/index';

import bg from "./assets/img/bg.png"

export const AppContext = createContext(null)

function App() {
  const [page, setPage] = useState('home')

  const [playAnimations, setPlayAnimations] = useState(true)

  const getWindowSize = useCallback(() => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }

      window.addEventListener('resize', updateSize);
      updateSize();

      return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
  } )

  useEffect(() => {
    setPlayAnimations(JSON.parse(window.sessionStorage.getItem("playAnimations")))
  }, [])

  useEffect(() => {
    window.sessionStorage.setItem("playAnimations", playAnimations)
  }, [playAnimations])

  return (
    <div className='h-full'>
      <AppContext.Provider value={{ playAnimations, setPlayAnimations, getWindowSize }} >
        <img src={bg} className='absolute top-0 brightness-70 contrast-120 saturate-60' />
        <TopNavBar isHomepage={page==='home'}/>
          <Routes>
            <Route path={"/" || "/home"} element={<Home />} />
            <Route path="/brewReview" element={<BrewReview />} />
            <Route path="/fantasyfantasy" element={<FantasyFantasy />} />
            <Route path="/openFL" element={<OpenFL />} />
          </Routes>
      </AppContext.Provider >
    </div>
  )
}

export default App
