"use client";
import React from 'react'
import { BsArrowDownRight } from "react-icons/bs"
import Link from 'next/link';
import { Description } from '@radix-ui/react-dialog';

const services = [
  {
    num: '01',
    title: 'Web Development',
    href: '',
    description: "I can build a website from scratch or update your existing website. I can also help you with your website's SEO.",
  },
  {
    num: '02',
    title: 'UI/UX Design',
    href: '',
    description: "I can build a website from scratch or update your existing website. I can also help you with your website's SEO.",
  },
  {
    num: '03',
    title: 'Logo Design',
    href: '',
    description: "I can build a website from scratch or update your existing website. I can also help you with your website's SEO.",
  },
  {
    num: '04',
    title: 'SEO',
    href: '',
    description: "I can build a website from scratch or update your existing website. I can also help you with your website's SEO.",
  },
] 

import { motion } from 'framer-motion'; 

function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn"
            }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {
            services.map((service, index) => (
              <div
                key={index}
                className='flex-1 flex flex-col gap-6 justify-center group'
              >
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300'>{service.num}</div>

                  <Link
                    href={service.href}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent flex justify-center items-center transition-all duration-300 hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>

                {/* heading */}
                <h2
                  className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300'
                >
                  {service.title}
                </h2>

                {/* description */}
                <p className='text-white/60 group-hover:text-white transition-all duration-300'>{service.description}</p>

                {/* border */}
                <div className='border border-b border-white/20 w-full'></div>
              </div>
            ))
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services