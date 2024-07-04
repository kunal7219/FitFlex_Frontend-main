import React from 'react'

import CentreContent from '../../Components/CentreContent/CentreContent'
import GymPlans from '../../Components/CentrePlans/CentrePlans'
import GymRating from '../../Components/CentreRating/CentreRating'


const SingleGymDesc = () => {
  return (
    <div className='bg-gradient-to-r from-[#fffcdc] at-10 to-[#d9a7c7] p-[50px] '>
        <CentreContent/>
        <GymPlans/>
        <GymRating/>
    </div>
  )
}

export default SingleGymDesc