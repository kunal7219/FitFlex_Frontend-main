import React from 'react'
import SampleGym1 from '../../assets/SampleGym1.png'
import SampleGym2 from '../../assets/SampleGym2.png'
import SampleGym3 from '../../assets/SampleGym3.png'
import { Carousel } from "@material-tailwind/react"

const CentreContent = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-around mb-[100px]'>
        <div className=' w-full'>
            <Carousel className="rounded-xl">
            <img
                src={SampleGym1}
                alt="image 1"
                className="h-full w-full object-cover rounded-xl"
            />
            {/* <img
                src={SampleGym2}
                alt="image 2"
                className="h-full w-full object-cover"
            /> 
            <img
                src={SampleGym3}
                alt="image 3"
                className="h-full w-full object-cover"
            /> */}
            </Carousel>
        </div>
        <div className=' w-full p-[50px]'>
            <div className='h-full'>
                <div className='font-bold text-[2rem] flex justify-around'>Ascend Fitness</div>
                <div className='text-[1.5rem] italic flex justify-around'>
                    @Model Town,Delhi</div>
                <div className='text-[1.5rem] italic flex justify-around'>Your One Place for Fitness</div>
                <div className='text-[1.2rem] mt-[40px]'>
                    Unleash your inner athlete at Ascend Fitness.  
                    This is a high-energy gym designed to help you reach your peak potential. 
                    We offer a complete range of equipment, from free weights and cardio machines 
                    to dedicated areas for functional training and group fitness classes. 
                    Our expert trainers are passionate about helping you achieve your fitness goals,
                    whether you're a seasoned gym-goer or just starting out. Ascend Fitness - 
                    Where strength and community collide.
                </div>
            </div>
        </div>
    </div>
  )
}

export default CentreContent