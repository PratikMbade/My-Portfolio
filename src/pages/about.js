import Head from "next/head";
import React,{useEffect, useRef} from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import developerImg from '../../public/images/profile/developerImg.png'
import Image from "next/image";
import { useInView,useMotionValue,useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimateNumbers =({value}) =>{
    const ref = useRef(null);
       
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:3000})
    const isInView = useInView(ref);

    useEffect(() =>{
      if(isInView){
        motionValue.set(value);
      }
    },[isInView,value,motionValue])

    useEffect(() =>{
      springValue.on("change",(latest) =>{
        if(ref.current && latest.toFixed(0) <= value){
          ref.current.textContent = latest.toFixed(0);
        }
      })
    },[springValue,value])


    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>PratikBade | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center md:overflow-y-hidden">
        <Layout className="pt-16">
          <AnimatedText
            className="!text-[80px] mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            text="Passion Fuels Purpose!"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex  flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg  font-bold uppercase text-dark/75 dark:text-light/75 lg:text-center">
                Biography
              </h2>
             
              <p className="font-medium dark:text-light lg:font-sm">
                Hi, I'm Pratik, a web developer  with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
                </p>
                <p className="my-4 font-medium dark:text-light lg:font-sm"> I believe that design is about more
                than just making things look pretty – it's about solving
                problems and creating intuitive, enjoyable experiences for
                users.
                </p>
                <p className="font-medium dark:text-light lg:font-sm">
                Whether I'm working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
                </p>
                </div>

                <div className="col-span-3 relative h-max rounded-2xl bg-light p-8 dark:bg-[rgb(10,16,32)] bg-light p-8  dark:border-light lg:w-[23rem] lg:object-contain md:order-1 md:col-span-8">
                
                <Image src={developerImg} alt="developerImg" className="w-full h-auto rounded-2xl"/>
                </div>

                <div className="col-span-2 flex flex-col items-center  justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                    <div className="flex flex-col   items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimateNumbers  value={50}/>+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied Clients</h2>

                    </div>
                    <div className="flex flex-col  items-end justify-center">
                        <span  className="inline-block text-7xl font-bold dark:text-light  md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimateNumbers   value={20}/>+
                        </span>
                        <h2  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">Projects Completed</h2>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <span  className="inline-block text-7xl font-bold dark:text-light  md:text-6xl sm:text-5xl xs:text-4xl">
                            <AnimateNumbers value={2}/>+
                        </span>
                        <h2  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">Year Of Experiences</h2>
                    </div>
                </div>
                
          </div>
 
                <Skills/>
                <Experience/>
                <Education/>
        </Layout>
      </main>
    </>
  );
};

export default about;
