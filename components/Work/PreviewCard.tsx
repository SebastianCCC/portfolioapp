import { format } from 'date-fns'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useRef, useState } from 'react'
import { Sendicon } from '../../assets'
import { DATE_FORMAT_DA } from '../../config'
import { getProjectColorMatch } from '../../utils/getProjectColorMatch'
import { addOpacity } from '../../utils/setColorOpacity'
import { GroupIcon, UserIcon } from '../Links/images'
import SkeletonLoader from '../SkeletonLoader'
import { isDifferenceInDays } from '../../utils/differenceInDays'

type PreviewCardProps = {
  name: string
  role?: string | string[] | null
  img?: string | null
  groupProject?: boolean
  id?: string
  href?: string
  externalLink?: boolean
  endDate: Date | string | number | null
  collapsed?: boolean
}

const PreviewCard = ({
  name,
  role,
  img,
  groupProject,
  id,
  href,
  externalLink,
  endDate,
  collapsed = false,
}: PreviewCardProps) => {
  const [loaded, setLoaded] = useState(false)

  let ref = useRef<HTMLImageElement>(null)
  const ADJUST_BRIGHTNESS = 40
  const ColorMatch = getProjectColorMatch(ref, ADJUST_BRIGHTNESS)

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
      className='relative overflow-hidden rounded-md @container'
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
        data-collapsed={collapsed || null}
        className='h-[220px] w-full data-[collapsed]:h-[220px] data-[collapsed]:xSmall:h-[325px] data-[collapsed]:xSmall:@sm:h-[380px] lg:h-[300px]'
      >
        <SkeletonLoader
          loaded={loaded}
          projectColor={ColorMatch}
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
            target={`${externalLink ? '_blank' : '_self'}`}
            rel='noopener noreferrer'
            className='absolute inset-0'
          >
            <div className='flex h-full w-full select-none flex-col justify-between'>
              <div className='flex items-center rounded-t-md px-4 py-3 text-white'>
                {isDifferenceInDays(endDate) && (
                  <p className='mr-2 w-fit rounded-md bg-projectview_dark p-2 text-xs leading-3'>
                    New
                  </p>
                )}
                {endDate ? (
                  <p className='mr-2 rounded-md bg-projectview_dark p-2 text-xs leading-3'>
                    {format(new Date(endDate), DATE_FORMAT_DA)}
                  </p>
                ) : null}
                <div className='rounded-md bg-projectview_dark p-1 text-xs'>
                  {groupProject ? <GroupIcon /> : <UserIcon />}
                </div>
              </div>
              <div
                style={{ backgroundColor: addOpacity(ColorMatch, 25) }}
                data-collapsed={collapsed || null}
                className='grid grid-cols-4 rounded-b-md px-4 py-3 text-white backdrop-blur-[8px]'
              >
                <div className='col-span-3'>
                  <h3 className='truncate text-base font-bold xSmall:w-full'>{name}</h3>
                  <p className='truncate text-sm opacity-80 xSmall:w-full'>{role}</p>
                </div>
                <div className='h-fit w-fit place-self-center justify-self-end rounded-md bg-projectview_dark/25 p-1 backdrop-blur-[8px]'>
                  <div
                    data-external={externalLink || null}
                    className='scale-75 text-white data-[external]:-rotate-45'
                  >
                    <Sendicon />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SkeletonLoader>
      </motion.div>
    </motion.div>
  )
}

export default PreviewCard
