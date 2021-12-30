import React from 'react'
import { PageLink } from '../components'

export const Links: React.VFC = () => {
  return (
    <div className="w-full h-full flex justify-center align-middle">
      <div className="w-1/3 flex justify-center align-middle">
        <PageLink text={'Twitter:'} linkText={'@nakadei'} url={'https://twitter.com/nakadeng'} />
      </div>
      <div className="w-1/3 flex justify-center align-middle">
        <PageLink text={'GitHub:'} linkText={'nakadeng'} url={'https://github.com/nakadeng'} />
      </div>
      <div className="w-1/3 flex justify-center align-middle">
        <PageLink text={'Blog:'} linkText={'nakadei blog'} url={'https://nakadeng.github.io/nakadeng/'} />
      </div>
    </div>
  )
}
