import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function AnimatePreviewCard({ children }) {
  const router = useRouter()
  const path = router.pathname

  const container = {
    hidden: { width: 0 },
    show: {
      width: '100%',
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
      className={`grid grid-cols-1 gap-6 ${
        path != '/'
          ? 'sm:grid-cols-2 2xl:grid-cols-4'
          : 'sm:gap-80 lg:gap-6 2xl:gap-20 sm:grid-cols-3 overflow-x-auto'
      } ${
        path != '/work/articles' ? 'lg:grid-cols-3' : 'lg:grid-cols-2 2xl:grid-cols-3'
      } w-full py-4`}
    >
      {children}
    </motion.div>
  )
}
