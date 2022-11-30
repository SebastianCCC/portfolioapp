import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const PreviewCard = ({ name, role, img, id, icon }) => {
  const { pathname } = useRouter()
  return (
    <article className="group min-w-fit xl:min-w-[350px] cursor-pointer">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          delay: 0.2,
          duration: 3.5,
        }}
        className="group-hover:scale-105 relative select-none pointer-events-none w-full h-[200px] xl:h-[300px]"
      >
        {img ? (
          <Image sizes="100vw" fill src={img} alt={'Project: ' + name} className="object-cover" />
        ) : icon ? (
          <div className="w-full h-full flex justify-center items-center">{icon}</div>
        ) : (
          <div className="bg-secondary w-full h-full"></div>
        )}
      </motion.div>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          delay: 0.8,
          duration: 2,
        }}
        className="text-[16px] dark:text-tertiary mt-[20px] mb-2"
      >
        {role}
      </motion.p>
      <motion.h3
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          delay: 1.5,
          duration: 2,
        }}
        className={`text-md tracking-[2px] ${icon && 'text-center'}`}
      >
        {name}
      </motion.h3>
    </article>
  )
}

export default PreviewCard
