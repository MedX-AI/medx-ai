import React from 'react'
import MedicalHistoryForm from '@/components/form.jsx'
import ImageUploader from '@/components/ImageUploader'
import Pillscheduler from '@/components/Pillscheduler'

const demo = () => {
  return (
    <div className='bg-white h-screen' style={{height: "150vh"}}>
      <MedicalHistoryForm/>
      <h2 className='text-gray-700 pt-6 text-center font-bold text-4xl'>Pill Scheduler</h2>
      <div className='flex justify-center items-center'>
     <ImageUploader/>
     <Pillscheduler/>
     </div>
    </div>

  )
}

export default demo