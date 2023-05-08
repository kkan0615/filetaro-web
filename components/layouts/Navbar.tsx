'use client'

import { useEffect, useState } from 'react'
import { AppConfig } from '@/app.config'
import { AiOutlineDownload, AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import Drawer from '@/components/layouts/Drawer'

function Navbar() {
  const [ isScrolled, setIsScrolled ] = useState(false)
  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event: Event) => {
    if (window.scrollY === 0) setIsScrolled(false)
    else setIsScrolled(true)
  }

  // const toggleDrawer = () => {
  //   setIsDrawerOpen(prevState => !prevState)
  // }

  return (
    <>
      <nav
        className={
          `navbar fixed px-4 md:px-0 z-50 
        ${isScrolled ? 'bg-base-100 shadow-2xl' : 'bg-secondary text-secondary-content'} 
        transition duration-300 ease-in-out`
        }>
        <div className="mx-auto max-w-content w-full">
          <Link href="/" className="text-2xl font-bold">Filetaro</Link>
          <div className="mx-auto" />
          { /*<div className="mr-4 space-x-4 lg:block hidden">*/ }
          { /*<Link className="link link-hover font-bold" href="/documents">Documents</Link>*/ }
          { /*</div>*/ }
          {
            isScrolled &&
            <a
              href={ AppConfig.links.download }
              className="btn btn-sm btn-primary text-white lg:flex hidden"
              target="_blank"
            >
              <AiOutlineDownload className="mr-2 text-2xl" />
              Download
            </a>
          }
          { /*<button*/ }
          { /*  onClick={ toggleDrawer }*/ }
          { /*  className="btn btn-sm btn-ghost btn-square lg:hidden flex"*/ }
          { /*>*/ }
          { /*  <AiOutlineMenu className="text-xl" />*/ }
          { /*</button>*/ }
        </div>
      </nav>
      <Drawer isOpen={ isDrawerOpen } close={ () => setIsDrawerOpen(false) } />
    </>
  )
}

export default Navbar
