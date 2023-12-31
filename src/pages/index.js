import Layout from "@/components/Layout";
import * as React from 'react'
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Hero from "../../public/images/profile/pratik.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { BlobImg, LinkArrow } from "@/components/icons";
import HireMe from "@/components/HireMe";
import blob from "../../public/images/profile/blob.png";
import { use, useEffect, useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {



  return(
    <>

       <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <TransitionEffect/>

   
        <main className="flex items-center text-dark w-full  min-h-screen dark:text-light -z-10  ">
     
          <Layout className="pt-0 md:p-16 sm:pt-8 ">
      
            <div className="flex first-line:flex items-center justify-between w-full lg:flex-col">
 
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center
             md:hidden sm:hidden">
                <AnimatedText
                  text="Turning Vision Into Reality With Code And Design."
                  className="!text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!5xl sm:!text-3xl"
                />
                <p>
                  As a skilled full-stack developer, I am dedicated to turning
                  ideas into innovative web applications. Explore my latest
                  projects and articles, showcasing my expertise in React.js and
                  web development.
                </p>
                <div className="flex items-center self-start mt-2 lg:self-center">
                  <Link
                    href="/dummy.pdf"
                    target={"_blank"}
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark transition-all  border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                    download={true}
                  >
                    Resume
                    <LinkArrow className={"w-6 ml-2"} />{" "}
                  </Link>
                  <Link
                    href="mailto:pratikmbade18@gmail.com"
                    target={"_blank"}
                    className="ml-4 font-medium capitalize text-lg text-dark underline dark:text-light"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            <div className="relative">
                <div>
                  {" "}
                  <BlobImg className="absolute lg:hidden md:block md:left-[30%] md:-top-10 md:translate-x-[-50%] md:w-[200%] -z-10 w-[700px] h-auto -right-12" />
                </div>
                <Image src={Hero} alt="profilePhoto" priority  className="w-full h-auto lg:hidden md:inline-block md:w-full" />
              </div>


              {/* for mobile screen */}

              <div className="w-1/2  flex-col items-center self-center hidden md:flex sm:flex lg:w-full md:text-center">
                <AnimatedText
                  text="Turning Vision Into Reality With Code And Design."
                  className="!text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!5xl sm:!text-3xl"
                />
                <p className="my-4 text-base font-medium md:text-sm sm:text-sm">
                  As a skilled full-stack developer, I am dedicated to turning
                  ideas into innovative web applications. Explore my latest
                  projects and articles, showcasing my expertise in React.js and
                  web development.
                </p>
                <div className="flex items-center self-start mt-2 md:self-center sm:self-center">
                  <Link
                    href="/dummy.pdf"
                    target={"_blank"}
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark transition-all  border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base dark:text-dark"
                    download={true}
                  >
                    Resume
                    <LinkArrow className={"w-6 ml-2"} />{" "}
                  </Link>
                  <Link
                    href="mailto:pratikmbade18@gmail.com"
                    target={"_blank"}
                    className="ml-4 font-medium capitalize text-lg text-dark underline dark:text-light"
                  >
                    Contact
                  </Link>
                </div>
              </div>
             
             
            </div>
          </Layout>
          <HireMe />
        </main>

      
    </>
  )
   

  

}
