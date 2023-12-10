import { format } from 'date-fns'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useRef, useState } from 'react'
import { DATE_FORMAT_DA } from '../../config'
import { StateContext } from '../../hooks/StateContext'
import { getColorFromImage } from '../../utils/getColorFromImage'
import { rgbToHex } from '../../utils/rgbToHex'
import { WorkIcon } from '../Links/images'
import SkeletonLoader from '../SkeletonLoader'

const PreviewCard = ({ name, role, img, id, href, externalLink, disableLoading, endDate }) => {
  const [loaded, setLoaded] = useState(false)
  const { setProjectView } = useContext(StateContext)

  let ref = useRef(null)
  const color = getColorFromImage(ref)
  const hexColor = rgbToHex(color?.[0], color?.[1], color?.[2])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useTransform(mouseX, [-100, 100], [-6, 6], { clamp: false })
  const y = useTransform(mouseY, [-100, 100], [-3, 3], { clamp: false })
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { x, y, width } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - x - width / 2)
    mouseY.set(clientY - y - width / 2)
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  }

  return (
    <motion.div
      className="relative rounded-md overflow-hidden"
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
      <motion.div variants={fadeIn} className="w-full h-[380px]">
        {id === 'readmore' ? (
          <div
            onClick={() => setProjectView(true)}
            className="bg-secondary/50 dark:bg-sec_tertiary w-full h-full dark:border-tertiary/50 border-secondary/70 border rounded-md cursor-pointer flex flex-col items-center justify-center py-12"
          >
            <WorkIcon />
            <h3 className="text-md font-bold mt-2">{name}</h3>
            <p className="opacity-80">{role}</p>
          </div>
        ) : (
          <SkeletonLoader
            loaded={loaded || disableLoading}
            projectColor={hexColor}
            backgroundImage={
              <Image
                ref={ref}
                fill
                src={img}
                alt={'Project: ' + name}
                className="object-cover"
                onLoad={() => setLoaded(true)}
              />
            }
          >
            <Link
              href={`${!!href ? href + '/' : ''}${id || ''}`}
              target={`${!!externalLink ? '_blank' : '_self'}`}
              rel="noopener noreferrer"
              className="absolute inset-0"
            >
              <div className="py-12 px-2 flex flex-col justify-end items-center text-center w-full h-full text-white">
                <p>{format(new Date(endDate), DATE_FORMAT_DA)}</p>
                <h3 className="text-md font-bold">{name}</h3>
                <p className="opacity-80">{role}</p>
              </div>
            </Link>
          </SkeletonLoader>
        )}
      </motion.div>
    </motion.div>
  )
}

export default PreviewCard
