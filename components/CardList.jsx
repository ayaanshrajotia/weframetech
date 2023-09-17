import React from "react";
import Card from "./Card";
import { BiPlusMedical } from "react-icons/bi";
import CustomCard from "./CustomCard";

const CardList = ({ title }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center px-2">
                <h1 className="text-white font-semibold pl-3">{title}</h1>
                <div className="bg-violet p-3 rounded-lg">
                    <BiPlusMedical className="text-white" />
                </div>
            </div>
            <div className="card-list flex flex-col gap-4">
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
                <CustomCard
                    title={"Database"}
                    description={
                        "Determine how many boards need to be ordered for testing and demo."
                    }
                    color={"#38E25D"}
                />
            </div>
        </div>
    );
};

export default CardList;
