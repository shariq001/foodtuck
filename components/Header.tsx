import Link from 'next/link'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] flex justify-between items-center py-[20px] bg-black text-white'>
        
        <h1 style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} className='text-[24px] font-bold text-[#FF9F0D]'>
            Food<span className='text-white'>tuck</span>
        </h1>

        <nav className='flex justify-center items-center gap-[20px]'>
            <Link href='' className='hover:underline'>Home</Link>
            <Link href='' className='hover:underline'>Menu</Link>
            <Link href='' className='hover:underline'>Blog</Link>
            <Link href='' className='hover:underline'>Pages</Link>
            <Select>
              <SelectTrigger className="w-[105px] border-none cursor-pointer text-white">
                <SelectValue placeholder="About" className='hover:underline text-white' />
              </SelectTrigger>
              <SelectContent className='bg-white w-[105px] text-black'>
                <SelectItem value="aboutus"><Link href=''>About Us</Link></SelectItem>
                <SelectItem value="chefs"><Link href=''>Our Chefs</Link></SelectItem>
                <SelectItem value="faq"><Link href=''>FAQ</Link></SelectItem>
              </SelectContent>
            </Select>
            <Link href='' className='hover:underline'>Shop</Link>
            <Link href='' className='hover:underline'>Contact</Link>
        </nav>

        <div className='flex justify-end items-center gap-[15px]'>

            <FontAwesomeIcon icon={faMagnifyingGlass} className='size-[20px] cursor-pointer' />

            <Link href=''><FontAwesomeIcon icon={faUser} className='size-[20px] cursor-pointer'/></Link>

            <Link href=''><Image src='/Handbag.png' width={24} height={24} alt='Handbag' /></Link>
        </div>
    </div>
  )
}

export default Header