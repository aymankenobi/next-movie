import React from 'react';
import FontAwesomeIcon from '../utils/fontawesome';


const Main = () => {
    return (
        <div class="min-h-[1400px] bg-gradient-to-r from-[#000000] via-90% via-[#323232] via-90% to-[#323232] via-10% text-white text-left px-20">
            <div class="max-w-[1070px] mx-auto">
                <div class="flex items-center justify-between mb-4">
                    <div class="text-3xl font-medium mt-40">New Releases</div>
                    <div class="text-m font-medium text-yellow-400 mt-40">View More</div>
                </div>
            </div>
            <div className="flex  items-center text-white text-left w-4/5 mx-auto">
                <div className="w-2/3">
                    <div class="flex flex-col p-8 bg-gradient-to-t from-[#000000] via-90% via-[#323232] via-90% to-[#323232] via-10% shadow-xl translate-x-4 translate-y-4 min-h-[500px] mr-4 ">
                        <div><span class="bg-[#facc15] text-black text-sm font-small mr-2 px-2.5 py-0.5 rounded-xl">Fantasy</span></div>
                        <div class="flex-grow"></div>
                        <div class="flex items-center">
                            <div class="text-xs font-light text-gray-300 mr-10"><FontAwesomeIcon icon="fa-regular fa-clock" className="mr-2" />1hr 24mins</div>
                            <div class="text-xs font-light text-gray-300"><FontAwesomeIcon icon="fa-regular fa-eye" className="mr-2" />21.3k views</div>
                        </div>
                        <div class="my-4 ">
                            <span class="font-semibold text-4xl">The Ring's Lord</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div class="flex flex-col p-8 bg-gradient-to-t from-[#000000] via-90% via-[#323232] via-90% to-[#323232] via-10% shadow-xl translate-x-4 translate-y-4 min-h-[500px] mr-4 ">
                        <div><span class="bg-[#facc15] text-black text-sm font-small mr-2 px-2.5 py-0.5 rounded-xl">Fantasy</span></div>
                        <div class="flex-grow"></div>
                        <div class="flex items-center">
                            <div class="text-xs font-light text-gray-300 mr-10"><FontAwesomeIcon icon="fa-regular fa-clock" className="mr-2" />1hr 24mins</div>
                            <div class="text-xs font-light text-gray-300"><FontAwesomeIcon icon="fa-regular fa-eye" className="mr-2" />21.3k views</div>
                        </div>
                        <div class="my-4 ">
                            <span class="font-semibold text-4xl">Interspace</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center text-white text-left mt-4 w-4/5 mx-auto">
                <div className="w-1/3">
                    <div class="flex flex-col p-8 bg-gradient-to-t from-[#000000] via-90% via-[#323232] via-90% to-[#323232] via-10% shadow-xl translate-x-4 translate-y-4 min-h-[500px] mr-4 ">
                        <div><span class="bg-[#facc15] text-black text-sm font-small mr-2 px-2.5 py-0.5 rounded-xl">Fantasy</span></div>
                        <div class="flex-grow"></div>
                        <div class="flex items-center">
                            <div class="text-xs font-light text-gray-300 mr-10"><FontAwesomeIcon icon="fa-regular fa-clock" className="mr-2" />1hr 24mins</div>
                            <div class="text-xs font-light text-gray-300"><FontAwesomeIcon icon="fa-regular fa-eye" className="mr-2" />21.3k views</div>
                        </div>
                        <div class="my-4 ">
                            <span class="font-semibold text-4xl">Interspace</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div class="flex flex-col p-8 bg-gradient-to-t from-[#000000] via-90% via-[#323232] via-90% to-[#323232] via-10% shadow-xl translate-x-4 translate-y-4 min-h-[500px] mr-4 ">
                        <div><span class="bg-[#facc15] text-black text-sm font-small mr-2 px-2.5 py-0.5 rounded-xl">Fantasy</span></div>
                        <div class="flex-grow"></div>
                        <div class="flex items-center">
                            <div class="text-xs font-light text-gray-300 mr-10"><FontAwesomeIcon icon="fa-regular fa-clock" className="mr-2" />1hr 24mins</div>
                            <div class="text-xs font-light text-gray-300"><FontAwesomeIcon icon="fa-regular fa-eye" className="mr-2" />21.3k views</div>
                        </div>
                        <div class="my-4 ">
                            <span class="font-semibold text-4xl">Her & Him</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div class="flex flex-col p-8 bg-gradient-to-t from-[#000000] via-90% via-[#323232] via-90% to-[#323232] via-10% shadow-xl translate-x-4 translate-y-4 min-h-[500px] mr-4 ">
                        <div><span class="bg-[#facc15] text-black text-sm font-small mr-2 px-2.5 py-0.5 rounded-xl">Fantasy</span></div>
                        <div class="flex-grow"></div>
                        <div class="flex items-center">
                            <div class="text-xs font-light text-gray-300 mr-10"><FontAwesomeIcon icon="fa-regular fa-clock" className="mr-2" />1hr 24mins</div>
                            <div class="text-xs font-light text-gray-300"><FontAwesomeIcon icon="fa-regular fa-eye" className="mr-2" />21.3k views</div>
                        </div>
                        <div class="my-4 ">
                            <span class="font-semibold text-4xl">Lo Lo Land</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;
