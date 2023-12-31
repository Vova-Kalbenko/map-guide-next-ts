import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='flex justify-between p-3 px-5 shadow-sm'>
        <div className='flex gap-3 items-center'>
            <Image src="/logo.png" alt='logo' width={50} height={50}/>
            <h2 className='text-[25px] font-semibold text-red-500 tracking-widest'>Guide Map</h2>
        </div>
        <ul className='flex items-center gap-8'>
            <li className='text-[18px] hover:text-red-500 cursor-pointer'>home</li>
            <li className='text-[18px] hover:text-red-500 cursor-pointer'>about us</li>
            <li className='text-[18px] hover:text-red-500 cursor-pointer'>contact us</li>
        </ul>
    </div> 
  )
}

export default Header