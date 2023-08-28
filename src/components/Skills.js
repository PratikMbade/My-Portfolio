import React from 'react'
import Image from 'next/image'
import ReactImg from '../assets/react.png'
import tailwindImg from '../assets/Tailwind.png'
import javascriptImg from '../assets/javascript.png'
import nextImg from '../assets/NextJsCircle.png'
import cssImg from '../assets/css.png'
import cppImg from '../assets/cpp.png'
import expressImg from '../assets/Express.png'
import reduxImg from '../assets/redux.png'
import htmlImg from '../assets/html.png'
import pythonImg from '../assets/python.png'
import gitImg from '../assets/git.png'
import nodeImg from '../assets/node.png'
import figmaImg from '../assets/figma.png'
import {motion} from 'framer-motion'

const Skill = ({name,x,y}) =>{
    return (
        <motion.div className='flex items-center justify-between rounded-full cursor-pointer h-[80px] w-[80px] absolute lg:py-2 lg:px-4 md:text-sm md:py-1 md:px-3 md:px-3 xs:bg-transparent xs:dark:bg-transparent ' 
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        animate={{x:x,y:y}}
        transition={{duration: 1.5}}>
        <Image src={name} alt='react img' className='md:w-10 md:h-10 '/>
       </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center dark:text-light md:text-6xl sm:text-4xl'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
         lg:bg-circularLightLg lg:dark:bg-circularDarkLg
         md:bg-circularLightMd md:dark:bg-circularDarkMd 
         sm:bg-circularLightSm sm:dark:bg-circularDarkSm
         
         '>
             <motion.div className='flex items-center justify-between rounded-full cursor-pointer h-[80px] w-[80px]  lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px]' whileHover={{scale:1.15}}>
              <Image src={javascriptImg} alt='react img'/>
             </motion.div>

             <Skill name={tailwindImg} x='-5vw' y='-10vw'/>
             <Skill name={ReactImg} x='-18vw' y='1vw'/>
            
             <Skill name={nodeImg} x='0vw' y='12vw'/>
             <Skill name={pythonImg} x='-25vw' y='-18vw'/>
             <Skill name={reduxImg} x='15vw' y='-12vw'/>
             <Skill name={nextImg} x='32vw' y='-12vw'/>
             <Skill name={htmlImg} x='-1vw' y='-25vw'/>
             <Skill name={cssImg} x='19vw' y='-1vw'/>
             <Skill name={expressImg} x='-32vw' y='1vw'/>
             <Skill name={cppImg} x='-18vw' y='19vw'/>
             <Skill name={gitImg} x='10vw' y='23vw'/>
             <Skill name={figmaImg} x='31vw' y='13vw'/>
        </div>
    </> 
  )
}

export default Skills