import React from 'react'
import { Link, NavLink } from 'react-router-dom';
// import { useHistory } from "react-router-dom";


const Card = ({ gymName = "Gold Star Gym", location = "Delhi", rating = "4.95", type="gym"}) => {
  
  const review = Math.round((rating * 100) % 179)

  return (
    <div className="bg-black flex max-w-7xl mx-auto flex-col items-center rounded-xl border-[2px] border-black md:flex-row mb-[100px]">
      <div className="h-full w-full md:h-[325px] md:w-[40%] p-[10px]">
        <img
          src= {`https://source.unsplash.com/random/600x400?${type}`}
          alt="Laptop"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <div className='h-full w-full md:h-[325px] md:w-[60%]'>
        <div className="p-4">
          <h1 className="text-white inline-flex items-center font-semibold text-[3rem]">
            {gymName}
          </h1>
          <p className="mt-2 text-[1.2rem] text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat 
            voluptatum sed laboriosam earum error id sint fuga molestiae rem rerum?
          </p>
          <div className="mt-4 flex flex-row items-center invert">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="mr-2 inline-block rounded-full px-3 py-1 text-[1.1rem] font-semibold text-gray-900">
              {location}
            </span>
          </div>


          <div className="flex flex-row items-center mt-[6px] ">
            <svg className="w-4 h-4 text-yellow-300 ml-[3px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-white ">{rating}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full " />
            <a href="#" className="text-sm font-medium text-white underline hover:no-underline ">{review} reviews</a>
          </div>

          <Link to='/Gym/SingleGymDesc'>   
            <button 
              className='mt-[4px] rounded-xl flex justify-center items-center w-[97%] p-3 bg-slate-500 cursor-pointer text-2xl text-white font-bold hover:bg-slate-400'
            >
                Explore More
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Card;