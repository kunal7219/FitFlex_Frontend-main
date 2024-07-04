import React from 'react'
import GymSidePlans from '../CentreSidePlans/CentreSidePlans'

const RolloutPlans = () => {
  return (
    <div className=' 
    rounded-[30px] p-[40px] mb-[100px] flex gap-[30px] max-h-[700px] overflow-auto '>
        <GymSidePlans/>
        <GymSidePlans/>
        <GymSidePlans/>
        <GymSidePlans/>
        <GymSidePlans/>
        <GymSidePlans/>
    </div>
  )
}

export default RolloutPlans