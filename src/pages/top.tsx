import React, { useEffect } from 'react'
import { Links, AboutMe } from '../partials'

export const Top: React.VFC = () => {

  useEffect(() => {
    document.title = 'nakadei.jp'
  }, [])

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full py-[130px]">
        <AboutMe />
      </div>
      <div className="w-full border-t">
        <Links />
      </div>
    </div>
  )
}
