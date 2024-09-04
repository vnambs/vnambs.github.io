'use client'
import React from 'react'
import styles from './style.module.scss'

interface IndexProps {
  index: number
  title: string
  manageModal: (isActive: boolean, index: number, clientX: number, clientY: number) => void
}

export default function index({ index, title, manageModal }: IndexProps) {
  return (
    <div
      onMouseEnter={e => {
        manageModal(true, index, e.clientX, e.clientY)
      }}
      onMouseLeave={e => {
        manageModal(false, index, e.clientX, e.clientY)
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  )
}
