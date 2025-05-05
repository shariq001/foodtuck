import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[20px]'>
        
        {/* 1 */}
        <div className='w-[1170px] py-[50px] flex justify-between items-center border-b-[1px] border-[#ff9f0d]'>

            <div>
                <h1 className='text-[48px] leading-[56px] font-bold helvetica'><span className='text-[#FF9F0D]'>St</span>ill You Need Our Support?</h1>
                <p className='leading-[24px]'>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
            </div>

            <div className='flex justify-end items-center w-[459px] rounded-[4px]'>
                <input type="email" placeholder='Enter Your Email' className='w-[296px] h-[56px] bg-[#ff9f0d] text-white outline-none border-none px-[25px] rounded-l-[4px]' />
                <button type='submit' className='bg-white text-[#ff9f0d] w-[163px] text-center rounded-r-[4px] h-[56px]'>Subscribe Now</button>
            </div>
        </div>

        {/* 2 */}
        <div className='w-full sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex justify-between items-center'>

            {/* 2.1 */}
            <div className='w-[312px] flex flex-col gap-[15px]'>
                <h2 className='helvetica text-[24px] font-bold'>AboutUs.</h2>
                <p className='leading-[24px]'>orporate clients and leisure travelers has been relying on Groundlink for dependab safe, and professional chauffeured car service in major cities across World.</p>

                <div className='flex justify-start items-center gap-[10px]'>
                    <div className='bg-[#ff9f0d] text-white w-[78px] h-[72px] rounded-[4px] flex justify-center items-center'>
                        <FontAwesomeIcon icon={faClockRotateLeft} className='size-[30px]' />
                    </div>

                    <div>
                        <p className='text-[18px]'>Opening Hours</p>
                        <p className='text-[14px]'>Mon - Sat (8.00 - 6.00)</p>
                        <p className='text-[14px]'>Sundasy - Closed</p>
                    </div>
                </div>
            </div>

            {/* 2.2 */}
            <div className='flex flex-col gap-[10px] text-[20px]'>
                <h2 className='helvetica text-[24px] font-bold'>Useful Links</h2>
                <Link href=''>About</Link>
                <Link href=''>News</Link>
                <Link href=''>Partners</Link>
                <Link href=''>Team</Link>
                <Link href=''>Menu</Link>
                <Link href=''>Contacts</Link>
            </div>

            {/* 2.3 */}
            <div className='flex flex-col gap-[10px] text-[20px]'>
                <h2 className='helvetica text-[24px] font-bold'>Help?</h2>
                <Link href=''>FAQ</Link>
                <Link href=''>Term & conditions</Link>
                <Link href=''>Reporting</Link>
                <Link href=''>Documentation</Link>
                <Link href=''>Support Policy</Link>
                <Link href=''>Privacy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer