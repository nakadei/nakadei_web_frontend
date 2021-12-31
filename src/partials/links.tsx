import React from 'react'
import { PageLink } from '../components'

export const Links: React.VFC = () => {
  return (
    <div className="w-full py-4 flex justify-center">
      <div className="w-5/6 h-full flex justify-center align-middle items-center">
        <div className="w-1/3 flex justify-center align-middle">
          <PageLink img={'bg-icon-twitter'} linkText={'@nakadei'} url={'https://twitter.com/nakadeng'} />
        </div>
        <div className="w-1/3 flex justify-center align-middle">
          <PageLink img={'bg-icon-github'}linkText={'nakadeng'} url={'https://github.com/nakadeng'} />
        </div>
        <div className="w-1/3 flex justify-center align-middle">
          <PageLink img={'bg-icon-blog'} linkText={'nakadei blog'} url={'https://nakadeng.github.io/nakadeng/'} />
        </div>
      </div>
    </div>
  )
}