import React, { useState } from 'react';

const Home = () => {
    // State to manage dropped items
    const [droppedItems, setDroppedItems] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle Drag Over event
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    // Handle Drop event
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        setDroppedItems((prev) => [...prev, data]);
    };

    // Handle Modal Open
    const handleDropButtonClick = () => {
        setIsModalOpen(true);
    };

    // Handle Modal Close
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="h-screen bg-gray-100">
            <h1 className="text-center text-xl font-bold p-4">Drag and Drop Area</h1>

            {/* Drag Area */}
            <div
                className="flex justify-center items-center border-4 border-dashed border-gray-400 rounded-lg p-6 bg-white mx-4 h-64"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {droppedItems.length > 0 ? (
                    <ul>
                        {droppedItems.map((item, index) => (
                            <li key={index} className="text-gray-800 p-2">
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">Drag items here</p>
                )}
            </div>

            {/* Drop Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={handleDropButtonClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Generate
                </button>
            </div>

            {/* Modal for Text Area */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h2 className="text-lg font-bold mb-4">Message Area</h2>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            rows={6}
                            placeholder="Enter your message here"
                        ></textarea>

                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleCloseModal}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
