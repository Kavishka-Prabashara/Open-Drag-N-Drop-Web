import { FaQuestionCircle } from 'react-icons/fa'; // For the "?" icon
import logo from '../assets/react.svg'; // Assuming you have a logo file (replace with your logo's path)

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-800 p-4 text-white shadow-md">
            {/* Left side: Logo */}
            <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-8 w-8" />
                <span className="text-lg font-semibold">MyApp</span>
            </div>

            {/* Right side: Help icon and Buy me a coffee button */}
            <div className="flex items-center space-x-4">
                {/* Help icon */}
                <button className="flex items-center hover:text-yellow-300">
                    <FaQuestionCircle className="w-6 h-6" />
                </button>

                {/* Buy me a coffee button */}
                <a
                    href="https://www.buymeacoffee.com/yourlink" // Replace with your actual BuyMeACoffee link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-300 transition-colors"
                >
                    Buy me a coffee
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
