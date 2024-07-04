import React, { useState, useEffect } from 'react'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';

const Yoga = () => {

  const [yogaItems, setYogaItems] = useState([]);

  const fetchData =async () => {
    try {
        const yoga = await axios.get(
            `https://vihaan-fitflex.onrender.com/api/v2/center/yoga`
        );
        setYogaItems(yoga.data.reqCenters);
        // Update state with fetched data
    } catch (error) {
        console.error("Error fetching sports:", error);
    }
};

useEffect(() => {
    fetchData();
}, []);

    const [currentLocation, setCurrentLocation] = useState("All");
    const [filteredYogaItems, setFilteredYogaItems] = useState(yogaItems);

    const handleRadioChange = (event) => {
        setCurrentLocation(event.target.value);
    };

    useEffect(() => {
        if (currentLocation === "All") {
          setFilteredYogaItems(yogaItems);
        } else {
            const filteredItems = yogaItems.filter(item => item.location === currentLocation);
            setFilteredYogaItems(filteredItems);
        }
    }, [currentLocation, yogaItems]);

    return (
      <>
      <Navbar />
        <div className='flex justify-center bg-black p-3'>
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
                                <span className='m-2'>delhi</span>
                                
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
                    {filteredYogaItems.map((curr, index) => (
                        <Card key={index} gymName={curr.name} location={curr.location} type="yoga" />
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Yoga;
