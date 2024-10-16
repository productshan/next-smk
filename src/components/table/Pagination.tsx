import React from "react";

function Pagination() {
    return (
        <div className="flex w-fit mx-auto text-gray-500 items-center gap-2">
            <button
                disabled
                className="py-2 px-4 text-sm font-semibold hover:bg-slate-300 bg-slate-200 hover:text-black rounded-md disabled:cursor-not-allowed disabled:opacity-50"
            >
                {"< Prev"}
            </button>
            <div className="flex gap-1">
                <div className="hover:font-semibold hover:cursor-pointer py-1 px-2 hover:bg-slate-200 rounded-md">1</div>
                <div className="hover:font-semibold hover:cursor-pointer py-1 px-2 hover:bg-slate-200 rounded-md">2</div>
                <div className="hover:font-semibold hover:cursor-pointer py-1 px-2 hover:bg-slate-200 rounded-md">3</div>
                <div className="hover:font-semibold hover:cursor-pointer py-1 px-2 hover:bg-slate-200 rounded-md">...</div>
                <div className="hover:font-semibold hover:cursor-pointer py-1 px-2 hover:bg-slate-200 rounded-md">10</div>
            </div>
            <button
                disabled
                className="py-2 px-4 font-semibold text-sm hover:bg-slate-300 bg-slate-200 hover:text-black rounded-md disabled:cursor-not-allowed disabled:opacity-50"
            >
                {"Next >"}
            </button>
        </div>
    );
}

export default Pagination;
