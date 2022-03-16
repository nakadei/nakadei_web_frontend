import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import React, { useState, useCallback, useEffect } from 'react'
import { Top, Carrier } from './pages'
import { Header } from './components'

const App: React.VFC = () => {
  const [activePage, setActivePage] = useState('/')
  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname)
  }, [])

  const handleHeaderRowClick = useCallback((page) => {
    setActivePage(page)
  }, [setActivePage])

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full max-w-[640px] min-h-full md:min-h-[500px] flex flex-col bg-white rounded-xl border-4 border-white md:mt-10 md:mb-4">
        <div className="w-full">
          <Header active={activePage} onClick={handleHeaderRowClick} />
        </div>
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/carrier" element={<Carrier />} />
            <Route path="*" element={<Top />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
