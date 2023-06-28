import React from 'react';
import FontAwesomeIcon from '../utils/fontawesome';

const Footer = () => {
    return (

        <div class="w-full text-white bg-gray-800 body-font">
            <div class="min-h-[500px] grid grid-cols-3">
                <div class="col-span-1 bg-[#3d3d3d] p-4">
                    <div class="flex-grow">
                        <div class="flex flex-wrap flex-grow text-center md:pl-28 mt-20">
                            <h1 className="font-semibold text-5xl tracking-tight">PcariMovie</h1>
                        </div>
                        <div class="flex flex-wrap flex-grow justify-center items-center md:pl-28 mt-10">
                            <div class="w-full text-left mb-2">
                                <h1 class="text-xs tracking-tight">Lorem ipsum dolor sit amet, consec tetue</h1>
                            </div>
                            <div class="w-full text-left mb-2">
                                <h1 class="text-xs tracking-tight">adipis cing elit, sed do eiusmod tempor</h1>
                            </div>
                            <div class="w-full text-left">
                                <h1 class="text-xs tracking-tight">incididunt ut labore et</h1>
                            </div>
                        </div>



                        <div class="flex flex-wrap flex-grow text-center md:pl-28 mt-10">
                            <h1 className="font-semibold text-xs tracking-tight">Join Newsletters</h1>
                        </div>
                        <div class="flex flex-wrap flex-grow text-center text-[10px] md:pl-28 mt-4">
                            <div class="relative">
                                <input type="search" class="w-48 px-4 py-4 text-gray-800 rounded-lg bg-[#525252] focus:outline-none pr-10"
                                    placeholder="insert your mail here" x-model="search" />
                                <button type="button" class="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-white bg-yellow-400 
                                            hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mr-1 mt-1 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-3" viewBox="0 0 448 512" fill="black">
                                        <path
                                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="col-span-2 bg-[#2e2e2e] p-4">
                    <div class="flex flex-wrap flex-grow mt-24 text-center text-xs md:pl-20 md:text-left">
                        <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 class="mb-3 text-xs font-medium tracking-widest text-white">Product</h2>
                            <nav class="mb-10 list-none">
                                <li class="mt-8">
                                    <a class="text-gray-300 ">Movies</a>
                                </li>
                                <li class="mt-8">
                                    <a class="text-gray-300 ">TV Show</a>
                                </li>
                                <li class="mt-8">
                                    <a class="text-gray-300 ">Videos</a>
                                </li>
                            </nav>
                        </div>
                        <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 class="mb-3 text-xs font-medium tracking-widest text-white ">Media Group</h2>
                            <nav class="mb-10 list-none">
                                <li class="mt-8">
                                    <a class="text-gray-300 cursor-pointer hover:text-gray-900">Nice Studio</a>
                                </li>
                                <li class="mt-8">
                                    <a class="text-gray-300 cursor-pointer hover:text-gray-900">Nice News</a>
                                </li>
                                <li class="mt-8">
                                    <a class="text-gray-300 cursor-pointer hover:text-gray-900">Nice TV</a>
                                </li>
                            </nav>
                        </div>
                        <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 class="mb-3 text-xs font-medium tracking-widest text-white ">Sitemap
                            </h2>
                            <nav class="mb-10 list-none">
                                <li class="mt-8">
                                    <a class="text-gray-300 cursor-pointer hover:text-gray-900">About</a>
                                </li>
                                <li class="mt-8">
                                    <a class="text-gray-300 cursor-pointer hover:text-gray-900">Career</a>
                                </li>
                                <li class="mt-8">
                                    <a class="text-gray-300 cursor-pointer hover:text-gray-900">Press</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                    <div class="flex items-center ml-24 mt-6">
                            <div class="text-xs  text-gray-300 mr-10"><FontAwesomeIcon icon="fa-solid fa-location-dot" className="mr-2" />8819 Ohio St. South Gate, California 90280</div>
                            <div class="text-xs  text-gray-300 mr-10"><FontAwesomeIcon icon="fa-regular fa-envelope"  className="mr-2" />ourstudio@hello.com</div>
                            <div class="text-xs  text-gray-300"><FontAwesomeIcon icon="fa-solid fa-phone"  className="mr-2" />+271 386-647-3637</div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Footer;
