import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams} from 'react-router-dom'
import { assets } from '../assets/assets'

const Appointment = () => {

  const {doctors, currancySymbol} = useContext(AppContext)
  const {docId} = useParams()

  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])
  
  return docInfo && (
    <div>
      {/*  ----------Doctor Details----------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        {/* --------- Doctor Info -------- */}
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:m-0'>
          <p className='flex  items-center gap-2 font-medium text-2xl text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-3 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality} </p>
        <button className='py0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          {/* --------- Doctor About -------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee : <span className='text-gray-700'>{currancySymbol}{docInfo.fees}</span>
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Appointment;