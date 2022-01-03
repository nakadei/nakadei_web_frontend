import React from 'react'
import { Links, AboutMe } from '../partials'

export const Profile: React.VFC = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-white p-10 shadow-sm">
        <h3 className="text-lg font-medium text-gray-800">Several Windows stacked on each other</h3>
        <p className="text-sm font-light text-gray-600 my-3">
        The accordion is a graphical control element comprising a vertically stacked list of items such as labels or thumbnails
        </p>

        <div className="h-1 w-full mx-auto border-b my-5"></div>

        {/*<!-- What is term -->*/}
        <div className="transition hover:bg-indigo-50">
        {/*<!-- header -->*/}
        <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i className="fas fa-plus"></i>
            <h3>What is term?</h3>
        </div>
        {/*<!-- Content -->*/}
        <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>

        {/*<!-- When to use Accordion Components -->*/}
        <div className="transition hover:bg-indigo-50">
        {/*<!-- header -->*/}
        <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i className="fas fa-plus"></i>
            <h3>When to use Accordion Components?</h3>
        </div>
        {/*<!-- Content -->*/}
        <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>

        {/*<!-- Accordion Wrapper -->*/}
        <div className="transition hover:bg-indigo-50">
        {/*<!-- header -->*/}
        <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i className="fas fa-plus"></i>
            <h3>How can it be defined?</h3>
        </div>
        {/*<!-- Content -->*/}
        <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>

        {/*<!-- Accordion Wrapper -->*/}
        <div className="transition hover:bg-indigo-50">
        {/*<!-- header -->*/}
        <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i className="fas fa-plus"></i>
            <h3>Chamber reached do he nothing be?</h3>
        </div>
        {/*<!-- Content -->*/}
        <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>
      </div>
    </div>
  )
}
