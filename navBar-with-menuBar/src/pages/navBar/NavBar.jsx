import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import Button from '../../components/Button';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='container '>
            <div className='flex items-center justify-between py-3 bg-white'>
                <div className='z-50 flex items-center justify-between w-full md:w-auto'>
                    <h1 className='text-2xl font-[poppins] font-semibold cursor-pointer'>Shahriar Rahman </h1>
                    <div className='text-xl md:hidden'>
                        {
                            toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} /> : <AiOutlineMenu onClick={() => setToggle(!toggle)} />
                        }
                    </div>
                </div>

                <ul className='md:flex hidden items-center gap-6 text-xl font-[poppins] font-medium'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <NavLink />
                </ul>
                <div className='hidden md:block'>
                    <Button />
                </div>

                {/* Mobile responsive menu  */}

                <ul className={`md:hidden bg-white fixed w-full top-[9%] overflow-y-auto bottom-0 py-10 pl-4 duration-500 ${toggle ? "left-0" : "left-[-100%]"}`}>
                    <li>
                        <Link className='inline-block px-3 pb-4 text-xl' to="/">Home</Link>
                    </li>
                    <NavLink />
                    <div className='py-5'>
                        <Button />
                    </div>
                </ul>

            </div>
        </nav>
    );
};

export default NavBar;