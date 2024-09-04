import gsap from 'gsap'
import React, { useEffect, useRef, ReactElement } from 'react'

interface MagneticProps {
  children: ReactElement
}

export default function Magnetic({ children }: MagneticProps) {
  const magnetic = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!magnetic.current) return

    // Logging children for debugging
    // console.log(children)

    // QuickTo functions for smoother animations
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { height, width, left, top } = magnetic.current!.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x * 0.35)
      yTo(y * 0.35)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    // Adding event listeners
    magnetic.current.addEventListener('mousemove', handleMouseMove)
    magnetic.current.addEventListener('mouseleave', handleMouseLeave)

    // Clean-up event listeners on component unmount
    return () => {
      if (!magnetic.current) return
      magnetic.current.removeEventListener('mousemove', handleMouseMove)
      magnetic.current.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [children])

  return React.cloneElement(children, { ref: magnetic })
}
