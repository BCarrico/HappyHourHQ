import React from 'react';
import { faCompass, faCreditCard, faArrowPointer, faClock, faShop } from '@fortawesome/free-solid-svg-icons' 
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; 

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Not sure where to go for happy hour? Let us help you find one!</h2>
            <p className="text-xl text-gray-600"></p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full">
              <FontAwesomeIcon className="w-14 h-14 pb-2 text-sky-600" icon={faCompass}/>
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="1">
                  <svg  viewBox="0 0 24 24" stroke="white" className="w-6 h-6">   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
                  </g>
                </g>
              </svg> */}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Discover New Places</h4>
              <p className="text-gray-600 text-center">Whether you're looking for a new spot to grab a drink after work or a place to meet up with friends, Happy Hour HQ can help you explore your options.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full">
            <FontAwesomeIcon className="w-14 h-14 pb-2 text-sky-600" icon={faCreditCard}/>
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg> */}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Save Money</h4>
              <p className="text-gray-600 text-center">With the ability to sort by location and days open, you can easily find happy hour specials that fit your schedule and budget.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full">
            <FontAwesomeIcon className="w-14 h-14 pb-2 text-sky-600" icon={faArrowPointer}/>
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                    <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                  </g>
                </g>
              </svg> */}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Easy to Use</h4>
              <p className="text-gray-600 text-center">With a clean, intuitive design, you can quickly search for options and filter results based on your preferences to find the happy hour specials you're looking for.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full">
            <FontAwesomeIcon className="w-14 h-14 pb-2 text-sky-600" icon={faClock}/>
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                    <path className="stroke-current text-white" d="M16 12.571h8" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                    <circle className="stroke-current text-blue-300" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                  </g>
                </g>
              </svg>               */}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Plan Ahead</h4>
              <p className="text-gray-600 text-center">Whether you're looking for a spot to meet up with friends or planning a date night. You can search for happy hour specials in advance ensuring that you don't miss out on any great deals.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full">
            <FontAwesomeIcon className="w-14 h-14 pb-2 text-sky-600" icon={faShop}/>
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
                    <path className="stroke-current text-blue-300" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
                  </g>
                </g>
              </svg> */}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Stay Local</h4>
              <p className="text-gray-600 text-center">You can explore options in your neighborhood or venture out to new areas, all while supporting small businesses in your community.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl min-h-full">
            <FontAwesomeIcon className="w-14 h-14 pb-2 text-sky-600" icon={faStar}/>
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg> */}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Add Your Own Reviews</h4>
              <p className="text-gray-600 text-center">Happy Hour HQ allows users to add their own reviews of happy hour spots, enabling them to share their experiences with others and help fellow users find great places to unwind.</p>
            </div>

          </div>

        </div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8">
            <h1 className="h2">Find Your Next Happy Hour Spot <Link to="/feed" className="text-sky-600 hover:text-sky-900">Here</Link></h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
