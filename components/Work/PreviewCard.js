import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const PreviewCard = ({ name, title, role, img, id, icon, increaseDelay }) => {
  const BreakPointWidth = typeof window !== 'undefined' && window.innerWidth >= 1024
  const router = useRouter()
  const path = router.pathname
  const itemImg = {
    hidden: { width: 0 },
    show: { width: '100%', transition: { duration: 1 } },
  }

  const itemText = {
    hidden: { x: -50, opacity: 0 },
    show: (delay) => ({ x: 0, opacity: 1, transition: { delay: delay / 2.5 + 0.8, duration: 1 } }),
  }

  return (
    <motion.article
      className={`group min-w-fit ${
        path == '/' && 'sm:min-w-[300px]'
      } xl:min-w-[350px] cursor-pointer`}
    >
      <motion.div
        className="max-w-full"
        initial={{ width: 0 }}
        whileInView={{ width: '100%', transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <motion.div
          variants={itemImg}
          className="group-hover:scale-105 relative select-none pointer-events-none w-full h-[200px] xl:h-[300px]"
        >
          {img ? (
            <Image
              sizes="100vw"
              fill
              src={img}
              alt={'Project: ' + name}
              className="object-cover rounded-md"
            />
          ) : icon ? (
            <div className="w-full h-full dark:text-sec_addition dark:bg-tertiary bg-secondary overflow-hidden flex flex-col justify-center items-center rounded-md">
              {icon} <h2 className="font-medium tracking-[2px]">{title}</h2>
            </div>
          ) : (
            <div className="bg-secondary dark:bg-sec_tertiary w-full h-full rounded-md"></div>
          )}
        </motion.div>
      </motion.div>
      <motion.p
        custom={increaseDelay}
        variants={itemText}
        className="text-[16px] dark:text-tertiary mt-[20px] mb-2"
      >
        {role}
      </motion.p>
      <motion.h3 custom={increaseDelay} variants={itemText} className="text-md tracking-[2px]">
        {name}
      </motion.h3>
    </motion.article>
  )
}

export default PreviewCard
