import React from 'react';

const Header = () => {
    return (
        <div className="min-h-[700px] bg-gradient-to-r from-[#323232] via-10% via-[#000000] via-90% to-[#000000] via-90% flex justify-center items-center text-white text-left px-20">
            <div className="w-2/5">
                {/* Random SVG icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {/* Replace this with your own SVG icon */}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <div className="w-3/5">
                <h1 className="text-7xl font-semibold mb-6">Find your movies</h1>
                <h1 className="text-7xl font-semibold mb-8">here!</h1>
                <p className="text-gray-300 mb-2">
                    Explore our gallery full of exciting films from all around the globe,
                </p>
                <p className="text-gray-300">
                    only for your entertainment. No hidden charges or disturbing ads.
                </p>
            </div>
        </div>
    );
};

export default Header;
