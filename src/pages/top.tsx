import React from 'react'
import { Links, Profile } from '../partials'

export const Top: React.VFC = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-5/6 flex sm:flex-col md:flex-col lg:flex-row border-b">
        <Profile />
      </div>
      <div className="w-full h-1/6">
        <Links />
      </div>
    </div>
  )
}
