import React from "react";

function Navbar() {
    return (
        <div className="w-full flex justify-between h-fit p-4">
            <div className="flex p-2 border-2 rounded-full max-w-[40%]">
                <img src="/search.png" className="h-6 w-6" alt="" />
                <input type="text" className="ml-2 bg-transparent text-sm focus:outline-none" placeholder="Masukan pencarian..." />
            </div>
            <div className="flex items-center">
                <div className="flex mr-4 items-end flex-col-reverse">
                    <p className="text-xs text-slate-500">Role is this</p>
                    <p className="font-semibold ">User</p>
                </div>
                <img src="/avatar.png" className="rounded-full h-12 w-12" alt="" />
            </div>
        </div>
    );
}

export default Navbar;
