import HomeHeader from '@/components/HomeHeader'
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image'
import {  faCheck, faStar } from '@fortawesome/free-solid-svg-icons'

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400', // Great Vibes only has 400
  variable: '--font-great-vibes', // Optional CSS variable
});

const Home = () => {
  return (
    <div>
      <HomeHeader />

      {/* Section 1 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex justify-between items-center'>

        {/* Left */}
        <div className='flex justify-start gap-[30px] items-center h-[500px]'>

          {/* 1 */}
          <div className='flex flex-col gap-5 justify-center items-center'>
            <div className='bg-white w-[1px] h-[100px]'></div>

            <Link href=''><FontAwesomeIcon icon={faFacebookF} className='size-[20px]' /></Link>

            <Link href=''><FontAwesomeIcon icon={faTwitter} className='size-[20px] text-[#FF9F0D]' /></Link>

            <Link href=''><FontAwesomeIcon icon={faPinterestP} className='size-[20px]' /></Link>

            <div className='bg-white w-[1px] h-[100px]'></div>
          </div>

          {/* 2 */}
          <div className='flex flex-col gap-[10px]'>
            <h1 className={`${greatVibes.className} text-[#FF9F0D] text-[32px]`}>Its Quick & Amusing!</h1>
            <h1 className='text-[60px] leading-[68px] font-bold helvetica w-[472px]'><span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality</h1>
            <p className='leading-[24px] w-[418px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>

            <Link href='' className='btn-fill border-[#ff9f0d] border-[1px] rounded-[30px] text-center px-[32px] py-[10px] mt-[15px] w-[190px]'>See Menu</Link>
          </div>
        </div>

        {/* Right */}
        <Image src='/Home-Images/home-1.png' alt='Hero Image' width={750} height={670}/>
      </div>

      {/* Section 2 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex justify-between items-center'>

        {/* Left */}
        <div className='flex flex-col gap-[10px] h-[660px]'>
          <h1 className={`${greatVibes.className} text-[#FF9F0D] text-[32px]`}>About Us</h1>
          <h1 className='text-[48px] leading-[56px] font-bold helvetica w-[446px]'><span className='text-[#FF9F0D]'>We</span> Create the best foody product</h1>

          <p className='leading-[24px] w-[526px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

          <ul className='pl-[10px] mt-[10px]'>
            <li><FontAwesomeIcon icon={faCheck} className='size-[15px] inline-flex animate-bounce mr-[10px]' /> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
            <li className='my-[10px]'><FontAwesomeIcon icon={faCheck} className='size-[15px] inline-flex animate-bounce mr-[10px]' /> Quisque diam pellentesque bibendum non dui volutpat fringilla</li>
            <li><FontAwesomeIcon icon={faCheck} className='size-[15px] inline-flex animate-bounce mr-[10px]' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>

          <Link href='' className='btn-fill border-[#ff9f0d] border-[1px] rounded-[30px] text-center px-[32px] py-[10px] mt-[15px] w-[190px]'>Read More</Link>
        </div>

        {/* Right */}
        <div className='home-grid'>
          <Image src='/Home-Images/home-2.png' alt='Home Image 2' width={660} height={330} className='col-start-1 col-end-3 row-start-1 row-end-2 ' />

          <Image src='/Home-Images/home-3.png' alt='Home Image 3' width={330} height={330} className='col-start-1 col-end-2 row-start-2 row-end-3' />

          <Image src='/Home-Images/home-4.png' alt='Home Image 4' width={330} height={330} className='col-start-2 col-end-3 row-start-2 row-end-3' />
        </div>
      </div>

      {/* Section 3 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col gap-[10px] justify-center items-center'>

        <h1 className={`${greatVibes.className} text-[#FF9F0D] text-[32px]`}>Food Category</h1>

        <h1 className='text-[48px] leading-[56px] font-bold helvetica w-[446px]'><span className='text-[#FF9F0D]'>Ch</span>oose Food Item</h1>

        <div className='flex justify-center items-center gap-[20px]'>

          <Image src='/Home-Images/home-5.png' alt='Home Image 5' width={305} height={328}/>
          <Image src='/Home-Images/home-6.png' alt='Home Image 6' width={305} height={328}/>
          <Image src='/Home-Images/home-7.png' alt='Home Image 7' width={305} height={328}/>
          <Image src='/Home-Images/home-8.png' alt='Home Image 8' width={305} height={328}/>
        </div>
      </div>

      {/* Section 4 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex justify-between items-center'>

        {/* Left */}
        <div className='flex flex-col gap-[10px] justify-start items-start'>
          
          {/* 1 */}
          <div className='flex justify-start items-end gap-[10px] flex-wrap'>
            <Image src='/Home-Images/home-9.png' alt='Home Image 9' width={362} height={356} />
            <Image src='/Home-Images/home-10.png' alt='Home Image 10' width={281} height={231} />
          </div>

          {/* 2 */}
          <div className='flex justify-start items-start gap-[13px] flex-wrap'>
            <Image src='/Home-Images/home-11.png' alt='Home Image 11' width={244} height={306} />
            <Image src='/Home-Images/home-12.png' alt='Home Image 12' width={221} height={226} />

            <div className='flex flex-col gap-[5px]'>
              <Image src='/Home-Images/home-13.png' alt='Home Image 13' width={161} height={168} />
              <Image src='/Home-Images/home-14.png' alt='Home Image 14' width={161} height={168} />
            </div>
          </div>
        </div>  


        {/* Right */}
        <div className='flex flex-col gap-[10px] w-[526px]'>
          <h1 className={`${greatVibes.className} text-[#FF9F0D] text-[32px]`}>Why Choose Us</h1>
          <h1 className='text-[48px] leading-[56px] font-bold helvetica w-[433px]'><span className='text-[#FF9F0D]'>Ex</span>tra ordinary taste And Experience</h1>

          <p className='leading-[24px] w-[526px] my-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

          <div className='flex justify-start items-center gap-[20px]'>

            {/* 1 */}
            <div className='flex justify-center flex-col items-center gap-[10px]'>
              <div className='w-[100px] h-[100px] flex justify-center items-center bg-[#FF9F0D] rounded-[10px]'>
                <Image src='/Hamburger.png' width={56} height={56} alt='Hamburger' />
              </div>

              <p className='text-[18px]'>Fast Food</p>
            </div>

            {/* 2 */}
            <div className='flex justify-center flex-col items-center gap-[10px]'>
              <div className='w-[100px] h-[100px] flex justify-center items-center bg-[#FF9F0D] rounded-[10px]'>
                <Image src='/Cookie.png' width={56} height={56} alt='Cookie' />
              </div>

              <p className='text-[18px]'>Lunch</p>
            </div>

            {/* 3 */}
            <div className='flex justify-center flex-col items-center gap-[10px]'>
              <div className='w-[100px] h-[100px] flex justify-center items-center bg-[#FF9F0D] rounded-[10px]'>
                <Image src='/Wine.png' width={56} height={56} alt='Wine' />
              </div>

              <p className='text-[18px]'>Dinner</p>
            </div>
          </div>

          <div className='bg-white w-[374px] h-[93px] text-black flex justify-center gap-[30px] items-center rounded-[6px] border-l-[8px] border-[#FF9F0D] mt-[15px] animate-pulse'>
            <p className='text-[#FF9F0D] text-[48px] font-bold'>30+</p>
            <p className='text-[20px] leading-[24px] '>Years of <br /><span className='font-bold text-[24px] helvetica'>Experienced</span></p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-full  my-[50px] bg-[url('/Home-Images/home-section-bg.png')] bg-cover bg-center">
        <div className='bg-[#121212] w-full  opacity-90'>
          <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex justify-between items-center'>

            {/* 1 */}
            <div className='flex flex-col gap-[10px] justify-center items-center'>
              <Image src='/Home-Images/Group.png' width={120} height={120} alt='Professional Chefs' />
              <p className='font-bold text-[24px] helvetica'>Professional Chefs</p>
              <p className='font-bold helvetica text-[40px]'>420</p>
            </div>

            {/* 2 */}
            <div className='flex flex-col gap-[10px] justify-center items-center'>
              <Image src='/Home-Images/Group (1).png' width={120} height={120} alt='Item of Food' />
              <p className='font-bold text-[24px] helvetica'>Item of Food</p>
              <p className='font-bold helvetica text-[40px]'>320</p>
            </div>

            {/* 3 */}
            <div className='flex flex-col gap-[10px] justify-center items-center'>
              <Image src='/Home-Images/Group (2).png' width={120} height={120} alt='Years of Experienced' />
              <p className='font-bold text-[24px] helvetica'>Years of Experienced</p>
              <p className='font-bold helvetica text-[40px]'>30 +</p>
            </div>

            {/* 4 */}
            <div className='flex flex-col gap-[10px] justify-center items-center'>
              <Image src='/Home-Images/Group (3).png' width={120} height={120} alt='Happy Customers' />
              <p className='font-bold text-[24px] helvetica'>Happy Customers</p>
              <p className='font-bold helvetica text-[40px]'>220</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col justify-center items-center gap-[15px]'>

        <h1 className={`${greatVibes.className} text-[#FF9F0D] text-[32px]`}>Choose & pick</h1>
        <h1 className='text-[48px] leading-[56px] font-bold helvetica'><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h1>

        <div className='flex justify-between items-center text-[20px] w-[1000px]'>
          <p className='text-[#FF9F0D] font-bold'>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
          <p>Dessert</p>
          <p>Drink</p>
          <p>Snack</p>
          <p>Soups</p>
        </div>

        <div className='flex justify-between items-center w-full'>
          <div className="bg-[url('/Home-Images/menu-1-bg.png')] bg-cover bg-center w-[515px] h-[515px] flex justify-center items-center">
            <Image src='/Home-Images/menu-1.png' width={366} height={362} alt='Menu Item 1' />
          </div>

          <div className='flex flex-col gap-[10px]'>

            {/* 1 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-9.jpg' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='w-[296px] h-[79px]'>
                <p className='text-[20px] font-bold'>Lettuce Leaf</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>

            {/* 2 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-7.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='w-[296px] h-[79px]'>
                <p className='text-[20px] font-bold'>Fresh Breakfast</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>14.5$</p>
              </div>
            </div>

            {/* 3 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-5.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='w-[296px] h-[79px]'>
                <p className='text-[20px] font-bold'>Mild Butter</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>

            {/* 4 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-3.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='w-[296px] h-[79px]'>
                <p className='text-[20px] font-bold'>Fresh Bread</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[10px]'>

            {/* 1 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-8.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='w-[296px] h-[79px]'>
                <p className='text-[20px] font-bold'>Lettuce Leaf</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>

            {/* 2 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-6.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='w-[296px] h-[79px]'>
                <p className='text-[20px] font-bold'>Fresh Breakfast</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>14.5$</p>
              </div>
            </div>

            {/* 3 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-4.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='w-[296px] h-[79px]'>
                <p className='text-[20px] font-bold'>Mild Butter</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>

            {/* 4 */}
            <div className='flex justify-start items-start gap-[10px]'>
              <Image src='/Home-Images/menu-2.png' width={80} height={79} alt='Menu Item' className='rounded-[10px]'/>
              <div className='w-[296px] h-[79px]'>
                <p className='text-[20px] font-bold'>Fresh Bread</p>
                <p className='text-[14px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                <p className='text-[18px] text-[#FF9F0D] font-bold'>12.5$</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col justify-center items-center gap-[15px]'>
        <h1 className={`${greatVibes.className} text-[#FF9F0D] text-[32px]`}>Chefs</h1>
        <h1 className='text-[48px] leading-[56px] font-bold helvetica'><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h1>

        <div className='w-full flex justify-between items-center'>
          <Image src='/Home-Images/chef-1.png' width={312} height={391} alt='Our Chef' />

          <Image src='/Home-Images/chef-2.png' width={312} height={391} alt='Our Chef' />

          <Image src='/Home-Images/chef-3.png' width={312} height={391} alt='Our Chef' />

          <Image src='/Home-Images/chef-4.png' width={312} height={391} alt='Our Chef' />
        </div>

        <Link href='' className='border-[1px] border-[#FF9F0D] rounded-[25px] px-[32px] py-[10px] mt-[8px] btn-fill '>See More</Link>
      </div>

      {/* Section 8 */}
      <div className='sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[50px] flex flex-col gap-[15px] mt-[10px] justify-center items-center'>
        <h1 className={`${greatVibes.className} text-[#FF9F0D] text-[32px]`}>Testimonials</h1>
        <h1 className='text-[48px] leading-[56px] font-bold helvetica'>What our client are saying</h1>

        <div className='w-[868.47px] h-[450.89px] bg-white text-black relative flex flex-col gap-[10px] justify-center items-center mt-[70px]'>
          <Image src='/Home-Images/client.png' width={132.92} height={133.97} alt='Client Image' className='top-[-70px] absolute' />

          <Image src='/Quotes.png' width={47.97} height={47.99} alt='Quotes' className='mt-[50px]' />

          <p className='helvetica w-[696.57px] text-[18px] text-center mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

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

    </div>
  )
}

export default Home