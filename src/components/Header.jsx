import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BiBriefcase} from 'react-icons/bi'
import {FaMoneyBillAlt} from 'react-icons/fa'

const Header = () => {
  return (
      
    <div className='w-[94%]  mx-[3%] my-[2%] shadow-md h-[10%] rounded-md bg-white flex divide-x divide-grey-300 '>
        <div className='flex flex-1 justify-center items-center'>
            <FiSearch className='w-6 h-6 stroke-sky-600 mr-4 mx-4'/>
            <div className="product p-1 m-1 border border-grey-500 text-blue-600 font-medium  rounded text-[0.7rem] "> Product Designer </div>
            <div className="product p-1 m-1 border border-grey-500 text-blue-600 font-medium rounded text-[0.7rem] "> UI/UX Designer </div>
        </div>
        <div className='div2 flex flex-1 justify-center items-center '>


            <HiOutlineLocationMarker className='w-6 h-6 stroke-sky-600 mr-4'/>

            <div className="">
                Location
            </div>

        </div>
        <div className='div3 flex flex-1 justify-center items-center '>


            <BiBriefcase className='w-6 h-6 fill-sky-600 mr-4'/>

            <div className="">
                Job Type
            </div>

        </div>
        <div className='div4 flex flex-1 justify-center items-center '>


            <FaMoneyBillAlt className='w-6 h-6 fill-sky-600 mr-4 '/>

            <div className="">
                Salary Range
            </div>

        </div>
        <div className='div5 flex flex-none px-8 bg-blue-600 text-white font-bold rounded-tr-lg rounded-br-lg  justify-center items-center text-center'>
                Find Job
        </div>


    </div>
  )
}

export default Header