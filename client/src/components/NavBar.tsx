'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation' // Added usePathname
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../public/images/logo.png"

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [padding, setPadding] = useState('py-6')
  const router = useRouter()
  const currentPath = usePathname() // Get the current route

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleNavClick = useCallback(
    (e) => {
      e.preventDefault()
      const targetHref = e.target.getAttribute('href')
      const targetId = targetHref?.substring(2) // Extract the target ID

      if (currentPath === '/' && targetId) {
        // Smooth scroll for the same route
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else if (targetHref) {
        // Navigate to the new route
        router.push(targetHref)
      }

      if (isDrawerOpen) {
        toggleDrawer()
      }
    },
    [currentPath, isDrawerOpen, router]
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      if (scrollPosition > windowHeight * 0.01) {
        setPadding('py-2')
      } else {
        setPadding('py-6')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 bg-[#F2F5F6]`}>
      <div className={`flex justify-between items-center ${padding} px-5`}>
        <Link href="/" passHref>
          <div>
            <Image src={logo} alt="logo" className="lg:h-9 h-6 lg:w-32 w-24" />
          </div>
        </Link>

        {/* Nav Links - Hidden on small screens */}
        <div className="hidden lg:block">
          <ul className="flex gap-7 text-[#353535] font-semibold xl:text-2xl lg:text-lg">
            <li>
              <a href="/#home" onClick={handleNavClick}>Home</a>
            </li>
            <li>
              <a href="/#about" onClick={handleNavClick}>About Us</a>
            </li>
            <li>
              <a href="/#events" onClick={handleNavClick}>Community</a>
            </li>
            <li>
              <a href="/#join" onClick={handleNavClick}>Job</a>
            </li>
            <li>
              <a href="/#footer" onClick={handleNavClick}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Actions button - Hidden on small screens */}
        <div className="hidden lg:flex gap-5 font-mulish font-semibold xl:text-xl lg:text-base">
          <button className="bg-white rounded-full xl:py-4 xl:px-8 lg:py-3 lg:px-6 shadow border-[0.5px]">Log In</button>
          <button className="bg-[#C9A74E] rounded-full xl:py-4 xl:px-7 lg:py-3 lg:px-6">Sign Up</button>
        </div>

        {/* Hamburger menu - Visible on small screens */}
        <button
          className="lg:hidden text-[#043A53]"
          onClick={toggleDrawer}
          aria-label="Toggle menu"
        >
          {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Drawer - Visible when open on small screens */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col h-full justify-between py-6 px-4">
          <ul className="space-y-4 text-[#353535] font-semibold text-xl">
            <li>
              <a href="/#home" onClick={handleNavClick}>Home</a>
            </li>
            <li>
              <a href="/#about" onClick={handleNavClick}>About Us</a>
            </li>
            <li>
              <a href="/#events" onClick={handleNavClick}>Community</a>
            </li>
            <li>
              <a href="/#join" onClick={handleNavClick}>Job</a>
            </li>
            <li>
              <a href="/#footer" onClick={handleNavClick}>Contact</a>
            </li>
          </ul>
          <div className="space-y-4 font-mulish font-semibold text-lg">
            <button className="w-full bg-white rounded-full py-3 px-6 shadow border-[0.5px]">Log In</button>
            <button className="w-full bg-[#C9A74E] rounded-full py-3 px-6">Sign Up</button>
          </div>
        </div>
      </div>

      {/* Overlay - Visible when drawer is open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleDrawer}
        ></div>
      )}
    </nav>
  )
}
