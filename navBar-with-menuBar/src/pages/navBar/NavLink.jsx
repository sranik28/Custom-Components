import { useState } from 'react';
import React from 'react';
import { links } from './Mylinks';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavLink = () => {

    const [headingToggle, setHeadingToggle] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {links.map((link) => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h3 className='flex items-center justify-between py-4 pr-5 md:pr-0 group'
                            onClick={() => {
                                headingToggle === link.name ? setHeadingToggle("") : setHeadingToggle(link.name)
                            }}
                        >
                            {link.name}
                            <span className='inline text-xl md:hidden'>
                                {headingToggle === link.name ? <BsChevronUp /> : <BsChevronDown />}

                            </span>
                            <span className="hidden text-xl md:mt-1 md:ml-2 md:block group-hover:rotate-180 group-hover:-mt-2">
                                <BsChevronDown />
                            </span>
                        </h3>
                        {link.submenu && (
                            <div>
                                <div className="absolute hidden top-10 group-hover:md:block hover:md:block">
                                    <div className="py-3">
                                        <div
                                            className="absolute w-4 h-4 mt-1 rotate-45 bg-white left-3"
                                        ></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-10 p-5 bg-white">
                                        {link.subLinks.map((mySubLinks) => (
                                            <div>
                                                <h1 className="text-lg font-semibold">
                                                    {mySubLinks.Head}
                                                </h1>
                                                {mySubLinks.subLink.map((slink) => (
                                                    <li className="text-sm text-gray-600 my-2.5">
                                                        <Link
                                                            to={slink.link}
                                                            className="hover:text-primary"
                                                        >
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile responsive menu */}
                    <div
                        className={`${headingToggle === link.name ? "md:hidden" : "hidden"} `} >
                        {/* subLinks */}
                        {link.subLinks.map((slinks) => (
                            <div>
                                <div>
                                    <h1
                                        onClick={() =>
                                            subHeading !== slinks.Head
                                                ? setSubHeading(slinks.Head)
                                                : setSubHeading("")
                                        }
                                        className="flex items-center justify-between py-4 pr-5 font-semibold pl-7 md:pr-0"
                                    >
                                        {slinks.Head}

                                        <span className="inline text-xl md:mt-1 md:ml-2">
                                            <ion-icon
                                                name={`${subHeading === slinks.Head
                                                    ? "chevron-up"
                                                    : "chevron-down"
                                                    }`}
                                            ></ion-icon>
                                        </span>
                                    </h1>
                                    <div
                                        className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                            }`}
                                    >
                                        {slinks.subLink.map((slink) => (
                                            <li className="py-3 pl-14">
                                                <Link to={slink.link}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            )
            )}
        </>
    );
};

export default NavLink;


