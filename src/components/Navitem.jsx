"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
function Navitem({title,param}) {
  const searchParams=useSearchParams()
  const genre=searchParams.get('genre')
  return (
    <div>
      <Link 
      className={`hover:text-amber-500 `}
      href={`/?genre=${param}`}>
      {title}
      </Link>
    </div>
  )
}

export default Navitem