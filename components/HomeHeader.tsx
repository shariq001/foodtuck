
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Image from 'next/image'

const HomeHeader = () => {
  return (
    <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] max-w-[1600px] flex flex-col justify-center items-center'>
        
        <div className='py-[15px]'>
            <h1 style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} className='text-[24px] font-bold text-[#FF9F0D]'>Food<span className='text-white'>tuck</span></h1>
        </div>

        <div className='flex justify-between items-center w-full'>

            <nav className='flex justify-start items-center gap-[20px]'>
                <Link href='' className='hover:underline'>Home</Link>
                <Link href='' className='hover:underline'>Menu</Link>
                <Link href='' className='hover:underline'>Blog</Link>
                <Link href='' className='hover:underline'>Pages</Link>
                <Select>
                    <SelectTrigger className="w-[105px] border-none cursor-pointer text-white">
                        <SelectValue placeholder="About" className='hover:underline text-white'/>
                    </SelectTrigger>
                    <SelectContent className='bg-white w-[105px] text-black'>
                        <SelectItem value="light" className='w-[105px]'><Link href='w-[105px]'>About Us</Link></SelectItem>
                        <SelectItem value="dark" className='w-[105px]'><Link href=''>Our Chefs</Link></SelectItem>
                        <SelectItem value="system" className=''><Link href=''>FAQ</Link></SelectItem>
                    </SelectContent>
                </Select>
                <Link href='' className='hover:underline'>Shop</Link>
                <Link href='' className='hover:underline'>Contact</Link>
            </nav>

            <div className='flex justify-end items-center gap-[5px]'>

                <div className='flex justify-end items-center border-[#FF9F0D] border-[2px] rounded-full px-[10px]'>
                    <input type="text" placeholder='Search...' className='bg-transparent px-[10px] py-[7px] outline-none border-neutral-50 w-[250px]' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='size-[20px] cursor-pointer' />
                </div>
                <Link href=''><Image src='/Handbag.png' width={24} height={24} alt='Handbag' /></Link>
                
            </div>
        </div>
    </div>
  )
}

export default HomeHeader