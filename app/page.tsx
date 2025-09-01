import HomeHeader from '@/components/HomeHeader'
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image'
import {  faCheck, faPlay, faShareNodes, faStar } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots, faThumbsUp  } from '@fortawesome/free-regular-svg-icons'

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400', // Great Vibes only has 400
  variable: '--font-great-vibes', // Optional CSS variable
});

const Home = () => {
  return (
    <div className='bg-black text-white'>
      <HomeHeader />

      {/* Section 1 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex md2:flex-row justify-between items-center sm1:flex-col sm1:gap-[50px]'>

        {/* Left */}
        <div className='flex justify-start items-center sm1:flex-col'>

          {/* 1 */}
          <div className='flex flex-col gap-5 justify-center items-center rotate-90 sm1:hidden'>
            <div className='bg-white w-[1px] h-[100px]'></div>

            <Link href='https://www.facebook.com' target='_blank'><FontAwesomeIcon icon={faFacebookF} className='size-[20px] sm1:rotate-270' /></Link>

            <Link href='https://www.twitter.com' target='_blank'><FontAwesomeIcon icon={faTwitter} className='size-[20px] text-[#FF9F0D] sm1:rotate-270' /></Link>

            <Link href='https://www.pinterest.com' target='_blank'><FontAwesomeIcon icon={faPinterestP} className='size-[20px] sm1:rotate-270' /></Link>

            <div className='bg-white w-[1px] h-[100px]'></div>
          </div>

          {/* 2 */}
          <div className='flex flex-col gap-[10px]'>
            <h1 className={`${greatVibes.className} text-[#FF9F0D] xl:text-[32px] sm1:text-[20px] sm2:text-[22px] md1:text-[24px] md2:text-[26px] lg1:text-[28px] lg2:text-[30px]`}>Its Quick & Amusing!</h1>
            <h1 className='xl:text-[60px] sm1:text-[24px] sm2:text-[30px] md1:text-[36px] md2:text-[42px] lg1:text-[48px] lg2:text-[54px] xl:leading-[68px] font-bold helvetica xl:w-[472px]'><span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality</h1>
            <p className='leading-[24px] xl:w-[418px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>

            <Link href='' className='btn-fill border-[#ff9f0d] border-[1px] rounded-[30px] text-center px-[32px] py-[10px] mt-[15px] w-[190px]'>See Menu</Link>
          </div>
        </div>

        {/* Right */}
        <Image src='/Home-Images/home-1.png' alt='Hero Image' width={750} height={670}/>
      </div>

      {/* Section 2 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex md2:flex-row justify-between items-center sm1:flex-col'>

        {/* Left */}
        <div className='flex flex-col gap-[10px] h-[660px]'>
          <h1 className={`${greatVibes.className} text-[#FF9F0D] xl:text-[32px] sm1:text-[20px] sm2:text-[22px] md1:text-[24px] md2:text-[26px] lg1:text-[28px] lg2:text-[30px]`}>About Us</h1>
          <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px]  xl:leading-[56px] font-bold helvetica xl:w-[446px]'><span className='text-[#FF9F0D]'>We</span> Create the best foody product</h1>

          <p className='leading-[24px] xl:w-[526px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

          <ul className='pl-[10px] mt-[10px]'>
            <li><FontAwesomeIcon icon={faCheck} className='size-[15px] inline-flex animate-bounce mr-[10px]' /> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
            <li className='my-[10px]'><FontAwesomeIcon icon={faCheck} className='size-[15px] inline-flex animate-bounce mr-[10px]' /> Quisque diam pellentesque bibendum non dui volutpat fringilla</li>
            <li><FontAwesomeIcon icon={faCheck} className='size-[15px] inline-flex animate-bounce mr-[10px]' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>

          <Link href='' className='btn-fill border-[#ff9f0d] border-[1px] rounded-[30px] text-center px-[32px] py-[10px] mt-[15px] w-[190px]'>Read More</Link>
        </div>

        {/* Right */}
        <div className='home-grid'>
          <Image src='/Home-Images/home-2.png' alt='Home Image 2' width={660} height={330} className='col-start-1 col-end-3 row-start-1 row-end-2 card rounded-[10px]' />

          <Image src='/Home-Images/home-3.png' alt='Home Image 3' width={330} height={330} className='col-start-1 col-end-2 row-start-2 row-end-3 card rounded-[10px]' />

          <Image src='/Home-Images/home-4.png' alt='Home Image 4' width={330} height={330} className='col-start-2 col-end-3 row-start-2 row-end-3 card rounded-[10px]' />
        </div>
      </div>

      {/* Section 3 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col gap-[10px] justify-center items-center'>

        <h1 className={`${greatVibes.className} text-[#FF9F0D] xl:text-[32px] sm1:text-[20px] sm2:text-[22px] md1:text-[24px] md2:text-[26px] lg1:text-[28px] lg2:text-[30px]`}>Food Category</h1>

        <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px]  xl:leading-[56px] font-bold helvetica xl:w-[446px]'><span className='text-[#FF9F0D]'>Ch</span>oose Food Item</h1>

        <div className='flex lg2:flex-row sm1:flex-col justify-center items-center gap-[20px]'>

          <Image src='/Home-Images/home-5.png' alt='Home Image 5' width={305} height={328} className='card rounded-[10px]'/>
          <Image src='/Home-Images/home-6.png' alt='Home Image 6' width={305} height={328} className='card rounded-[10px]'/>
          <Image src='/Home-Images/home-7.png' alt='Home Image 7' width={305} height={328} className='card rounded-[10px]'/>
          <Image src='/Home-Images/home-8.png' alt='Home Image 8' width={305} height={328} className='card rounded-[10px]'/>
        </div>
      </div>

      {/* Section 4 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex lg2:flex-row sm1:flex-col sm1:gap-[30px] justify-between items-center'>

        {/* Left */}
        <div className='flex flex-col gap-[10px] justify-start items-start'>
          
          {/* 1 */}
          <div className='flex justify-start items-end gap-[10px] flex-wrap'>
            <Image src='/Home-Images/home-9.png' alt='Home Image 9' width={362} height={356} className='card rounded-[10px]'/>
            <Image src='/Home-Images/home-10.png' alt='Home Image 10' width={281} height={231} className='card rounded-[10px]' />
          </div>

          {/* 2 */}
          <div className='flex justify-start items-start gap-[13px] flex-wrap'>
            <Image src='/Home-Images/home-11.png' alt='Home Image 11' width={244} height={306} className='card rounded-[10px]'/>
            <Image src='/Home-Images/home-12.png' alt='Home Image 12' width={221} height={226} className='card rounded-[10px]'/>

            <div className='flex flex-col gap-[5px]'>
              <Image src='/Home-Images/home-13.png' alt='Home Image 13' width={161} height={168} className='card rounded-[10px]'/>
              <Image src='/Home-Images/home-14.png' alt='Home Image 14' width={161} height={168} className='card rounded-[10px]'/>
            </div>
          </div>
        </div>  


        {/* Right */}
        <div className='flex flex-col gap-[10px] xl:w-[526px]'>
          <h1 className={`${greatVibes.className} text-[#FF9F0D] xl:text-[32px] sm1:text-[20px] sm2:text-[22px] md1:text-[24px] md2:text-[26px] lg1:text-[28px] lg2:text-[30px]`}>Why Choose Us</h1>
          <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px]  xl:leading-[56px] font-bold helvetica xl:w-[433px]'><span className='text-[#FF9F0D]'>Ex</span>tra ordinary taste And Experience</h1>

          <p className='leading-[24px] xl:w-[526px] my-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

          <div className='flex justify-start items-center gap-[20px]'>

            {/* 1 */}
            <div className='flex justify-center flex-col items-center gap-[10px]'>
              <div className='xl:w-[100px] xl:h-[100px] flex justify-center items-center bg-[#FF9F0D] rounded-[10px]'>
                <Image src='/Hamburger.png' width={56} height={56} alt='Hamburger' />
              </div>

              <p className='text-[18px]'>Fast Food</p>
            </div>

            {/* 2 */}
            <div className='flex justify-center flex-col items-center gap-[10px]'>
              <div className='xl:w-[100px] xl:h-[100px] flex justify-center items-center bg-[#FF9F0D] rounded-[10px]'>
                <Image src='/Cookie.png' width={56} height={56} alt='Cookie' />
              </div>

              <p className='text-[18px]'>Lunch</p>
            </div>

            {/* 3 */}
            <div className='flex justify-center flex-col items-center gap-[10px]'>
              <div className='xl:w-[100px] xl:h-[100px] flex justify-center items-center bg-[#FF9F0D] rounded-[10px]'>
                <Image src='/Wine.png' width={56} height={56} alt='Wine' />
              </div>

              <p className='text-[18px]'>Dinner</p>
            </div>
          </div>

          <div className='bg-white xl:w-[374px] h-[93px] text-black flex justify-center gap-[30px] items-center rounded-[6px] border-l-[8px] border-[#FF9F0D] mt-[15px] animate-pulse'>
            <p className='text-[#FF9F0D] text-[48px] font-bold'>30+</p>
            <p className='text-[20px] leading-[24px] '>Years of <br /><span className='font-bold text-[24px] helvetica'>Experienced</span></p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-full  my-[50px] bg-[url('/Home-Images/home-section-bg.png')] bg-cover bg-center">
        <div className='bg-[#121212] w-full  opacity-90'>
          <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex lg2:flex-row sm1:flex-col sm1:gap-[20px] justify-between items-center'>

            {/* 1 */}
            <div className='flex flex-col gap-[10px] justify-center items-center'>
              <Image src='/Home-Images/Group.png' width={120} height={120} alt='Professional Chefs' />
              <p className='font-bold lg2:text-[24px] sm1:text-[16px] md1:text-[18px] md2:text-[20px] lg1:text-[22px] helvetica'>Professional Chefs</p>
              <p className='font-bold helvetica lg2:text-[40px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px]'>420</p>
            </div>

            {/* 2 */}
            <div className='flex flex-col gap-[10px] justify-center items-center'>
              <Image src='/Home-Images/Group (1).png' width={120} height={120} alt='Item of Food' />
              <p className='font-bold lg2:text-[24px] sm1:text-[16px] md1:text-[18px] md2:text-[20px] lg1:text-[22px] helvetica'>Item of Food</p>
              <p className='font-bold helvetica lg2:text-[40px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px]'>320</p>
            </div>

            {/* 3 */}
            <div className='flex flex-col gap-[10px] justify-center items-center'>
              <Image src='/Home-Images/Group (2).png' width={120} height={120} alt='Years of Experienced' />
              <p className='font-bold lg2:text-[24px] sm1:text-[16px] md1:text-[18px] md2:text-[20px] lg1:text-[22px] helvetica'>Years of Experienced</p>
              <p className='font-bold helvetica lg2:text-[40px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px]'>30 +</p>
            </div>

            {/* 4 */}
            <div className='flex flex-col gap-[10px] justify-center items-center'>
              <Image src='/Home-Images/Group (3).png' width={120} height={120} alt='Happy Customers' />
              <p className='font-bold lg2:text-[24px] sm1:text-[16px] md1:text-[18px] md2:text-[20px] lg1:text-[22px] helvetica'>Happy Customers</p>
              <p className='font-bold helvetica lg2:text-[40px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px]'>220</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col justify-center items-center gap-[15px]'>

        <h1 className={`${greatVibes.className} text-[#FF9F0D] xl:text-[32px] sm1:text-[20px] sm2:text-[22px] md1:text-[24px] md2:text-[26px] lg1:text-[28px] lg2:text-[30px]`}>Choose & pick</h1>
        <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px] xl:leading-[56px] font-bold helvetica'><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h1>

        <div className='md2:flex justify-between items-center text-[20px] xl:w-[1000px] sm1:hidden'>
          <p className='text-[#FF9F0D] font-bold'>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
          <p>Dessert</p>
          <p>Drink</p>
          <p>Snack</p>
          <p>Soups</p>
        </div>

        <div className='flex lg1:flex-row sm1:flex-col sm1:gap-[30px] justify-between items-center w-full'>
          <div className="bg-[url('/Home-Images/menu-1-bg.png')] bg-cover bg-center xl:w-[515px] h-[515px] flex justify-center items-center">
            <Image src='/Home-Images/menu-1.png' width={366} height={362} alt='Menu Item 1' />
          </div>

          <div className='flex flex-col gap-[10px]'>

            {/* 1 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-9.jpg' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='sm2:w-[296px] sm2:h-[79px]'>
                <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-bold'>Lettuce Leaf</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>

            {/* 2 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-7.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='sm2:w-[296px] sm2:h-[79px]'>
                <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-bold'>Fresh Breakfast</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>14.5$</p>
              </div>
            </div>

            {/* 3 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-5.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='sm2:w-[296px] sm2:h-[79px]'>
                <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-bold'>Mild Butter</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>

            {/* 4 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-3.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='sm2:w-[296px] sm2:h-[79px]'>
                <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-bold'>Fresh Bread</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[10px]'>

            {/* 1 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-8.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='sm2:w-[296px] sm2:h-[79px]'>
                <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-bold'>Glow Cheese</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>

            {/* 2 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-6.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='sm2:w-[296px] sm2:h-[79px]'>
                <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-bold'>Italian Pizza</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>14.5$</p>
              </div>
            </div>

            {/* 3 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-4.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='sm2:w-[296px] sm2:h-[79px]'>
                <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-bold'>Slice Beef</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>

            {/* 4 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-2.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='sm2:w-[296px] sm2:h-[79px]'>
                <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-bold'>Mushroom Pizza</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col justify-center items-center gap-[15px]'>
        <h1 className={`${greatVibes.className} text-[#FF9F0D] xl:text-[32px] sm1:text-[20px] sm2:text-[22px] md1:text-[24px] md2:text-[26px] lg1:text-[28px] lg2:text-[30px]`}>Chefs</h1>
        <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px] xl:leading-[56px] font-bold helvetica'><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h1>

        <div className='w-full flex md2:flex-row sm1:flex-col sm1:gap-[15px] justify-between items-center'>
          <Image src='/Home-Images/chef-1.png' width={312} height={391} alt='Our Chef' className='card rounded-[10px]'/>

          <Image src='/Home-Images/chef-2.png' width={312} height={391} alt='Our Chef' className='card rounded-[10px]'/>

          <Image src='/Home-Images/chef-3.png' width={312} height={391} alt='Our Chef' className='card rounded-[10px]'/>

          <Image src='/Home-Images/chef-4.png' width={312} height={391} alt='Our Chef' className='card rounded-[10px]'/>
        </div>

        <Link href='' className='border-[1px] border-[#FF9F0D] rounded-[25px] px-[32px] py-[10px] mt-[8px] btn-fill '>See More</Link>
      </div>

      {/* Section 8 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col gap-[15px] mt-[10px] justify-center items-center'>
        <h1 className={`${greatVibes.className} text-[#FF9F0D] xl:text-[32px] sm1:text-[20px] sm2:text-[22px] md1:text-[24px] md2:text-[26px] lg1:text-[28px] lg2:text-[30px]`}>Testimonials</h1>
        <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px] xl:leading-[56px] font-bold helvetica'>What our client are saying</h1>

        <div className='xl:w-[868.47px] xl:h-[450.89px] bg-white text-black relative flex flex-col gap-[10px] justify-center items-center mt-[70px] py-[30px]'>
          <Image src='/Home-Images/client.png' width={132.92} height={133.97} alt='Client Image' className='top-[-70px] absolute' />

          <Image src='/Quotes.png' width={47.97} height={47.99} alt='Quotes' className='mt-[50px]' />

          <p className='helvetica xl:w-[696.57px] text-[18px] text-center mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

          <div className='flex justify-center items-center gap-[5px] mt-[20px] '>
            <FontAwesomeIcon icon={faStar} className='size-[25px] text-[#ff9f0d]' />
            <FontAwesomeIcon icon={faStar} className='size-[25px] text-[#ff9f0d]' />
            <FontAwesomeIcon icon={faStar} className='size-[25px] text-[#ff9f0d]' />
            <FontAwesomeIcon icon={faStar} className='size-[25px] text-[#ff9f0d]' />
            <FontAwesomeIcon icon={faStar} className='size-[25px] text-[#e0e0e0]' />
          </div>

          <h3 className='text-[24px] font-bold helvetica'>Alamin Hasan</h3>
          <p className='helvetica text-[#828282]'>Food Specialist</p>
        </div>
      </div>

      {/* Section 9 */}
      <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col justify-center items-end bg-[url('/Home-Images/home-15.png')] bg-cover bg-center my-[50px]">
        <h1 className={`${greatVibes.className} text-[#FF9F0D] xl:text-[32px] sm1:text-[20px] sm2:text-[22px] md1:text-[24px] md2:text-[26px] lg1:text-[28px] lg2:text-[30px]`}>Restaurant Active Process</h1>
        <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px] xl:leading-[56px] font-bold helvetica xl:w-[705px] text-right'><span className='text-[#FF9F0D]'>We</span> Document Every Food Bean Process until it is saved</h1>

        <p className='leading-[24px] xl:w-[651px] text-right my-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,</p>

        <div className='flex justify-end items-center gap-[20px] sm1:gap-[10px]'>
          <Link href='' className='border-[1px] border-[#FF9F0D] rounded-[25px] xl:px-[32px] sm1:px-[20px] py-[10px]  btn-fill '>Read More</Link>

          <Link href='' className='border-[1px] border-[#FF9F0D] rounded-[25px] xl:px-[32px] sm1:px-[20px] py-[10px] font-bold btn-fill inline-flex items-center'><FontAwesomeIcon icon={faPlay} className='size-[25px] inline-flex items-center mr-[10px]' /> Play Video</Link>
        </div>
      </div>

      {/* Section 10 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col justify-center items-center gap-[15px]'>
        <h1 className={`${greatVibes.className} text-[#FF9F0D] xl:text-[32px] sm1:text-[20px] sm2:text-[22px] md1:text-[24px] md2:text-[26px] lg1:text-[28px] lg2:text-[30px]`}>Blog Post</h1>
        <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px] xl:leading-[56px] font-bold helvetica text-right'><span className='text-[#FF9F0D]'>La</span>test News & Blog</h1>

        <div className='flex md2:flex-row sm1:flex-col sm1:gap-[20px] justify-between items-center w-full'>

          {/* 1 */}
          <div className='xl:w-[424px] flex flex-col'>
            <Image src='/Home-Images/home-blog-1.png' width={423} height={349} alt='Blog Image' className='card rounded-[10px]'/>

            <div className='flex flex-col gap-[10px] p-[15px] border-white border-[1px] border-t-0'>
              <p className='text-[#ff9f0d]'>10 February 2022</p>
              <p className='lg2:text-[24px] sm1:text-[16px] md1:text-[18px] md2:text-[20px] lg1:text-[22px] helvetica font-bold md2:leading-[32px]'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>

              <div className='flex justify-between w-full items-center'>
                <Link href='' className='hover:underline'>Learn More</Link>
                <div className='flex justify-end items-center gap-[8px]'>
                  <FontAwesomeIcon icon={faThumbsUp} className='size-[20px]'/>
                  <FontAwesomeIcon icon={faCommentDots} className='size-[20px] text-[#ff9f0d]'/>
                  <FontAwesomeIcon icon={faShareNodes} className='size-[20px]'/>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className='xl:w-[424px] flex flex-col'>
            <Image src='/Home-Images/home-blog-2.png' width={423} height={349} alt='Blog Image' className='card rounded-[10px]'/>

            <div className='flex flex-col gap-[10px] p-[15px] border-white border-[1px] border-t-0'>
              <p className='text-[#ff9f0d]'>10 February 2022</p>
              <p className='lg2:text-[24px] sm1:text-[16px] md1:text-[18px] md2:text-[20px] lg1:text-[22px] helvetica font-bold md2:leading-[32px]'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>

              <div className='flex justify-between w-full items-center'>
                <Link href='' className='hover:underline'>Learn More</Link>
                <div className='flex justify-end items-center gap-[8px]'>
                  <FontAwesomeIcon icon={faThumbsUp} className='size-[20px]'/>
                  <FontAwesomeIcon icon={faCommentDots} className='size-[20px] text-[#ff9f0d]'/>
                  <FontAwesomeIcon icon={faShareNodes} className='size-[20px]'/>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className='xl:w-[424px] flex flex-col'>
            <Image src='/Home-Images/home-blog-3.png' width={423} height={349} alt='Blog Image' className='card rounded-[10px]'/>

            <div className='flex flex-col gap-[10px] p-[15px] border-white border-[1px] border-t-0'>
              <p className='text-[#ff9f0d]'>10 February 2022</p>
              <p className='lg2:text-[24px] sm1:text-[16px] md1:text-[18px] md2:text-[20px] lg1:text-[22px] helvetica font-bold md2:leading-[32px]'>Curabitur rutrum velit ac congue malesuada</p>

              <div className='flex justify-between w-full items-center'>
                <Link href='' className='hover:underline'>Learn More</Link>
                <div className='flex justify-end items-center gap-[8px]'>
                  <FontAwesomeIcon icon={faThumbsUp} className='size-[20px]'/>
                  <FontAwesomeIcon icon={faCommentDots} className='size-[20px] text-[#ff9f0d]'/>
                  <FontAwesomeIcon icon={faShareNodes} className='size-[20px]'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home