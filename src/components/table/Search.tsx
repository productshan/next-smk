import React from "react";
interface SearchButton {
    type: "sort" | "add" | "filter";
    onClick?: () => void;
}

const SearchButton = (props: SearchButton) => {
    let imgSrc = ".././filter.png";
    switch (props.type) {
        case "sort":
            imgSrc = ".././sort.png";
            break;
        case "add":
            imgSrc = ".././plus.png";
        default:
            imgSrc;
            break;
    }

    return (
        <div className="rounded-full flex justify-items-center w-fit h-fit p-2 bg-yellow-400 ease-in-out duration-300 hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-md">
            <img src={imgSrc} alt="" className="w-4 h-4" />
        </div>
    );
};

function TableSearch() {
    return (
        <div className="flex gap-4 items-center h-fit w-full lg:w-fit">
            <div className="flex p-2 border-2 rounded-full w-fit h-fit border-gray-200">
                <img src=".././search.png" className="w-6 h-6 mr-2" alt="search" />
                <input type="text" placeholder="Masukan pencarian" className="bg-transparent text-xs focus:outline-none" />
            </div>
            <div className="flex flex-row w-fit gap-1 flex-wrap">
                <SearchButton type="sort" />
                <SearchButton type="add" />
                <SearchButton type="filter" />
            </div>
        </div>
    );
}

export default TableSearch;
