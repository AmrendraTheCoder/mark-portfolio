"use client";
import React from 'react'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';

// about data
const about = [
  {
    title: 'About Me',
    description: 'I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with the following technologies:',
    info: [
      {
        fieldName: 'Name',
        fieldValue: 'Aurthur Leywin'
      },
      {
        fieldName: 'Phone Number',
        fieldValue: '+91 1234 54321'
      },
      {
        fieldName: 'Experience',
        fieldValue: '2+ Years'
      },
      {
        fieldName: 'Skype',
        fieldValue: 'Aurthur.01'
      },
      {
        fieldName: 'Nationality',
        fieldValue: 'Indian'
      },
      {
        fieldName: 'Email',
        fieldValue: 'aurthurleywin@porfolio.in'
      },
      {
        fieldName: 'Freelance',
        fieldValue: 'Available'
      },
      {
        fieldName: 'Languages',
        fieldValue: 'English, Hindi'
      },
    ]
  }
]

// experience data
const experience = [
  {
    icon: '',
    title: 'My Experience',
    description: 'Lorem147orem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    items: [
      {
        company: 'XYZ',
        position: 'Full Stack Developer',
        duration: '2021 - Present',
        achievements:
          'Built multiple websites using HTML, CSS, JavaScript, React and Next.js. Worked on various projects related to software development, including web applications, web APIs, and mobile apps. Participated in various hackathons and competitions to showcase my skills and knowledge'
      },
      {
        company: 'ABC',
        position: 'Software Developer',
        duration: '2020 - 2021',
        achievements:
          'Built multiple websites using HTML, CSS, JavaScript, React and Next.js. Worked on various projects related to software development, including web applications, web APIs, and mobile apps. Participated in various hackathons and competitions to showcase my skills and knowledge'
      },
      {
        company: 'DEF',
        position: 'Frontend Developer',
        duration: '2019 - 2020',
        achievements:
          'Built multiple websites using HTML, CSS, JavaScript, React and Next.js. Worked on various projects related to software development, including web applications, web APIs, and mobile apps. Participated in various hackathons and competitions to showcase my skills and knowledge'
      },
      {
        company: 'XYZ',
        position: 'Full Stack Developer',
        duration: '2021 - Present',
        achievements:
          'Built multiple websites using HTML, CSS, JavaScript, React and Next.js. Worked on various projects related to software development, including web applications, web APIs, and mobile apps. Participated in various hackathons and competitions to showcase my skills and knowledge'
      },
      {
        company: 'ABC',
        position: 'Software Developer',
        duration: '2020 - 2021',
        achievements:
          'Built multiple websites using HTML, CSS, JavaScript, React and Next.js. Worked on various projects related to software development, including web applications, web APIs, and mobile apps. Participated in various hackathons and competitions to showcase my skills and knowledge'
      },
      {
        company: 'DEF',
        position: 'Frontend Developer',
        duration: '2019 - 2020',
        achievements:
          'Built multiple websites using HTML, CSS, JavaScript, React and Next.js. Worked on various projects related to software development, including web applications, web APIs, and mobile apps. Participated in various hackathons and competitions to showcase my skills and knowledge'
      }
    ]
  }
]

// education data
const education = [
  {
    icon: '',
    title: 'My Experience',
    description: 'Lorem147orem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    items: [
      {
        institution: 'XYZ',
        degree: 'Bachelor of Technology',
        duration: '2023 - Present',
      },
      {
        institution: 'ABC',
        degree: 'CBA School',
        duration: '2019 - 2023',
      },
      {
        institution: 'DEF',
        degree: 'FED School',
        duration: '2017 - 2019',
      },
      {
        institution: 'GHI',
        degree: 'IHG School',
        duration: '2015 - 2017',
      }
    ]
  }
]

// skills data
const skills = [
  {
    title: 'My Skills',
    description: 'Lorem147orem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib',
    skillList: [
      {
        icon: <FaHtml5 />,
        name: 'HTML 5',
      },
      {
        icon: <FaCss3 />,
        name: 'CSS 3',
      },
      {
        icon: <FaJs />,
        name: 'JavaScript',
      },
      {
        icon: <FaReact />,
        name: 'React',
      },
      {
        icon: <FaFigma />,
        name: 'Figma',
      },
      {
        icon: <FaNodeJs />,
        name: 'Node.js',
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind CSS',
      },
      {
        icon: <SiNextdotjs />,
        name: 'Next.js',
      }
    ]
  }
]

import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList
} from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';


function Resume() {
  return (
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
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'>

          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>

            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className='min-h-[70vh] w-full'>

            {/* experience */}
            <TabsContent value="experience" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience[0].title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience[0].description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience[0].items.map((items, i) => {
                      return (
                        <li
                          key={i}
                          className='bg-[#27272c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '
                        >
                          <span className='text-accent'>
                            {items.duration}
                          </span>
                          <h3 className='text-xl max-w-[250px] min-h-[60px] text-center lg:text-left '>
                            {items.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dots */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent' ></span>
                            <p className='text-white/60'>{items.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education[0].title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education[0].description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education[0].items.map((items, i) => {
                      return (
                        <li
                          key={i}
                          className='bg-[#27272c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '
                        >
                          <span className='text-accent'>
                            {items.duration}
                          </span>
                          <h3 className='text-xl max-w-[250px] min-h-[60px] text-center lg:text-left '>
                            {items.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dots */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent' ></span>
                            <p className='text-white/60'>{items.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skill" className='w-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills[0].title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills[0].description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {
                    skills[0].skillList.map((skill, i) => {
                      return (
                        <li key={i} className='flex items-center gap-3'>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300 text-white/60'>
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className='capitalize'>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about[0].title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about[0].description}</p>
              </div>
              <ul className='my-4 grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                {
                  about[0].info.map((detail, i) => {
                    return (
                      <li key={i} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className=' text-white/60'>{detail.fieldName}</span>
                        <p className='text-xl'>{detail.fieldValue}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume