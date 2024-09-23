import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import DashBoardMenu from "./components/DashBoardMenu";

import Home from "./pages/Home.tsx";
import './App.css';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar - Full width */}
            <Navbar />

            {/* Main content area: Sidebar + Home Page */}
            <div className="flex flex-1">
                {/* Sidebar Menu */}
                <DashBoardMenu />

                {/* Main Content */}
                <div className="flex-1 p-4 bg-gray-100">
                    <Home />
                </div>
            </div>

            {/* Footer - Full width */}
            <Footer />
        </div>
    );
}

export default App;
