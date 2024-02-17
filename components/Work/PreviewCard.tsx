import { format } from 'date-fns'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useRef, useState } from 'react'
import { DATE_FORMAT_DA } from '../../config'
import { getColorFromImage } from '../../utils/getColorFromImage'
import { rgbToHex } from '../../utils/rgbToHex'
import { WorkIcon } from '../Links/images'
import SkeletonLoader from '../SkeletonLoader'

type PreviewCardProps = {
  name: string
  role?: string | string[] | null
  img?: string | null
  id?: string
  href: string
  externalLink?: boolean
  endDate: Date | string | number | null
  collapsed?: boolean
}

const PreviewCard = ({
  name,
  role,
  img,
  id,
  href,
  externalLink,
  endDate,
  collapsed = false,
}: PreviewCardProps) => {
  const [loaded, setLoaded] = useState(false)

  let ref = useRef(null)
  const color = getColorFromImage(ref)
  const hexColor = rgbToHex(color?.[0], color?.[1], color?.[2])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useTransform(mouseX, [-100, 100], [-3, 3], { clamp: false })
  const y = useTransform(mouseY, [-100, 100], [-3, 3], { clamp: false })
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { x, y, width, height } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - x - width / 2)
    mouseY.set(clientY - y - height / 2)
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  }

  return (
    <motion.div
      className='relative rounded-md overflow-hidden'
      style={{ translateX: x, translateY: y, transition: 'transform 0.5s ease-out' }}
      initial={fadeIn.hidden}
      whileInView={fadeIn.show}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      <motion.div
        variants={fadeIn}
        className={`w-full ${collapsed ? 'h-[220px] xSmall:h-[380px]' : 'h-[380px]'}`}
      >
        {id === 'apps' ? (
          <Link href={`${!!href ? href + '/' : ''}${id || ''}`} rel='noopener noreferrer'>
            <div className='bg-secondary/50 dark:bg-sec_tertiary w-full h-full dark:border-tertiary/50 border-secondary/70 border-[0.5px] rounded-md cursor-pointer flex flex-col items-center justify-center py-12 select-none'>
              <div className='scale-125'>
                <WorkIcon />
              </div>
              <h3 className='text-md font-bold mt-2'>{name}</h3>
              <p className='opacity-80'>{role}</p>
            </div>
          </Link>
        ) : (
          <SkeletonLoader
            collapsed={collapsed}
            loaded={loaded}
            projectColor={hexColor}
            backgroundImage={
              <Image
                ref={ref}
                fill
                src={img || ''}
                alt={'Project: ' + name}
                className='object-cover'
                onLoad={() => setLoaded(true)}
              />
            }
          >
            <Link
              href={`${!!href ? href + '/' : ''}${id || ''}`}
              target={`${!!externalLink ? '_blank' : '_self'}`}
              rel='noopener noreferrer'
              className='absolute inset-0'
            >
              <div
                className={`px-4 flex flex-col ${
                  collapsed ? 'py-6 xSmall:py-12' : 'py-12'
                } justify-end xSmall:items-center xSmall:text-center w-full h-full text-white select-none`}
              >
                {endDate ? <p>{format(new Date(endDate), DATE_FORMAT_DA)}</p> : null}
                <h3 className='text-md font-bold xSmall:w-full truncate'>{name}</h3>
                <p className='opacity-80 xSmall:w-full truncate'>{role}</p>
              </div>
            </Link>
          </SkeletonLoader>
        )}
      </motion.div>
    </motion.div>
  )
}

export default PreviewCard
