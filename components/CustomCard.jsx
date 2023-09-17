import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { SlOptions } from "react-icons/sl";

const CustomCard = ({ title, description, color }) => {
    return (
        <div className="custom-card bg-light-purple rounded-xl min-w-[320px] w-[320px] p-4 md:p-6 flex flex-col gap-4 rotate-6 translate-x-8 translate-y-8 h-fit lg:h-[220px]">
            <div className="flex justify-between">
                <div
                    className={`flex items-center gap-2`}
                    style={{ color: color }}
                >
                    <GoDotFill className="text-sm md:text-base" />
                    <h1>{title}</h1>
                </div>
                <SlOptions className="text-gray" />
            </div>
            <p className="text-white text-base md:text-lg">{description}</p>
            <div
                className="loading-bar relative w-full h-2 bg-dark-purple rounded-md before:content-[''] before:absolute before:bg-pink before:w-full before:h-full before:rounded-md"
                style={{
                    "::before": {
                        backgroundColor: color, // Set the background color here
                    },
                }}
            ></div>
            <div className="flex justify-between">
                <div className="flex">
                    <div className="bg-gray rounded-full w-6 h-6 md:w-8 border-2 border-light-purple z-50"></div>
                    <div className="bg-gray rounded-full w-6 h-6 md:w-8 border-2 border-light-purple -ml-2 z-40"></div>
                    <div className="bg-gray rounded-full w-6 h-6 md:w-8 border-2 border-light-purple -ml-2 z-30"></div>
                    <div className="bg-gray rounded-full w-6 h-6 md:w-8 border-2 border-light-purple -ml-2"></div>
                </div>
                <div className="text-gray flex items-center gap-2">
                    <AiOutlineClockCircle className="text-lg" />
                    <span className="text-sm">Due in 4 days</span>
                </div>
            </div>
        </div>
    );
};

export default CustomCard;
