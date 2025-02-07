import React from 'react'
const Header = () => {
    return (
        <header className="shadow-sm p-2.5 flex justify-between items-center bg-gray-100">
            <div className='flex items-center gap-1'>
                <img src="/react_icon.png" alt="react_icon" className='w-10' />
                <h2 className='text-xl font-bold'>Learn<span className='text-blue-600'>Hub</span></h2>
            </div>
            <ul className='flex items-center gap-8'>
                <li className='text-lg font-medium'>Home</li>
                <li className='text-lg font-medium'>FrontEnd Videos</li>
                <li className='text-lg font-medium'>BackEnd Videos</li>
                <li className='text-lg font-medium'>About Us</li>
                <li className='hover:bg-green-100 rounded-full p-1 cursor-pointer transition-all duration-300'>
                    <img  src="/profile.png" alt='user_icon'
                        className='w-7 transition-transform duration-300 ease-in-out hover:scale-110'
                    />
                </li>

            </ul>
        </header>
    )
}

export default Header