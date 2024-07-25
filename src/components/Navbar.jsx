import React from 'react'
import Navitem from './Navitem'

function Navbar() {
  return (
    <div className='flex dark:bg-amber-600 bg-gray-100 p-4 lg:text-lg justify-center gap-4'>
        <Navitem title="Trending" 
        param="fetchTrending"/>
         <Navitem title="Top Rated" 
        param="fetch Top Rated"/>
    </div>
  )
}

export default Navbar