import React from "react";
const HeroSection = dynamic(() => import("../components/HeroSection"));
import { BiPlusMedical } from "react-icons/bi";
import Card from "./Card";
import CustomCard from "./CustomCard";
import dynamic from "next/dynamic";

const MainSection = () => {
    return (
        <main className="main relative h-full lg:h-[calc(100vh-80px)] w-full lg:w-[calc(100%-250px)] lg:left-[250px] p-8 lg:overflow-y-scroll">
            {/* Hero Section */}
            <HeroSection />
            {/* Cards */}
            <div className="card-list w-full flex flex-col lg:flex-row gap-6 lg:overflow-x-scroll">
                {/* col 1 */}
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center px-2">
                        <h1 className="text-white font-semibold pl-3 text-lg">
                            To-do List (24)
                        </h1>
                        <div className="bg-violet p-3 rounded-lg">
                            <BiPlusMedical className="text-white" />
                        </div>
                    </div>
                    <div className="card-list flex flex-row overflow-x-scroll lg:flex-col gap-4">
                        <Card
                            title={"Important"}
                            description={
                                "Create sign up sheet for holiday student/parent conferences."
                            }
                            color={"#FFAB2D"}
                            width={"30%"}
                        />

                        <Card
                            title={"Instructor Meeting"}
                            description={
                                "Plan holiday demonstration program. Create outline."
                            }
                            color={"#e328af"}
                            width={"40%"}
                        />
                        <Card
                            title={"Database"}
                            description={
                                "Determine how many boards need to be ordered for testing and demo."
                            }
                            color={"#38E25D"}
                            width={"20%"}
                        />
                    </div>
                </div>
                {/* col 2 */}
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center px-2">
                        <h1 className="text-white font-semibold pl-3 text-lg">
                            In Progess (2)
                        </h1>
                        <div className="bg-light-purple p-3 rounded-lg">
                            <BiPlusMedical className="text-violet" />
                        </div>
                    </div>
                    <div className="card-list flex flex-row lg:flex-col max-lg:overflow-x-scroll gap-4 max-md:h-[220px] max-lg:h-[280px]">
                        <Card
                            title={"Video"}
                            description={
                                "Create sparring tutorial video for the weekly class."
                            }
                            color={"#5ecfff"}
                            background={"bg-[#5ecfff"}
                            width={"90%"}
                        />
                        <CustomCard
                            title={"Bugs Fixing"}
                            description={
                                "Payment gateway needs reauthorization."
                            }
                            color={"#FF4A55"}
                            width={"100%"}
                        />
                    </div>
                </div>
                {/* col 3 */}
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center px-2">
                        <h1 className="text-white font-semibold pl-3 text-lg">
                            Done (3)
                        </h1>
                        <div className="bg-light-purple p-3 rounded-lg">
                            <BiPlusMedical className="text-violet" />
                        </div>
                    </div>
                    <div className="card-list flex flex-row lg:flex-col overflow-x-scroll gap-4">
                        <Card
                            title={"Bugs Fixing"}
                            description={
                                "Action Button needed for Google Maps visits."
                            }
                            color={"#FF4A55"}
                            width={"100%"}
                        />
                        <Card
                            title={"Database"}
                            description={"Update new insturctor photos."}
                            color={"#38E25D"}
                            width={"100%"}
                        />
                        <Card
                            title={"Instructor Meeting"}
                            description={
                                "Review/correct yllow belt techniques."
                            }
                            color={"#e328af"}
                            width={"100%"}
                        />
                    </div>
                </div>
                {/* col 4 */}
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center px-2">
                        <h1 className="text-white font-semibold pl-3 text-lg">
                            Revised (0)
                        </h1>
                        <div className="bg-light-purple p-3 rounded-lg">
                            <BiPlusMedical className="text-violet" />
                        </div>
                    </div>
                    <div className="card-list flex flex-row lg:flex-col overflow-x-scroll gap-4">
                        <div className="bg-light-purple rounded-xl w-[300px] p-4 flex flex-col gap-4">
                            <div className="bg-black rounded-xl border-dotted border-iris border-2 p-2 py-3 flex items-center  justify-center text-iris">
                                <span className="text-sm">Move card here</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* col 5 */}
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center px-2">
                        <h1 className="text-white font-semibold pl-3 text-lg">
                            Completed
                        </h1>
                        <div className="bg-light-purple p-3 rounded-lg">
                            <BiPlusMedical className="text-violet" />
                        </div>
                    </div>
                    <div className="card-list flex flex-row lg:flex-col overflow-x-scroll gap-4">
                        <Card
                            title={"Important"}
                            description={
                                "Create sign up sheet for holiday student/parent conferences."
                            }
                            color={"#FFAB2D"}
                        />
                        <Card
                            title={"Instructpr Meeting"}
                            description={
                                "Plan holiday demonstration program. Create outline."
                            }
                            color={"#e328af"}
                        />
                        <Card
                            title={"Database"}
                            description={
                                "Determine how many boards need to be ordered for testing and demo."
                            }
                            color={"#38E25D"}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainSection;
