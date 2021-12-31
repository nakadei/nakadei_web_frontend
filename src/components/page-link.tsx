import React from 'react'
import clsx from 'clsx'

type Props = {
  img: string;
  linkText: string;
  url: string;
}

export const PageLink: React.VFC<Props> = ({ img, linkText, url }) => {
  return (
    <div className="min-w-[300px] flex justify-center">
      <div className={clsx(
        'h-[24px] w-[24px] flex flex-col justify-center align-middle bg-no-repeat link link-hover',
        img
      )} />
      <div className="flex flex-col justify-center align-middle text-center text-blue-600 font-light ml-1">
        <a href={url} className="no-underline hover:underline" target="_blank">
          {linkText}
        </a>
      </div>
    </div>
  )
}
