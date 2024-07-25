import React from 'react'
import {AiFillHome} from 'react-icons/ai' 
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Menu from './Menu'
function Header() {
  return (
    <div>
    <div className="flex gap-4">
        <Menu title="home" address="/" Icon={AiFillHome}/>
        <Menu title="about" address="/about" Icon={BsFillInfoCircleFill}/>
    </div>
      <div className="absolute top-0 right-0 p-4">
       <span className='text-xl hidden sm:inline bg-amber-200 rounded '>FILMZ</span>
      </div>
      </div>
  )
}

export default Header