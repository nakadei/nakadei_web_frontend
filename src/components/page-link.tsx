import React from 'react'

type Props = {
  text: string;
  linkText: string;
  url: string;
}

export const PageLink: React.VFC<Props> = ({ text, linkText, url }) => {
  return (
    <div className="w-[300px] flex justify-center">
      <div className="flex flex-col justify-center align-middle text-center text-slate-600 link link-hover">
        {text}
      </div>
      <div className="flex flex-col justify-center align-middle text-center text-blue-600 font-light ml-2">
        <a href={url} className="no-underline hover:underline" target="_blank">
          {linkText}
        </a>
      </div>
    </div>
  )
}
