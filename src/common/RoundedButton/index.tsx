import gsap from 'gsap'
import React from 'react'
import { ReactNode, useEffect, useRef } from 'react'
import Magnetic from '../Magnetic'
import styles from './style.module.scss'

interface RoundedButtonProps {
  children: ReactNode
  backgroundColor?: string
  [key: string]: any // Allows for any other attributes (like HTML div props)
}

export default function RoundedButton({ children, backgroundColor = '#455CE9', ...attributes }: RoundedButtonProps) {
  const circle = useRef<HTMLDivElement | null>(null)
  const timeline = useRef<gsap.core.Timeline | null>(null)
  let timeoutId: number | null = null

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
    timeline.current
      .to(circle.current, { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' }, 'enter')
      .to(circle.current, { top: '-150%', width: '125%', duration: 0.25 }, 'exit')
  }, [])

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId)
    if (timeline.current) {
      timeline.current.tweenFromTo('enter', 'exit')
    }
  }

  const manageMouseLeave = () => {
    timeoutId = window.setTimeout(() => {
      if (timeline.current) {
        timeline.current.play()
      }
    }, 300)
  }

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => {
          manageMouseEnter()
        }}
        onMouseLeave={() => {
          manageMouseLeave()
        }}
        {...attributes}
      >
        {children}
        <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
      </div>
    </Magnetic>
  )
}
