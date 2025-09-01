import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'

const FAQ = () => {
  return (
    <div className=''>
        
        {/* Section 1 */}
        <div className="sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[100px] bg-[url('/hero-image.png')] bg-cover bg-center flex flex-col justify-center items-center gap-[20px] text-white">

            <h1 className='xl:text-[48px] sm1:text-[20px] sm2:text-[24px] md1:text-[28px] md2:text-[32px] lg1:text-[36px] lg2:text-[40px] xl:leading-[56px] font-bold helvetica'>FAQ Page</h1>

            <p className='xl:text-[20px] sm1:text-[14px] sm2:text-[15px] md1:text-[16px] md2:text-[17px] lg1:text-[18px] lg2:text-[19px] font-semibold'> <Link href='/'>Home</Link> &gt; <span className=' text-[#FF9F0D]'> <Link href='/Pages/FAQ'>FAQ</Link></span></p>
        </div>

        {/* Section 2 */}
        <div className='bg-white text-black flex flex-col justify-center items-center xl:py-[50px] py-[100px]'>
          <h1 className='text-[48px] font-bold helvetica'>Questions Looks Here</h1>
          <p className='text-[##4F4F4F]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
        </div>

        {/* Section 3 */}
        <div className='flex justify-center items-center flex-wrap gap-[20px] pb-[50px]'>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className='w-[500px] rounded-[8px] p-[20px] bg-[#FAF7F2]'>
            <AccordionTrigger className='text-[18px] font-bold'>How we serve food?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className='w-[500px] rounded-[8px] p-[20px] bg-[#FAF7F2]'>
            <AccordionTrigger className='text-[18px] font-bold'>How can we get in touch with you?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className='w-[500px] rounded-[8px] p-[20px] bg-[#FAF7F2]'>
            <AccordionTrigger className='text-[18px] font-bold'>How is our food quality?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className='w-[500px] rounded-[8px] p-[20px] bg-[#FAF7F2]'>
            <AccordionTrigger className='text-[18px] font-bold'>What will be delivered? And When?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className='w-[500px] rounded-[8px] p-[20px] bg-[#FAF7F2]'>
            <AccordionTrigger className='text-[18px] font-bold'>How do we give home delivery?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className='w-[500px] rounded-[8px] p-[20px] bg-[#FAF7F2]'>
            <AccordionTrigger className='text-[18px] font-bold'>Is this restaurant 24 hours open?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
    </div>
  )
}

export default FAQ