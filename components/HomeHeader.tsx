"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'

const HomeHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Desktop Header */}
      <div className='sm1:hidden sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] max-w-[1600px] md2:flex flex-col justify-center items-center '>
        <div className='py-[15px]'>
          <h1 style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} className='text-[24px] font-bold text-[#FF9F0D]'>
            Food<span className='text-white'>tuck</span>
          </h1>
        </div>

        <div className='flex justify-between items-center w-full'>
          <nav className='flex justify-start items-center gap-[20px]'>
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

          <div className='flex justify-end items-center gap-[5px]'>
            <div className='flex justify-end items-center border-[#FF9F0D] border-[2px] rounded-full px-[10px]'>
              <input type="text" placeholder='Search...' className='bg-transparent px-[10px] py-[7px] outline-none border-neutral-50 w-[250px]' />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='size-[20px] cursor-pointer' />
            </div>
            <Link href=''><Image src='/Handbag.png' width={24} height={24} alt='Handbag' /></Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className='md2:hidden sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] max-w-[1600px] flex justify-between items-center'>
        <div className='py-[15px]'>
          <h1 style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} className='text-[24px] font-bold text-[#FF9F0D]'>
            Food<span className='text-white'>tuck</span>
          </h1>
        </div>
        <button type='button' onClick={() => setIsMobileMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} className='size-[25px]' />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='fixed top-0 right-0 w-[270px] h-fit bg-[#1a1a1a] text-white z-50 sm1:px-[16px] sm2:px-[20px] pt-[20px] pb-[30px] rounded-bl-[10px]'>
          <div className='flex justify-between items-center mb-[20px]'>
            <h1 style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} className='text-[24px] font-bold text-[#FF9F0D]'>
              Food<span className='text-white'>tuck</span>
            </h1>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <FontAwesomeIcon icon={faTimes} className='size-[24px]' />
            </button>
          </div>

          <nav className='flex flex-col gap-[15px]'>
            <Link href='' className='hover:underline' onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href='' className='hover:underline' onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
            <Link href='' className='hover:underline' onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link href='' className='hover:underline' onClick={() => setIsMobileMenuOpen(false)}>Pages</Link>
            <Link href='' className='hover:underline' onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href='' className='hover:underline' onClick={() => setIsMobileMenuOpen(false)}>Our Chefs</Link>
            <Link href='' className='hover:underline' onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
            <Link href='' className='hover:underline' onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link href='' className='hover:underline' onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </nav>

          <div className='flex items-center mt-[20px] border-[#FF9F0D] border-[2px] rounded-full px-[10px] w-[240px]'>
            <input type="text" placeholder='Search...' className='bg-transparent px-[10px] py-[7px] outline-none w-[200px]' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='size-[20px] cursor-pointer' />
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeHeader;
