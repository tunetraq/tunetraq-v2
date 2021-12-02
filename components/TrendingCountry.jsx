import Link from 'next/link'
import { useState } from 'react';

import TopSponsoredContent from "./TopSponsoredContent"


function TrendingCountry() {
        const [activeTab, setActiveTab] = useState("KENYA");
        const toggleTab = (label) => {
            setActiveTab(label);
        };

    return (
        <div className="mt-4 bg-white mx-2 shadow-md rounded-b-md ">
        <div>
            <div className="flex items-center justify-items-start text-xs overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-800 ">
                <div
                    onClick={() => toggleTab("KENYA")}
                 className={ activeTab === "KENYA" ? "flex px-2 my-3 py-1 ml-1 mx-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1 ml-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"} >
                        <span>Kenya</span>
                     </div>
                <div
                    onClick={() => toggleTab("US")}
                 className={ activeTab === "US" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"} >
                        <span>U.S</span>
                     </div>
                <div
                    onClick={() => toggleTab("UK") }
                className={ activeTab === "UK" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                        <span> U.K</span>
                    </div>
                <div
                    onClick={() => toggleTab("JAMAICA") }
                className={ activeTab === "JAMAICA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                        <span>Jamaica</span>
                    </div>
                <div
                    onClick={() => toggleTab("NIGERIA") }
                className={ activeTab === "NIGERIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                        <span>Nigeria</span>
                    </div>
                <div
                    onClick={() => toggleTab("SOUTH_AFRICA") }
                className={ activeTab === "SOUTH_AFRICA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                        <span>South.Africa</span>
                    </div>
                <div
                    onClick={() => toggleTab("TANZANIA") }
                className={ activeTab === "TANZANIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                      <span >Tanzania</span>
                    </div>
                <div
                    onClick={() => toggleTab("TANZANIA") }
                className={ activeTab === "TANZANIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                      <span >Tanzania</span>
                    </div>
                <div
                    onClick={() => toggleTab("TANZANIA") }
                className={ activeTab === "TANZANIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                      <span >Tanzania</span>
                    </div>
                <div
                    onClick={() => toggleTab("TANZANIA") }
                className={ activeTab === "TANZANIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                      <span >Tanzania</span>
                    </div>
                <div
                    onClick={() => toggleTab("TANZANIA") }
                className={ activeTab === "TANZANIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                      <span >Tanzania</span>
                    </div>
                <div
                    onClick={() => toggleTab("TANZANIA") }
                className={ activeTab === "TANZANIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                      <span >Tanzania</span>
                    </div>
                <div
                    onClick={() => toggleTab("TANZANIA") }
                className={ activeTab === "TANZANIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                      <span >Tanzania</span>
                    </div>
                <div
                    onClick={() => toggleTab("TANZANIA") }
                className={ activeTab === "TANZANIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                      <span >Tanzania</span>
                    </div>
                <div
                    onClick={() => toggleTab("TANZANIA") }
                className={ activeTab === "TANZANIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                      <span >Tanzania</span>
                    </div>
                <div
                    onClick={() => toggleTab("TANZANIA") }
                className={ activeTab === "TANZANIA" ? "flex px-2 my-3 mx-1 py-1 sm:px-4 cursor-pointer text-white bg-blue-500 font-bold rounded-full transition-all duration-150 ease-in" : "flex font-bold px-2 my-3 py-1  sm:px-4 cursor-pointer text-gray-400 bg-gray-100 mx-1 rounded-full hover:bg-gray-300"}>
                      <span >Tanzania</span>
                    </div>
            </div>
        <div className="border-t text-center">
            {/* Kenya */}
            <div className={ activeTab === "KENYA" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-1 transition-all duration-150 ease-in text-xs font-semibold text-gray-800 " : "hidden"}>
                You are watching trending music videos in Kenya
            </div>
            {/* US */}
            <div className={activeTab === "US" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-1 transition-all duration-150 ease-in text-xs font-semibold text-gray-800" : "hidden"}>
               You are watching trending music videos in the U.S
            </div>
            {/* UK */}
            <div className={activeTab === "UK" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-1 transition-all duration-150 ease-in text-xs font-semibold text-gray-800" : "hidden"}>
               You are watching trending music videos in the U.K
            </div>
            {/* Jamaica */}
            <div className={activeTab === "JAMAICA" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-1 transition-all duration-150 ease-in text-xs font-semibold text-gray-800" : "hidden"}>
                You are watching trending music videos in Jamaica
            </div>
            {/* Nigeria */}
            <div className={activeTab === "NIGERIA" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-1 transition-all duration-150 ease-in text-xs font-semibold text-gray-800" : "hidden"}>
               You are watching trending music videos in Nigeria
            </div>
            {/* Tanzania */}
            <div className={activeTab === "TANZANIA" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-1 transition-all duration-150 ease-in text-xs font-semibold text-gray-800" : "hidden"}>
               You are watching trending music videos in Tanzania
            </div>
            {/* South Africa */}
            <div className={activeTab === "SOUTH_AFRICA" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-1 transition-all duration-150 ease-in text-xs font-semibold text-gray-800" : "hidden"}>
               You are watching trending music videos in South Africa
            </div>
        </div>
        </div>
        </div>
    )
}

export default TrendingCountry
