import { createContext, useEffect, useLayoutEffect, useCallback, useContext, useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css'

// COMPONENTS
import TopNavBar from './components/TopNavBar'
import BotNavBar from './components/BotNavBar';

import { Home, BrewReview, FantasyFantasy, OpenFL } from './components/pages/index';

export const AppContext = createContext(null)

function App() {
  const [page, setPage] = useState('home')

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

  return (
    <div className='h-full'>
      <AppContext.Provider value={{ getWindowSize }} >
        <TopNavBar isHomepage={page==='home'}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brewReview" element={<BrewReview />} />
            {/* <Route path="/messengerPigeon" element={<FatPigeon />} />
            <Route path="/xPointer" element={<XPointer />} />
            <Route path="/chess" element={<Chess />} />
            <Route path="/go" element={<Go />} /> */}
            <Route path="/fantasyfantasy" element={<FantasyFantasy />} />
            <Route path="/openFL" element={<OpenFL />} />
          </Routes>
      </AppContext.Provider >
    </div>
  )
}

export default App
