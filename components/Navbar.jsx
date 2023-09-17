"use client";

import React, { useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { RiArrowDownSFill } from "react-icons/ri";
import { CopyCheck, Package2, Search } from "lucide-react";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    return (
        <nav className="bg-purple relative w-full z-[999]">
            <div className="relative ml-[250px] text-white h-[80px] flex max-xl:items-center max-xl:justify-end">
                <div className="hidden xl:flex items-center h-full px-6 justify-between w-full">
                    {/* Search Bar */}
                    <Searchbar />
                    {/* Other Menu */}
                    <span className="text-violet underline uppercase tracking-wider font-semibold mx-2">
                        OTHER MENUS
                    </span>
                    {/* Menus */}
                    <ul className="flex gap-6 text-iris items-center mx-2">
                        <li className="relative">
                            <span className="absolute -top-4 -right-3 bg-skyblue text-[10px] rounded-full w-6 h-6 flex items-center justify-center text-dark-purple">
                                12
                            </span>
                            <BsFillBellFill className="text-xl" />
                        </li>
                        <li className="relative">
                            <span className="absolute -top-4 -right-3 bg-skyblue text-[10px] rounded-full w-6 h-6 flex items-center justify-center text-dark-purple">
                                5
                            </span>
                            <HiMiniPresentationChartBar className="text-dark-gray text-xl" />
                        </li>
                        <li className="relative">
                            <span className="absolute -top-4 -right-3 bg-skyblue text-[10px] rounded-full w-6 h-6 flex items-center justify-center text-dark-purple">
                                17
                            </span>
                            <CopyCheck className="text-xl" />
                        </li>
                        <li className="relative">
                            <span className="absolute -top-4 -right-3 bg-pink border-2 border-purple rounded-full w-6 h-6 flex items-center justify-center text-dark-purple">
                                !
                            </span>
                            <Package2 className="text-xl" />
                        </li>
                    </ul>
                    {/* Language */}
                    <div className="bg-light-purple gap-2 rounded-3xl h-[50px] flex items-center py-2 px-6 mx-2">
                        <div className="relative w-6 h-6">
                            <Image
                                src={"/images/flag.png"}
                                fill
                                className="absolute w-full h-full"
                                alt="flag"
                            />
                        </div>
                        <span className="uppercase text-sm">English</span>
                        <RiArrowDownSFill className="text-violet text-2xl" />
                    </div>
                    {/* User */}
                    <div className="flex h-[50px] items-center gap-4 mx-2">
                        <div className="bg-gray rounded-xl h-[50px] w-[50px]"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold">
                                Instructor Day
                            </span>
                            <span className="text-sm text-iris">
                                Super Admin
                            </span>
                        </div>
                        <RiArrowDownSFill className="text-violet text-2xl" />
                    </div>
                </div>
                {isOpen ? (
                    <div className="hidden max-xl:block text-white">
                        <AiOutlineClose
                            className="text-xl mr-4"
                            onClick={() => setIsOpen((prev) => !prev)}
                        />
                    </div>
                ) : (
                    <div className="hidden max-xl:flex max-xl:gap-4 max-xl:items-center">
                        <div className=" text-white">
                            <GiHamburgerMenu
                                className="text-xl mr-1"
                                onClick={() => setIsOpen((prev) => !prev)}
                            />
                        </div>
                        <div className="relative flex h-[50px] items-center gap-4 mx-2">
                            <div className="bg-gray rounded-xl h-[50px] w-[50px]"></div>
                            <RiArrowDownSFill
                                className="text-violet text-2xl"
                                onClick={() => setUserOpen((prev) => !prev)}
                            />
                            {userOpen && (
                                <div className="absolute bg-purple top-16 p-4 rounded-md z-[1000] w-max right-0 shadow-md shadow-black">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm font-semibold">
                                            Instructor Day
                                        </p>
                                        <p className="text-sm text-iris">
                                            Super Admin
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {isOpen && (
                <div className="relative xl:hidden w-full">
                    <div className="text-white flex flex-col gap-8 h-full w-full px-6 py-4 pb-6 justify-between">
                        {/* Search Bar */}
                        <div className="bg-light-purple rounded-3xl max-w-[400px] h-[50px] flex items-center py-2 px-6 min-w-fit">
                            <Search className="text-iris transform -scale-x-100" />
                            <input
                                type="text"
                                placeholder="Search here"
                                className="bg-transparent ml-4 placeholder:text-white text-sm"
                            />
                        </div>
                        {/* Other Menu */}
                        <span className="text-violet underline uppercase tracking-wider font-semibold mx-2">
                            OTHER MENUS
                        </span>
                        {/* Menus */}
                        <ul className="flex gap-6 text-iris items-center mx-2">
                            <li className="relative">
                                <span className="absolute -top-4 -right-3 bg-skyblue text-[10px] rounded-full w-6 h-6 flex items-center justify-center text-dark-purple">
                                    12
                                </span>
                                <BsFillBellFill className="text-xl" />
                            </li>
                            <li className="relative">
                                <span className="absolute -top-4 -right-3 bg-skyblue text-[10px] rounded-full w-6 h-6 flex items-center justify-center text-dark-purple">
                                    5
                                </span>
                                <HiMiniPresentationChartBar className="text-dark-gray text-xl" />
                            </li>
                            <li className="relative">
                                <span className="absolute -top-4 -right-3 bg-skyblue text-[10px] rounded-full w-6 h-6 flex items-center justify-center text-dark-purple">
                                    17
                                </span>
                                <CopyCheck className="text-xl" />
                            </li>
                            <li className="relative">
                                <span className="absolute -top-4 -right-3 bg-pink border-2 border-purple rounded-full w-6 h-6 flex items-center justify-center text-dark-purple">
                                    !
                                </span>
                                <Package2 className="text-xl" />
                            </li>
                        </ul>
                        {/* Language */}
                        <div className="bg-light-purple gap-2 rounded-3xl h-[50px] flex items-center py-2 px-6 mx-2 w-fit">
                            <div className="relative w-6 h-6">
                                <Image
                                    src={"/images/flag.png"}
                                    fill
                                    className="absolute w-full h-full"
                                    alt="flag"
                                />
                            </div>
                            <span className="uppercase text-sm">English</span>
                            <RiArrowDownSFill className="text-violet text-2xl" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
