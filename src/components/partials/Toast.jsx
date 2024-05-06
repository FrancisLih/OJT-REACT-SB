import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Toast = ({setSuccess}) => {
    React.useEffect(() => {
        setTimeout(() => {
            setSuccess(false)
        }, 500)
    },[])
  return (
    <div className="toast fixed top-0 left-1/2 -translate-x-1/2 w-[500px] p-4 rounded-md bg-green-100 border-l-2 border-green-800 flex justify-between items-center shadow-md">
                <div className='flex gap-2'>
                    <FaCheckCircle className='text-accent'/>
                    <ul>
                        <li><h5 className='font-bold'>Success</h5></li>
                        <li className='text-sm'>Successfully added to cart!</li>
                    </ul>
                </div>

            </div>
  )
}

export default Toast