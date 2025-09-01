
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div>

        {/* Section 1 */}
        <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[100px] bg-[url('/hero-image.png')] bg-cover bg-center flex flex-col justify-center items-center gap-[20px] text-white">

            <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px] xl:leading-[56px] font-bold helvetica'>Sign Up Page</h1>

            <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-semibold'> <Link href='/'>Home</Link> &gt; <span className=' text-[#FF9F0D]'> <Link href='/Pages/SignUp'>SignUp</Link></span></p>
        </div>

        {/* Section 2 */}
        <div className='px-[100px] py-[100px] bg-white text-black flex flex-col justify-center items-center gap-[20px]'>

            <div className='bg-white shadow-lg   shadow-gray-400  rounded-[5px] p-[20px] w-full max-w-[424px] border-grey-100 border-[1px] flex flex-col gap-[10px]'>
                <h2 className='text-[20px] helvetica font-bold'>Sign Up</h2>

                <div className='w-[360px] h-[44px] border-[1px] border-gray-400 py-[5px] px-[10px] mt-[20px] flex justify-start items-center gap-[10px]'>
                    <FontAwesomeIcon icon={faUser} className='size-[20px]'  />
                    <input type="text" placeholder='Name' className='border-none outline-none w-[300px] p-[3px]'  />
                </div>

                <div className='w-[360px] h-[44px] border-[1px] border-gray-400 py-[5px] px-[10px]  flex justify-start items-center gap-[10px]'>
                    <FontAwesomeIcon icon={faEnvelope} className='size-[20px]'  />
                    <input type="email" placeholder='Email' className='border-none outline-none w-[300px] p-[3px]'  />
                </div>

                <div className='w-[360px] h-[44px] border-[1px] border-gray-400 py-[5px] px-[10px] flex justify-start items-center gap-[10px]'>
                    <FontAwesomeIcon icon={faLock} className='size-[20px]'  />
                    <input type="password" placeholder='Password' className='border-none outline-none w-[300px] p-[3px]'  />
                </div>

                <div className='w-[360px] h-[44px] py-[5px]  flex justify-start items-center gap-[10px]'>
                    <input type="checkbox" placeholder='Remember me?'  className='accent-[#FF9F0D] w-[18px] h-[18px]'/>
                    <p className='text-[14px]'>Remember me?</p>
                </div>

                <input type="button" value={"Sign Up"} className='w-[360px] h-[44px] bg-[#ff9f0d] text-white helvetica hover:bg-black hover:text-white duration-500 hover:duration-500 cursor-pointer' />


                <div className='flex justify-center items-center w-[360px]'>
                    <p className='mb-[15px] text-[#E0E0E0]'>_________________________</p>
                    <p className='border-[1px] border-[#E0E0E0] p-[5px] text-[14px]'>OR</p>
                    <p className='mb-[15px] text-[#E0E0E0]'>_________________________</p>
                </div>

                <Link href='https://www.google.com' target='_blank' className='w-[360px] h-[44px] px-[20px] border-[1px] border-[#E0E0E0] flex justify-between items-center hover:bg-[#ff9f0d] hover:text-white duration-500 hover:duration-500'>
                    <FontAwesomeIcon icon={faGoogle} className='w-[20px] h-[20px]' />
                    <p className='helvetca'>Sign up with Google</p>
                    <p></p>
                </Link>

                <Link href='https://www.apple.com' target='_blank' className='w-[360px] h-[44px] px-[20px] border-[1px] border-[#E0E0E0] flex justify-between items-center hover:bg-[#ff9f0d] hover:text-white duration-500 hover:duration-500'>
                    <FontAwesomeIcon icon={faApple} className='w-[20px] h-[20px]' />
                    <p className='helvetca'>Sign up with Apple</p>
                    <p></p>
                </Link>

                <p className='text-[14px] mt-[5px]'>Already have an account? <Link href='/Pages/SignIn' className='text-blue-700 hover:underline'>SignIn</Link></p>

                
            </div>
        </div>
    </div>
  )
}

export default SignUp