import { faFacebookF, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[20px] bg-black text-white'>
        
        {/* 1 */}
        <div className='xl:w-[1170px] sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex lg1:flex-row sm1:flex-col sm1:gap-[25px] justify-between items-center border-b-[1px] border-[#ff9f0d]'>

            <div>
                <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px] xl:leading-[56px] font-bold helvetica'><span className='text-[#FF9F0D]'>St</span>ill You Need Our Support?</h1>
                <p className='leading-[24px]'>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
            </div>

            <div className='flex justify-end items-center xl:w-[459px] rounded-[4px]'>
                <input type="email" placeholder='Enter Your Email' className='xl:w-[296px] h-[56px] bg-[#ff9f0d] text-white outline-none border-none px-[25px] rounded-l-[4px]' />
                <button type='submit' className='bg-white text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white duration-700 hover:duration-700 cursor-pointer xl:w-[163px] text-center rounded-r-[4px] h-[56px] hover:border-l-[2px] border-white sm1:text-[12px] sm1:w-[100px]'>Subscribe Now</button>
            </div>
        </div>

        {/* 2 */}
        <div className="w-full sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[150px] py-[50px] flex justify-between items-center bg-[url('/Footer-Images/footer-bg.png')] bg-bottom-right bg-no-repeat">

            {/* 2.1 */}
            <div className='w-[312px] flex flex-col gap-[15px]'>
                <h2 className='helvetica text-[24px] font-bold'>AboutUs.</h2>
                <p className='leading-[24px] text-[#bbb]'>orporate clients and leisure travelers has been relying on Groundlink for dependab safe, and professional chauffeured car service in major cities across World.</p>

                {/* 1 */}
                <div className='flex justify-start items-center gap-[10px]'>
                    <div className='bg-[#ff9f0d] text-white w-[78px] h-[72px] rounded-[4px] flex justify-center items-center'>
                        <FontAwesomeIcon icon={faClockRotateLeft} className='size-[30px]' />
                    </div>

                    <div>
                        <p className='text-[18px]'>Opening Hours</p>
                        <p className='text-[14px] text-[#bbb]'>Mon - Sat (8.00 - 6.00)</p>
                        <p className='text-[14px] text-[#bbb]'>Sundasy - Closed</p>
                    </div>
                </div>

                
            </div>

            {/* 2.2 */}
            <div className='flex flex-col gap-[10px] text-[20px] text-[#bbb]'>
                <h2 className='helvetica text-[24px] font-bold text-white'>Useful Links</h2>
                <Link href='' className='hover:underline'>About</Link>
                <Link href='' className='hover:underline'>News</Link>
                <Link href='' className='hover:underline'>Partners</Link>
                <Link href='' className='hover:underline'>Team</Link>
                <Link href='' className='hover:underline'>Menu</Link>
                <Link href='' className='hover:underline'>Contacts</Link>
            </div>

            {/* 2.3 */}
            <div className='flex flex-col gap-[10px] text-[20px] text-[#bbb]'>
                <h2 className='helvetica text-[24px] font-bold text-white'>Help?</h2>
                <Link href='' className='hover:underline'>FAQ</Link>
                <Link href='' className='hover:underline'>Term & conditions</Link>
                <Link href='' className='hover:underline'>Reporting</Link>
                <Link href='' className='hover:underline'>Documentation</Link>
                <Link href='' className='hover:underline'>Support Policy</Link>
                <Link href='' className='hover:underline'>Privacy</Link>
            </div>

            {/* 2.4 */}
            <div className='flex flex-col gap-[10px]'>
                <h2 className='helvetica text-[24px] font-bold'>Recent Post</h2>
                
                {/* 1 */}
                <div className='flex justify-start items-center gap-[10px]'>
                    <Image src='/Footer-Images/recent-post-1.png' width={59} height={48} alt='Recent Post Image' />
                    <div>
                        <p className='text-[#bbb]'>20 Feb 2022</p>
                        <p className='text-[18px]'>Keep Your Business</p>
                    </div>
                </div>

                {/* 2 */}
                <div className='flex justify-start items-center gap-[10px]'>
                    <Image src='/Footer-Images/recent-post-2.png' width={59} height={48} alt='Recent Post Image' />
                    <div>
                        <p className='text-[#bbb]'>20 Feb 2022</p>
                        <p className='text-[18px]'>Keep Your Business</p>
                    </div>
                </div>

                {/* 3 */}
                <div className='flex justify-start items-center gap-[10px]'>
                    <Image src='/Footer-Images/recent-post-3.png' width={59} height={48} alt='Recent Post Image' />
                    <div>
                        <p className='text-[#bbb]'>20 Feb 2022</p>
                        <p className='text-[18px]'>Keep Your Business</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[150px] py-[20px] bg-[#4F4F4F] text-white flex justify-between items-center'>
            <p>Copyright © 2025 by Muhammad Shariq. All Rights Reserved.</p>

            <div className='flex justify-end items-center gap-[10px]'>
                <Link href='' className='w-[36px] h-[34px] bg-white text-[#4F4F4F] hover:bg-[#ff9f0d] hover:text-white duration-700 hover:duration-700 rounded-[2px] flex justify-center items-center'><FontAwesomeIcon icon={faFacebookF} className='size-[20px]' /></Link>

                <Link href='' className='w-[36px] h-[34px] bg-white text-[#4F4F4F] hover:bg-[#ff9f0d] hover:text-white duration-700 hover:duration-700 rounded-[2px] flex justify-center items-center'><FontAwesomeIcon icon={faTwitter} className='size-[20px]' /></Link>
                <Link href='' className='w-[36px] h-[34px] bg-white text-[#4F4F4F] hover:bg-[#ff9f0d] hover:text-white duration-700 hover:duration-700 rounded-[2px] flex justify-center items-center'><FontAwesomeIcon icon={faInstagram} className='size-[20px]' /></Link>
                <Link href='' className='w-[36px] h-[34px] bg-white text-[#ff9f0d] hover:bg-[#ff9f0d] hover:text-white duration-700 hover:duration-700 rounded-[2px] flex justify-center items-center'><FontAwesomeIcon icon={faYoutube} className='size-[20px] ' /></Link>
                <Link href='' className='w-[36px] h-[34px] bg-white text-[#4F4F4F] hover:bg-[#ff9f0d] hover:text-white duration-700 hover:duration-700 rounded-[2px] flex justify-center items-center'><FontAwesomeIcon icon={faPinterest} className='size-[20px]' /></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer