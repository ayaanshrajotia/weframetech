"use client";

import React, { useState } from "react";
import Link from "next/link";

// icons
import {
    Building,
    Calendar,
    ChevronDown,
    ChevronRight,
    Contact,
    LayoutDashboard,
    Mail,
    Menu,
    MessageCircle,
    MoveRight,
    Presentation,
    Settings,
    Store,
} from "lucide-react";
import { PiScrollFill } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { LuGauge } from "react-icons/lu";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <section
            className={`sidebar ${
                showSidebar
                    ? "max-lg:translate-x-0"
                    : "max-lg:-translate-x-full"
            } bg-purple fixed top-0 left-0 w-[250px] h-screen z-[1000] transition-all shadow-lg shadow-black`}
        >
            {/* Heading */}
            <div className="relative w-full flex items-center px-4 lg:0 justify-center h-[80px] gap-8 ">
                <Link
                    href="/"
                    className="text-white text-xl flex gap-8 items-center"
                >
                    weframetech
                </Link>
                {showSidebar ? (
                    <AiOutlineClose
                        className="text-iris text-2xl z-[1000] "
                        onClick={() => setShowSidebar((prev) => !prev)}
                    />
                ) : (
                    <Menu
                        className="text-iris max-lg:absolute max-lg:-right-10 z-[1000] bg-purple"
                        onClick={() => setShowSidebar((prev) => !prev)}
                    />
                )}
            </div>
            {/* Main Menus */}
            <div className="mt-4 h-full">
                <h2 className="uppercase text-white text-sm mb-4 pl-8 tracking-wider">
                    Main Menu
                </h2>
                <ul className="text-iris w-full">
                    <li className="h-[50px] w-full flex items-center px-8 max-sm:text-sm">
                        <Link
                            href="#"
                            className="flex w-full gap-4 text-dark-gray"
                        >
                            <LuGauge className="text-2xl" />
                            <span className="max-sm:text-sm">Dashboard</span>
                        </Link>
                    </li>
                    <li className="h-[50px] w-full flex items-center px-8">
                        <Link
                            href="#"
                            className="w-full flex justify-between items-center text-dark-gray"
                        >
                            <div className="flex gap-4">
                                <Mail /> <span>Email</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-skyblue text-xs rounded-full p-1 px-1.5 text-white">
                                    17
                                </span>

                                <ChevronDown className=" text-iris" />
                            </div>
                        </Link>
                    </li>
                    <li className="h-[50px] w-full flex items-center px-8">
                        <Link href="#" className="flex w-full gap-4">
                            <MessageCircle /> <span>Chat</span>
                        </Link>
                    </li>
                    <li className="relative h-[50px] w-full flex items-center px-8 before:content-[''] before:absolute before:bg-violet before:w-1 before:h-full before:right-0 before:rounded-xl">
                        <Link
                            href="#"
                            className="flex w-full justify-between text-violet"
                        >
                            <div className="flex gap-4">
                                <LayoutDashboard />
                                <span>Kanban</span>
                            </div>
                            <ChevronRight className=" text-iris" />
                        </Link>
                    </li>
                    <li className="h-[50px] w-full flex items-center px-8">
                        <Link
                            href="#"
                            className="flex w-full justify-between gap-4"
                        >
                            <div className="flex gap-4">
                                <Contact />
                                <span>Contact</span>
                            </div>
                            <span className="uppercase bg-pink text-white text-xs flex items-center justify-center px-3 rounded-xl">
                                NEW
                            </span>
                        </Link>
                    </li>
                    <li className="h-[50px] w-full flex items-center px-8">
                        <Link href="#" className="flex w-full gap-4">
                            <Calendar />
                            <span>Calender</span>
                        </Link>
                    </li>
                    <li className="h-[50px] w-full flex items-center px-8">
                        <Link
                            href="#"
                            className="flex w-full justify-between gap-4"
                        >
                            <div className="flex gap-4">
                                <Presentation />
                                <span>Course</span>
                            </div>
                            <ChevronRight className=" text-iris" />
                        </Link>
                    </li>
                    <li className="h-[50px] w-full flex items-center px-8">
                        <Link href="#" className="flex w-full gap-4">
                            <Store className="text-dark-gray" />{" "}
                            <span>Shop</span>
                        </Link>
                    </li>
                    <li className="h-[50px] w-full flex items-center px-8">
                        <Link
                            href="#"
                            className="flex w-full justify-between gap-4"
                        >
                            <div className="flex gap-4">
                                <PiScrollFill className="fill-iris text-xl" />{" "}
                                <span>Invoices</span>
                            </div>
                            <ChevronRight className=" text-iris" />
                        </Link>
                    </li>
                    <li className="h-[50px] w-full flex items-center px-8">
                        <Link href="#" className="flex w-full gap-4">
                            <Settings /> <span>Settings</span>
                        </Link>
                    </li>
                </ul>
                {/* Banner */}
                <div className="banner relative text-white mt-6 flex flex-col gap-2 rounded-3xl p-4 lg:p-4 lg:py-6 mx-8 overflow-hidden">
                    <Building />
                    <span className="font-bold">
                        Increase your <br />
                        work with kanban
                    </span>
                    <MoveRight />
                    <div className="absolute rounded-full w-28 h-28 bg-white/20 -bottom-4 -right-12"></div>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
