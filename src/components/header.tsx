import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

type Props = {
  active: string;
  onClick: (page: string) => void;
}

export const Header: React.VFC<Props> = ({ active, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <Link to='/'>
            <div className={clsx(
              "inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent",
              active === '/' ? "text-blue-600 border-blue-600 active" : "text-slate-600 border-transparent hover:border-gray-300",
            )} onClick={() => onClick('/')}>
              Top
              </div>
          </Link>
        </li>
        <li className="mr-2">
          <Link to='carrier'>
            <div className={clsx(
              "inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent",
              active === '/carrier' ? "text-blue-600 border-blue-600 active" : "text-slate-600 border-transparent hover:border-gray-300",
            )} onClick={() => onClick('/carrier')}>
              Carrier
              </div>
          </Link>
        </li>
        <li className="mr-2">
          <a href="https://gist.github.com/nakadei/e0b417f15271c020dc92bc69de1a7552">
            <div className={clsx(
              "inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent",
              active === '/profile' ? "text-blue-600 border-blue-600 active" : "text-slate-600 border-transparent hover:border-gray-300",
            )}>
              Profile
              </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
