import React from 'react'
import SubscriptionPlan from '../SubscriptionPlan/SubscriptionPlan'

const CentrePlans = () => {

  return (
    <div className=' 
       rounded-[30px] p-[40px] mb-[100px] flex gap-[30px] max-h-[700px] overflow-auto '>
      <div><SubscriptionPlan/></div>
      <div><SubscriptionPlan/></div>
      <div><SubscriptionPlan/></div>
      <div><SubscriptionPlan/></div>
      <div><SubscriptionPlan/></div>
      <div><SubscriptionPlan/></div>
    </div>
  )
}

export default CentrePlans