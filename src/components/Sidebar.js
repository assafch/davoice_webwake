import React from 'react';

const Sidebar = () => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="w-72 xl:w-80 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10">
        {/* Logo */}
        <div className="hidden lg:flex">
          <a aria-label="Home" href="/">
            {/* Replace with your logo */}
            <span className="text-xl font-bold text-emerald-400">Your Logo</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="lg:mt-10">
          <ul role="list">
            {/* Section */}
            <li className="relative mt-6">
              <h2 className="text-xs font-semibold text-zinc-900 dark:text-white">Guides</h2>
              <div className="relative mt-3 pl-2">
                <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                <ul role="list" className="border-l border-transparent">
                  <li className="relative">
                    <a
                      href="#"
                      className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    >
                      Introduction
                    </a>
                  </li>
                  {/* Add more links as needed */}
                </ul>
              </div>
            </li>
            {/* Add more sections as needed */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
