import './App.css'
import React from 'react'
import { Top } from './pages/top'

const App: React.VFC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[640px] min-h-[500px] bg-white rounded-xl mt-10">
        <Top />
      </div>
    </div>
  )
}

export default App
