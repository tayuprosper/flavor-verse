import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewFullRecipeList = () => {
    const [popularIndex, setPopularIndex] = useState(0);
    const [recentIndex, setRecentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const popularCards = [
        { id: '1', img: 'salad.svg', text: 'Fresh Salad - A mix of greens and vegetables.' },
        { id: '2', img: 'ndole.jpg', text: 'Spaghetti - Classic Italian pasta with tomato sauce.' },
        { id: '3', img: '/nyama.jpg', text: 'Tacos - Spicy meat with fresh toppings.' },
        { id: '4', img: '/plantain.jpg', text: 'Sushi - Japanese rice rolls with fish and veggies.' },
        { id: '5', img: '/chick.jpg', text: 'Chocolate Cake - Rich and moist dessert.' },
    ];

    const recentCards = [
        { id: '6', img: '/chick.jpg', text: 'New and exciting recipes just added!' },
        { id: '7', img: 'salad.svg', text: 'Try our latest salad recipes.' },
        { id: '8', img: '/nyama.jpg', text: 'Delicious desserts to sweeten your day.' },
        { id: '9', img: 'ndole.jpg', text: 'Quick meals for busy weeknights.' },
        { id: '10', img: 'salad.svg', text: 'Healthy snacks to keep you energized.' },
    ];

    const handlePopularNext = () => {
        if (popularIndex < popularCards.length - 1) {
            setPopularIndex(popularIndex + 1);
        }
    };

    const handlePopularPrev = () => {
        if (popularIndex > 0) {
            setPopularIndex(popularIndex - 1);
        }
    };

    const handleRecentNext = () => {
        if (recentIndex < recentCards.length - 1) {
            setRecentIndex(recentIndex + 1);
        }
    };

    const handleRecentPrev = () => {
        if (recentIndex > 0) {
            setRecentIndex(recentIndex - 1);
        }
    };

    return (
        <div className="my-5 mx-40">
            {/* Search and Header Section */}
            <div className="flex md:flex-row flex-col justify-between">
                <h1 className="text-2xl font-bold px-5">Discover</h1>
                <div className="relative inline-block py-2 mx-5 md:w-auto">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border bg-transparent text-gray-500 border-gray-500 hover:bg-gray-100 transition duration-300 ease-in-out pl-10 pr-4 h-10 outline-none w-full rounded-md"
                    />
                </div>
            </div>

            {/* Most Popular Section */}
            <div className="my-10">
                <div className="flex items-center justify-between ">
                    <h3 className="font-semibold text-xl">Most Popular</h3>
                </div>
                <div className="relative overflow-hidden my-5 mx-[5%]">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${popularIndex * 300}px)` }}
                    >
                        {popularCards.map((card, index) => (
                            <Link to={`/recipes/${card.id}`} key={index} className="flex-shrink-0 w-[300px] p-2">
                                <div className="flex flex-col p-5 rounded-md h-[300px] items-center bg-white shadow-md text-black">
                                    <img src={card.img} alt={card.text} className="w-full h-32 object-cover" />
                                    <p className="p-2">{card.text}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* Navigation Buttons */}
                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-md p-2" onClick={handlePopularPrev} disabled={popularIndex === 0}>◀</button>
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-md p-2" onClick={handlePopularNext} disabled={popularIndex === popularCards.length - 1}>▶</button>
                </div>
            </div>

            {/* Most Recent Section */}
            <div className="my-5">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-xl">Most Recent</h3>
                </div>
                <div className="relative mx-[5%] my-5 overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${recentIndex * 300}px)` }}
                    >
                        {recentCards.map((card, index) => (
                            <Link to={`/recipes/${card.id}`} key={index} className="flex-shrink-0 w-[300px] p-2">
                                <div className="flex flex-col rounded-md p-5 h-[250px] bg-white shadow-md text-black">
                                    <img src={card.img} alt={card.text} className="w-full h-32 object-cover" />
                                    <p className="p-2">{card.text}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* Navigation Buttons */}
                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-md p-2" onClick={handleRecentPrev} disabled={recentIndex === 0}>◀</button>
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-md p-2" onClick={handleRecentNext} disabled={recentIndex === recentCards.length - 1}>▶</button>
                </div>
            </div>
        </div>
    );
};

export default ViewFullRecipeList;