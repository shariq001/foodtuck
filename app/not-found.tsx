import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <div>
        <Header />

        {/* Section 1 */}
        <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[100px] bg-[url('/hero-image.png')] bg-cover bg-center flex flex-col justify-center items-center gap-[20px] text-white">

            <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px] xl:leading-[56px] font-bold helvetica'>404 Error</h1>

            <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-semibold'> <Link href='/'>Home</Link> &gt; <span className=' text-[#FF9F0D]'> 404</span></p>
        </div>

        {/* Section 2 */}
        <div className='bg-white text-black flex flex-col justify-center gap-[15px] items-center xl:py-[50px] py-[100px]'>
          <h1 className='text-[96px] font-bold helvetica text-[#FF9F0D]'>404</h1>
          <h1 className='text-[32px] font-bold helve'>Oops! Look likes something going wrong</h1>
          <p className='text-[#4F4F4F] text-center'>Page Cannot be found! we’ll have it figured out in no time. <br /> Menwhile, cheek out these fresh ideas:</p>

          <Link href='/' className='btn-fill border-[#ff9f0d] border-[1px] rounded-[30px] text-center px-[32px] py-[10px] mt-[15px] w-[190px]'>Go to Home</Link>
        </div>
    </div>
  )
}

export default PageNotFound