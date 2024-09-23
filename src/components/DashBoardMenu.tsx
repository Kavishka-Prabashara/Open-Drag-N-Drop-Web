import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaAngleDown, FaAngleUp } from 'react-icons/fa';

const DashBoardMenu = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = (menuName) => {
        setOpenSubMenu(openSubMenu === menuName ? null : menuName);
    };

    return (
        <div className={`flex h-screen ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 transition-width duration-300`}>
            {/* Sidebar Content */}
            <div className="flex flex-col w-full">
                {/* Toggle button */}
                <div className="flex justify-between items-center p-4 text-white bg-gray-900 cursor-pointer" onClick={toggleSidebar}>
                    <h1 className={`font-bold text-lg transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'} duration-300`}>
                        Dashboard
                    </h1>
                    <FaAngleUp className={`${isOpen ? '' : 'rotate-180'} transition-transform duration-300`} />
                </div>

                {/* Menu items */}
                <ul className="flex flex-col p-4 space-y-2 text-white">
                    {/* Home */}
                    <li className="group">
                        <div
                            onClick={() => toggleSubMenu('home')}
                            className="flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer"
                        >
                            <FaHome className="w-6 h-6" />
                            <span className={`ml-3 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Home</span>
                            {openSubMenu === 'home' ? <FaAngleUp className="ml-auto" /> : <FaAngleDown className="ml-auto" />}
                        </div>
                        {openSubMenu === 'home' && isOpen && (
                            <ul className="pl-12 pt-1 space-y-1">
                                <li className="hover:text-gray-400 cursor-pointer">Overview</li>
                                <li className="hover:text-gray-400 cursor-pointer">Updates</li>
                            </ul>
                        )}
                    </li>

                    {/* Profile */}
                    <li className="group">
                        <div
                            onClick={() => toggleSubMenu('profile')}
                            className="flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer"
                        >
                            <FaUser className="w-6 h-6" />
                            <span className={`ml-3 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Profile</span>
                            {openSubMenu === 'profile' ? <FaAngleUp className="ml-auto" /> : <FaAngleDown className="ml-auto" />}
                        </div>
                        {openSubMenu === 'profile' && isOpen && (
                            <ul className="pl-12 pt-1 space-y-1">
                                <li className="hover:text-gray-400 cursor-pointer">View Profile</li>
                                <li className="hover:text-gray-400 cursor-pointer">Edit Profile</li>
                            </ul>
                        )}
                    </li>

                    {/* Settings */}
                    <li className="group">
                        <div
                            onClick={() => toggleSubMenu('settings')}
                            className="flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer"
                        >
                            <FaCog className="w-6 h-6" />
                            <span className={`ml-3 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Settings</span>
                            {openSubMenu === 'settings' ? <FaAngleUp className="ml-auto" /> : <FaAngleDown className="ml-auto" />}
                        </div>
                        {openSubMenu === 'settings' && isOpen && (
                            <ul className="pl-12 pt-1 space-y-1">
                                <li className="hover:text-gray-400 cursor-pointer">Account</li>
                                <li className="hover:text-gray-400 cursor-pointer">Privacy</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoardMenu;
