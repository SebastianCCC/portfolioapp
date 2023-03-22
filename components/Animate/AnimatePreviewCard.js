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
      className={`grid grid-cols-1 gap-10 ${path != '/' && '2xl:grid-cols-4'} ${
        path != '/work/articles'
          ? 'sm:grid-cols-2 lg:grid-cols-3 2xl:gap-20'
          : 'lg:grid-cols-2 2xl:grid-cols-3'
      } w-full py-4`}
    >
      {children}
    </motion.div>
  )
}
