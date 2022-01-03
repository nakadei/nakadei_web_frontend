import React, { useEffect } from 'react'
import { Links, AboutMe } from '../partials'

export const Top: React.VFC = () => {

  useEffect(() => {
    document.title = 'nakadei.jp'
  }, [])

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
