import { Search } from "lucide-react";
import React from "react";

const Searchbar = () => {
    return (
        <div className="bg-light-purple rounded-3xl max-w-[400px] h-[50px] flex items-center py-2 px-6 min-w-fit">
            <Search className="text-iris transform -scale-x-100" />
            <input
                type="text"
                placeholder="Search here"
                className="bg-transparent ml-4 placeholder:text-white text-sm"
            />
        </div>
    );
};

export default Searchbar;
