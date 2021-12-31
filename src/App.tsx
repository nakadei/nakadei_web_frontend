import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import React, { useState, useCallback, useEffect } from 'react'
import { Top, Profile, Carrier } from './pages'
import { Header } from './components'

const App: React.VFC = () => {
  const [activePage, setActivePage] = useState('Top')
  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname)
  },[])

  const handleHeaderRowClick = useCallback((page) => {
    setActivePage(page)
  }, [setActivePage])

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[640px] sm:w-[480px] md:w-[640px] lg:w-[640px] xl:w-[640px] min-h-[500px] flex flex-col bg-white rounded-xl border-4 border-white mt-10">
        <div className="w-full">
          <Header active={activePage} onClick={handleHeaderRowClick} />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/carrier" element={<Carrier />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
