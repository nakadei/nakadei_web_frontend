import React from 'react'
import { PageLink } from '../components'

export const Links: React.VFC = () => {
  return (
    <div className="w-full py-4 flex justify-center">
      <div className="w-full h-full flex flex-col md:flex-row justify-center align-middle items-center md:px-4">
        <div className="w-full md:w-1/3 flex justify-center align-middle py-3 md:py-1">
          <PageLink img={'bg-icon-twitter'} linkText={'twitter'} url={'https://twitter.com/nakadeng'} />
        </div>
        <div className="w-full md:w-1/3 flex justify-center align-middle py-3 md:py-1 bg-sky-50 md:bg-inherit">
          <PageLink img={'bg-icon-github'} linkText={'github'} url={'https://github.com/nakadei'} />
        </div>
        <div className="w-full md:w-1/3 flex justify-center align-middle py-3 md:py-1">
          <PageLink img={'bg-icon-blog'} linkText={'blog'} url={'https://nakadei.notion.site/nakadei/tech-blog-ebd8b145fa0343d0a6a29dd88653eef0'} />
        </div>
      </div>
    </div>
  )
}
