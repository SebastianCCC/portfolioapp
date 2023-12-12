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
        return 'grid-cols-1 2xl:grid-cols-2 max-w-[800px] 2xl:max-w-full m-auto'
      case '/work/apps':
        return 'grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      case '/':
        return 'w-[1112px] m-auto lg:w-full grid-cols-4 pr-4 lg:pr-0'
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
      className={`grid w-full gap-4 py-4 ${projectPathStyles()}`}
    >
      {children}
    </motion.div>
  )
}
