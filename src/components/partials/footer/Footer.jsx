import React from 'react'
import { Link } from 'react-router-dom'
import { bottomfooterLinks, footerLinks } from './links'
// import { bottomfooterLinks } from './bottomlinks'

const Footer = () => {
  return (
    <footer className='container ml-auto'>
        <div className='grid grid-cols-5 w-[80%] gap-5'>

            {footerLinks.map((item,key)=>{
                return(
            <div className='footer-link' key={key}>
                <h3 className='mb-12 text-lg'>{item.title}</h3>
                <ul className='opacity-70 space-y-6'>
                    {item.links.map((link, key)=><li key={key} className='hover:font-semibold' >
                        <Link to={`${link}`}>{link.label}</Link></li>)}
                </ul>
            </div>
                )
            })}
        </div>

        <div>
        <div className=''>
            {bottomfooterLinks.map((item,key)=>{
                return(
            <div className='footer-link' key={key}>
                <ul className=' font-semibold space-y-6'>
                    {item.sublinks.map((sublink, key)=><li className='hover:underline' key={key}>
                        <Link to={`${sublink}`}>{sublink.label}</Link></li>)}
                </ul>
            </div>
                )
            })}
            </div>
        </div>


    </footer>
  )
}

export default Footer