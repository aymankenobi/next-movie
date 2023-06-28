import { useState } from 'react';
import FontAwesomeIcon from '../utils/fontawesome';

const Navbar = () => {
  const [navbarOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const handleLinkClick = (page) => {
    setActivePage(page);
  };

  return (
    <header className="bg-gradient-to-r from-[#323232] via-10% via-[#000000] via-90% to-[#000000] via-90% ...">
      <nav className="flex justify-start items-center py-6 px-8">
        <div className="flex-shrink-0 text-white ml-20 mr-10 mb-6">
          <span className="font-semibold text-3xl tracking-tight">PcariMovie</span>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:w-auto ${navbarOpen ? 'block' : 'hidden'
            }`}
        >
          <div className="text-sm lg:flex-grow mt-4">
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-16 ${activePage === 'home' ? 'border-b-4 border-[#facc15] font-bold transform pb-2 relative -top-2' : ''
                }`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-16 ${activePage === 'movies' ? 'border-b-4 border-[#facc15] font-bold transform pb-2 relative -top-2' : ''
                }`}
              onClick={() => handleLinkClick('movies')}
            >
              Movies
            </a>
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-16 ${activePage === 'tvshow' ? 'border-b-4 border-[#facc15] font-bold transform pb-2 relative -top-2' : ''
                }`}
              onClick={() => handleLinkClick('tvshow')}
            >
              TV Show
            </a>
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-16 ${activePage === 'video' ? 'border-b-4 border-[#facc15] font-bold transform pb-2 relative -top-2' : ''
                }`}
              onClick={() => handleLinkClick('video')}
            >
              Video
            </a>
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-16 ${activePage === 'faq' ? 'border-b-4 border-[#facc15] font-bold transform pb-2 relative -top-2' : ''
                }`}
              onClick={() => handleLinkClick('faq')}
            >
              FAQ
            </a>
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-16 ${activePage === 'pricing' ? 'border-b-4 border-[#facc15] font-bold transform pb-2 relative -top-2' : ''
                }`}
              onClick={() => handleLinkClick('pricing')}
            >
              Pricing
            </a>
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-60 ${activePage === 'contact' ? 'border-b-4 border-[#facc15] font-bold transform pb-2 relative -top-2' : ''
                }`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact Us
            </a>
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 mb-10${activePage === 'contact' ? 'border-b-4 border-[#facc15] font-bold transform pb-2 relative -top-2' : ''
                }`}
              onClick={() => handleLinkClick('contact')}
            >
              <div className="flex items-center">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="mr-10" />
                <FontAwesomeIcon icon="fa-solid fa-circle" className="mr-4 text-gray-800 h-10 w-10" />
                <h1 class="font-semibold">John Glich</h1>
              </div>
            </a>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
