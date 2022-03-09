import React from 'react'
import { PageLink } from '../components'

export const Links: React.VFC = () => {
  return (
    <div className="w-full py-4 flex justify-center">
      <div className="w-full h-full flex flex-col md:flex-row justify-center align-middle items-center px-4">
        <div className="md:w-1/3 flex justify-center align-middle py-1">
          <PageLink img={'bg-icon-twitter'} linkText={'@nakadei'} url={'https://twitter.com/nakadeng'} />
        </div>
        <div className="md:w-1/3 flex justify-center align-middle py-1">
          <PageLink img={'bg-icon-github'} linkText={'nakadeng'} url={'https://github.com/nakadei'} />
        </div>
        <div className="md:w-1/3 flex justify-center align-middle py-1">
          <PageLink img={'bg-icon-blog'} linkText={'blog (工事中)'} url={'#'} />
        </div>
      </div>
    </div>
  )
}
