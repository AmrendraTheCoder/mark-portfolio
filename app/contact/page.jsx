"use client";
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarked } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+91 234 567 8903'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'cto@envelope.info'
  },
  {
    icon: <FaMapMarked />,
    title: 'Address',
    description: '1234 Street Name, City Name, Rajasthan'
  }
];

import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent ">Let's work together!</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque tenetur in quasi saepe.
              </p>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="firstname" className="text-white">First Name</label>
                  <Input id="firstname" type="text" placeholder="First Name" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastname" className="text-white">Last Name</label>
                  <Input id="lastname" type="text" placeholder="Last Name" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-white">Email Address</label>
                  <Input id="email" type="email" placeholder="Email Address" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-white">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="Phone Number" />
                </div>
              </div>
              {/* Select Dropdown */}
              <div className="flex flex-col">
                <label htmlFor="service" className="text-white">Select a Service</label>
                <Select id="service">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">Graphic Designing</SelectItem>
                      <SelectItem value="mst">UI/UX Design</SelectItem>
                      <SelectItem value="lst">SEO</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* Textarea */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-white">Your Message</label>
                <Textarea id="message" className="h-[200px]" placeholder="Type your message here." />
              </div>
              {/* Submit Button */}
              <Button size='md' type="submit" className="max-w-40">Send Message</Button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="flex-1 flex flex-col items-center xl:items-start xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className='flex flex-col gap-10'>
              {
                info.map((item, index) => {
                  return (
                    <li key={index} className="flex gap-6 items-center">
                      <div className='w-[72px] h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center'>
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className='flex-1'>
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
