import React from 'react'
import { Links, AboutMe } from '../partials'

export const Top: React.VFC = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full py-[130px] border-b">
        <AboutMe />
      </div>
      <div className="w-full">
        <Links />
      </div>
    </div>
  )
}
