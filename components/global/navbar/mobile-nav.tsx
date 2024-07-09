'use client'

import { useState } from 'react'

import { BookPayload } from '@/types'
import { List, Basket, Heart, User, X } from '@phosphor-icons/react/dist/ssr'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface MobileNavProps {
  books: BookPayload[]
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  className?: string
}

const navLinks = [
  { title: 'Inicio', url: '/' },
  { title: 'Libros', url: '/libros' },
  { title: 'Mercados de Acciones', url: '/mercados-de-acciones' },
  { title: 'Artículos', url: '/articulos' },
  { title: 'Contacto', url: '/contacto' }
]

const modalVariants = {
  hidden: {
    y: '-100vh'
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.3
    }
  },
  exit: {
    y: '-100vh',
    transition: {
      type: 'tween',
      duration: 0.3,
      delay: 0.3
    }
  }
}

const linkItemVariants = {
  hidden: { opacity: 0, y: '50%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: '50%',
    transition: {
      duration: 0.1,
      ease: 'easeOut'
    }
  }
}

const navLinksVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const MotionLink = motion(Link)

export const MobileNav = ({
  books,
  showModal,
  setShowModal,
  className
}: MobileNavProps) => {
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <motion.div
      className={cn(
        'fixed inset-0 flex h-screen items-center justify-center bg-stone-900'
      )}
      variants={modalVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <X
        className='absolute right-4 top-4 size-7 cursor-pointer text-white'
        onClick={() => setShowModal(false)}
      />
      <motion.div
        className='relative w-full'
        variants={navLinksVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='flex h-full flex-col items-center justify-center gap-8'>
          {navLinks.map((link, index) => (
            <MotionLink
              key={index}
              href={link.url}
              variants={linkItemVariants}
              onClick={() => setShowModal(false)}
              className='cursor-pointer text-2xl font-light text-white'
            >
              {link.title}
            </MotionLink>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
