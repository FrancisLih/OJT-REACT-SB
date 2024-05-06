import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../helpers/functions-general'

const HomeCards = ({item}) => {
  return (
    <div className={`flex h-full mb-10 ${item.isImgContent ? "" : "flex-row-reverse"} ${item.bg}`}>
        <img src={`${baseImgUrl}/${item.img}`} alt="" className='w-[50%] object-cover' />
        <div className="content h-full flex flex-col text-center justify-center items-center self-center p-10">
            <h2>{item.title}</h2>
            <p className='text-2xl max-w-[600px] mx-auto mb-6'>New Spicy Lemonade Refreshers® with real fruit and our three-pepper chili blend are coming in hot.{item.content}</p>
            <Link to={`${item.link}`} className='btn btn-outline'> Order Now</Link>
        </div>
    </div>
  )
}

export default HomeCards