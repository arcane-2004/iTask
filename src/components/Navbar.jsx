import React from 'react'
import logo from '../assets/images/Screenshot 2025-02-08 225930.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-sky-700 p-2 text-white'>
            <div className='logo'>
                <span> <img className='h-10 w-auto ' src={logo} alt="" /></span>
            </div>
            <ul className="flex mx-1.5 gap-9 items-center">
                <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all '>Your Tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar
