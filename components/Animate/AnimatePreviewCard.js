import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function AnimatePreviewCard({ children }) {
  const router = useRouter()
  const path = router.pathname

  const projectPathStyles = () => {
    switch (path) {
      case '/work/artwork':
      case '/work/articles':
        return 'md:grid-cols-2 2xl:grid-cols-3 sm:px-12 md:p-0'
      case '/work/apps':
        return 'sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:max-w-[730px] lg:max-w-full md:m-auto'
      case '/':
        return 'gap-4 w-[1024px] m-auto lg:w-full grid-cols-4 pr-4 lg:pr-0'
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className={`grid w-full py-4 ${projectPathStyles()}`}
    >
      {children}
    </motion.div>
  )
}
