import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BeatLoader } from "react-spinners";


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: 'font-mont',

})

export default function App({ Component, pageProps }) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);


    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, []);

  return (
    <>


      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>




      {loading ? (
        <div className="w-[100vw] h-[100vh] bg-white dark:bg-[rgb(10,16,32)] overflow-hidden z-30 flex justify-center transition-all duration-400 ease-in items-center fixed top-0 left-0 bottom-0">
          <div className="flex items-center justify-between h-[60px] w-[280px] font-sans font-bold overflow-hidden text-xl font-lg  last:block ">
            <span className="text-dark dark:text-white ">Student, </span>
            <span className="text-dark dark:text-white ">Developer, </span>
            <span className="text-dark dark:text-white ">Engineer</span>
            <div className="flex items-center justify-center">
              <BeatLoader size={20} width={300} height={5} color={'#5c0ec7'} margin={5} />
            </div>

          </div>
        </div>
      ) :
        (
          <main className={`${montserrat.variable} font-mont bg-light dark:bg-[rgb(10,16,32)]   
          
           w-full min-h-screen`}>

            <Navbar />

            <AnimatePresence mode='wait'>
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>


            <Footer />

          </main>

        )
      }

    </>
  )
}
