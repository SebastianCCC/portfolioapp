import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const PreviewCard = ({ name, role, img, id }) => {
  return (
    <Link href={'work/' + id}>
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
            <Image
              lazyBoundary="0px"
              layout="fill"
              objectFit="cover"
              src={img}
              alt={'A Photo of me'}
            />
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
          className="text-md tracking-[2px]"
        >
          {name}
        </motion.h3>
      </article>
    </Link>
  )
}

export default PreviewCard
