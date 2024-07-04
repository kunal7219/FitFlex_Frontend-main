import React, { useEffect } from 'react'
import Stats from '../../Components/CentreStats/CentreStats.jsx'
import RolloutPlans from '../../Components/RolloutPlans/RolloutPlans.jsx';
import axios from 'axios';

const BusinessDashboard = () => {

    // useEffect(() => {
    //     const details = await axios.get(
    //         `http://localhost:8080/api/v1/auth/login`
    //     )
    // }, [])
    

    return (
        <div className='bg-gradient-to-r from-[#fffcdc] at-10 to-[#d9a7c7] p-[50px]'>
            <div className='font-bold text-[3rem] flex justify-around italic'>Ascend Fitness</div>
            <div className='text-[1.5rem] italic flex justify-around'>
                @Model Town,Delhi</div>
            <div className='text-[1.5rem] italic flex justify-around'>Your One Place for Fitness</div>
            <div className='text-[1.2rem] my-[40px] p-[50px] italic'>
                Unleash your inner athlete at Ascend Fitness.
                This is a high-energy gym designed to help you reach your peak potential.
                We offer a complete range of equipment, from free weights and cardio machines
                to dedicated areas for functional training and group fitness classes.
                Our expert trainers are passionate about helping you achieve your fitness goals,
                whether you're a seasoned gym-goer or just starting out. Ascend Fitness -
                Where strength and community collide.
            </div>
            <div className='pb-[100px]'> <Stats /> </div>
            <div> <RolloutPlans /> </div>
            <div className='flex justify-around'>
                <button type="button" className="h-[100px] w-[400px] bg-white text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 "><span className='text-[2rem]'>Add New Plan</span></button>
                <button type="button" className="h-[100px] w-[400px] bg-white text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"><span className='text-[2rem]'>Edit Gym Details</span></button>
            </div>
        </div>
    )
}

export default BusinessDashboard