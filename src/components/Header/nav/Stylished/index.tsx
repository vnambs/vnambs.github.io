'use client'

import { acidGroteskFonts } from '@/fonts'
import { CodeCircle, HambergerMenu } from 'iconsax-react'
import Link from 'next/link'
import React, { useState, forwardRef, useEffect } from 'react'
const StylishedHeader = forwardRef<HTMLDivElement, any>((props, ref) => {
  const [openModalId, setOpenModalId] = useState<string | null>(null)

  const handleOpenModal = (id: string) => {
    setOpenModalId(id)
  }

  const handleCloseModal = () => {
    setOpenModalId(null)
  }
  useEffect(() => {
    console.log('Header ref:', ref) // Should log the ref object
  }, [ref])
  return (
    <>
      <header
        className={`navbar ${acidGroteskFonts.className} fixed top-6 z-50 hidden w-auto rounded-lg border border-[rgb(233,233,233)] bg-transparent font-light uppercase opacity-100 backdrop-blur-[30px] md:block`}
        {...props}
      >
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <span className="mr-4 block h-full w-full opacity-100">
                {/* <div
								className="w-16 h-6 bg-no-repeat bg-contain"
								style={{
									backgroundImage: 'url("/logo/logo.png")',
								}} // Replace with the path to your logo
							/> */}
                <CodeCircle size="32" color="#e9e9e9" variant="Broken" />
              </span>
            </Link>
          </div>
          <nav className="flex items-center space-x-4 opacity-100">
            <Link href="#my-services" className="text-white opacity-100">
              Services
            </Link>
            <span className="block h-5 w-px bg-[rgb(218,197,167)]" />
            <Link href="/docu/project" className="text-white opacity-100">
              Work
            </Link>
            <span className="block h-5 w-px bg-[rgb(218,197,167)]" />
            <Link href="/docu/about" className="text-white opacity-100">
              About
            </Link>
            <span className="block h-5 w-px bg-[rgb(218,197,167)]" />
            <Link href="/docu" className="text-white opacity-100">
              Blog
            </Link>
          </nav>
          <div className="ml-6 flex items-center opacity-100">
            {' '}
            <div className="text-white opacity-100" ref={ref}></div>
          </div>
        </div>
      </header>
    </>
  )
})
StylishedHeader.displayName = 'StylishedHeader'
export default StylishedHeader
