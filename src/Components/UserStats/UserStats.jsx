import React from 'react'

const UserStats = () => {
  return (
    <div className='grid grid-container justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[50px] '>
        <div className='flex flex-col p-[10px] justify-around items-center border-[2px] border-black h-[150px] w-[230px] rounded-[20px] min-w-[150px]'>
            <div className='text-[20px] font-bold'>Total Plans Registerd</div>
            <div className='text-[50px]'>5</div>
        </div>

        <div className='flex flex-col p-[10px] justify-around items-center border-[2px] border-black h-[150px] w-[230px] rounded-[20px] min-w-[150px]'>
            <div className='text-[20px] font-bold'>Average Rating</div>
            <div className='text-[50px]'>4.7</div>
        </div>

        <div className='flex flex-col p-[10px] justify-around items-center border-[2px] border-black h-[150px] w-[230px] rounded-[20px] min-w-[150px]'>
            <div className='text-[20px] font-bold'>Current Plan Name</div>
            <div className='text-[50px]'>4.7</div>
        </div>

         <div className='flex flex-col p-[10px] justify-around items-center border-[2px] border-black h-[150px] w-[230px] rounded-[20px] min-w-[150px]'>
            <div className='text-[20px] font-bold'>Average Rating</div>
            <div className='text-[50px]'>4.7</div>
        </div> 


    </div>
  )
}

export default UserStats