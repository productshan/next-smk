import React from "react";

function Announce() {
    return (
        <div className="flex bg-white w-full p-4 2xl:p-2 rounded-md">
            <div className="flex flex-1 flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-lg">Pengumuman</h1>
                    <span className="text-xs text-gray-400 hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md ease-in-out duration-150">Lihat Semua</span>
                </div>
                <div className="flex bg-purple-100 p-4 rounded-md flex-col gap-2 w-full">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="font-semibold text-lg">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-gray-400 p-2 bg-slate-50 rounded-md text-xs">2 Oktober 2024</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt perspiciatis dolores laudantium beatae saepe nisi magni est
                        vitae soluta autem facere voluptatem, quasi libero? Aspernatur reprehenderit non quo sit maxime ducimus, ipsa earum voluptatum!
                    </p>
                </div>
                <div className="flex bg-yellow-100 p-4 rounded-md flex-col gap-2 w-full">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="font-semibold text-lg">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-gray-400 p-2 bg-slate-50 rounded-md text-xs">2 Oktober 2024</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt perspiciatis dolores laudantium beatae saepe nisi magni est
                        vitae soluta autem facere voluptatem, quasi libero? Aspernatur reprehenderit non quo sit maxime ducimus, ipsa earum voluptatum!
                    </p>
                </div>
                <div className="flex bg-blue-100 p-4 rounded-md flex-col gap-2 w-full">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="font-semibold text-lg">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-gray-400 p-2 bg-slate-50 rounded-md text-xs">2 Oktober 2024</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt perspiciatis dolores laudantium beatae saepe nisi magni est
                        vitae soluta autem facere voluptatem, quasi libero? Aspernatur reprehenderit non quo sit maxime ducimus, ipsa earum voluptatum!
                    </p>
                </div>
                <div className="flex bg-green-100 p-4 rounded-md flex-col gap-2 w-full">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="font-semibold text-lg">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-gray-400 p-2 bg-slate-50 rounded-md text-xs">2 Oktober 2024</p>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt perspiciatis dolores laudantium beatae saepe nisi magni est
                        vitae soluta autem facere voluptatem, quasi libero? Aspernatur reprehenderit non quo sit maxime ducimus, ipsa earum voluptatum!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Announce;
