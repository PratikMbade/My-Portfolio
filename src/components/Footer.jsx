import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base md:text-sm'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6 md:flex-col '>
            <span className='text-xl'>{new Date().getFullYear()}&copy;All Rights Reserved.</span>
             <div className=' flex items-center text-xl lg:py-2'>
                Build With <span >❤️</span>
             <Link href="/">By Pratik Bade</Link>
            </div>
            <Link href="contact" className='text-xl'>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer