'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Header() {
  const [showProfile, setShowProfile] = useState(false)
  return (
    <div className='flex items-center justify-between h-[100px] bg-slate-200 shadow-sm p-4 w-full'>
      <h5 className='hover:bg-slate-300 transition-all ease-out scale-105'>brand Name</h5>
      <div className='relative'>
        <div onClick={()=>setShowProfile(!showProfile)} className='rounded-full py-2 px-2 bg-white text-xs font-bold cursor-pointer'>
          NM
          <Image src='' />
        </div>
        {showProfile && (
          <div className='box-border border rounded-md p-2 bg-white absolute top-[40px] w-[150px] right-1'>
            <button className='block text-xs rounded-md hover:bg-blue-300 outline-none p-2'>Users</button>
            <button className='block text-xs rounded-md hover:bg-blue-300 outline-none p-2'>Change Password</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header