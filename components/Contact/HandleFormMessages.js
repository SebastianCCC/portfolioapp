import { motion } from 'framer-motion'

export default function HandleFormMessages({ message }) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          delay: 1.5,
          duration: 2,
        },
      }}
      className="w-full mt-20"
    >
      <h1 className="text-[22px]">{message.title}</h1>
      <p className="py-2 text-base">{message.description}</p>
    </motion.div>
  )
}
