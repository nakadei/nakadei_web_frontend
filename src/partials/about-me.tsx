import React from 'react'

export const AboutMe: React.VFC = () => {
  return (
    <div className="w-full h-full flex justify-center align-middle items-center">
      {/* icon */}
      <div className="focus:outline-none h-32 w-32 mb-4 rounded-full overflow-hidden shadow bg-icon" />
      {/* profile */}
      <div className="flex flex-col justify-center align-middle items-center ml-10">
        <div className="text-2xl font-semibold text-slate-600">
          nakadei.jp
        </div>
        <div className="text-md font-normal text-slate-600">
          Daisuke Nakata
        </div>
        <div className="text-xl font-normal text-slate-600 mt-4">
          <span>engineer / gamer</span>
        </div>
      </div>

    </div>
  )
}
