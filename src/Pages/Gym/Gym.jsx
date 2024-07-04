import React, { useState,useEffect } from 'react'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';


const Gym = () => {
    
    const [gymItems, setGymItems] = useState([]);

    const fetchData =async () => {
        try {
            const gyms = await axios.get(
                `https://vihaan-fitflex.onrender.com/api/v2/center/gym`
            );
            setGymItems(gyms.data.reqCenters);
            // Update state with fetched data
        } catch (error) {
            console.error("Error fetching gyms:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array to run only once on mount


    const [currentLocation, setCurrentLocation] = useState("All");
    const [filteredgymItems, setFilteredgymItems] = useState(gymItems);

    const handleRadioChange = (event) => {
        setCurrentLocation(event.target.value);
    };
    
    // console.log("Hi");
    // console.log(gymItems[0]);
    // console.log(typeof gymItems);

    useEffect(() => {
        if (currentLocation === "All") {
            setFilteredgymItems(gymItems);
        } else {
            const filteredItems = gymItems.filter(item => item.location === currentLocation);
            setFilteredgymItems(filteredItems);
        }
    }, [currentLocation,gymItems]);


    return (
        <>
        <Navbar />
        <div className='flex justify-center bg-black p-5'>
            <div className='max-w-7xl flex flex-row gap-[5%] justify-center '>
                <div className='w-[20%] text-white'>

                    <span className='p-4 mr-2 text-xl font-bold '>Locations</span>

                    <ul>
                        <li className="flex justify-start  items-center px-5 gap-2 ease-in duration-300 hover:bg-gray-800 hover:cursor-pointer hover:rounded-full py-2">
                            <label>
                                <input
                                    type="radio"
                                    value="All"
                                    checked={currentLocation === "All"}
                                    onChange={handleRadioChange}
                                />  
                                <span className='m-2'>All</span>
                            </label>
                        </li>
                        <li className="flex justify-start items-center px-5 gap-2 ease-in duration-300 hover:bg-gray-800 hover:cursor-pointer hover:rounded-full py-2">
                            <label>
                                <input
                                    type="radio"
                                    value="delhi"
                                    checked={currentLocation === "delhi"}
                                    onChange={handleRadioChange}
                                />
                                <span className='m-2'>Delhi</span>
                                
                            </label>
                        </li>
                        <li className="flex justify-start items-center px-5 gap-2 ease-in duration-300 hover:bg-gray-800 hover:cursor-pointer hover:rounded-full py-2">

                            <label>
                                <input
                                    type="radio"
                                    value="kolkata"
                                    checked={currentLocation === "kolkata"}
                                    onChange={handleRadioChange}
                                />
                                <span className='m-2'>kolkata</span>
                                
                            </label>
                        </li>
                        <li className="flex justify-start items-center px-5 gap-2 ease-in duration-300 hover:bg-gray-800 hover:cursor-pointer hover:rounded-full py-2">
                            <label>
                                <input
                                    type="radio"
                                    value="mumbai"
                                    checked={currentLocation === "mumbai"}
                                    onChange={handleRadioChange}
                                />
                                <span className='m-2'>mumbai</span>
                            </label>
                        </li>
                    </ul>
                </div>

                <div className='w-70%'>
                    {filteredgymItems.map((curr, index) => (
                        <Card key={index} gymName={curr.name} location={curr.location} type='fitness'/>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Gym;