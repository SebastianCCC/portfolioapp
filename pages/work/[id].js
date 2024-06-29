import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import HeaderTitles from '../../components/Animate/Titles'
import { DATE_FORMAT_DA } from '../../config'
import db from '../../firebase'
import { format } from 'date-fns'

export async function getStaticProps({ params }) {
  const currentpage = doc(db, `work/${params?.id}`)
  const page = await (await getDoc(currentpage)).data()

  return {
    props: {
      currentpage: JSON.parse(JSON.stringify(page)),
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const querySnapshot = await getDocs(collection(db, 'work'))
  const pages = []

  querySnapshot.forEach((page) => pages.push(page.id))
  const paths = pages.map((page) => ({ params: { id: page } }))

  return {
    paths,
    fallback: false,
  }
}

const WId = ({ currentpage }) => {
  const router = useRouter()
  const path = router.query.id

  const {
    name,
    deployed,
    sorcecode,
    role,
    endDate,
    decs,
    stack,
    isgroup,
    previewImage,
    walkthrough,
  } = currentpage

  return (
    <>
      <Head>
        <title>{`Seechris - ${path.slice(0).charAt(0).toUpperCase() + path.slice(1)}`}</title>
      </Head>
      <div className='pt-28 md:container md:m-auto xl:p-4'>
        <HeaderTitles
          title={`${name} ${format(new Date(endDate.seconds * 1000), DATE_FORMAT_DA)}`}
        />
        <div className='mt-3 flex flex-col-reverse lg:mt-[65px] lg:flex-row'>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              delay: 0.2,
              duration: 2,
            }}
            className='mt-9 w-[100%] lg:mr-4 lg:mt-0'
          >
            <h1 className='text-lg font-bold'>{name}</h1>
            <p className='capitalize dark:text-tertiary xl:text-[16px]'>{role}</p>
            <p className='mt-9 leading-loose dark:text-sec_addition xl:text-[18px]'>
              {decs ? decs : 'No description available for now!'}
            </p>
            <p className='mt-1 dark:text-tertiary xl:text-[16px]'>
              {isgroup ? 'Group' : 'Solo'} Project
            </p>
            <div className='mt-8 text-center sm:text-left'>
              <h2 className='mb-1 capitalize tracking-[2px] dark:text-tertiary'>Tech Used</h2>
              <div className='-mx-4 flex items-center overflow-auto pl-4'>
                {stack.map((tech, i) => (
                  <p
                    className='my-4 min-w-fit border-sec_addition px-4 capitalize first:pl-0 last:border-r-transparent even:border-x'
                    key={i}
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <h2 className='mb-1 mt-5 text-center capitalize tracking-[2px] dark:text-tertiary sm:text-left'>
              Links
            </h2>
            <div className='flex justify-center py-4 uppercase dark:text-sec_addition sm:justify-start'>
              <a
                className='mr-4 underline-offset-1 hover:underline dark:hover:text-white'
                href={sorcecode}
                target='_blank'
                rel='noopener noreferrer'
              >
                {sorcecode ? 'sorcecode' : 'No Github Repo'}
              </a>
              <a
                className='underline-offset-1 hover:underline dark:hover:text-white'
                href={deployed}
                target='_blank'
                rel='noopener noreferrer'
              >
                {deployed ? 'Demo' : 'Not Deployed'}
              </a>
            </div>
          </motion.div>
          {walkthrough && typeof window !== 'undefined' && window.innerWidth >= 1024 ? (
            <div className='relative h-[300px] w-full lg:w-[70%] xl:h-[500px]'>
              <video
                className='absolute h-[300px] w-full lg:h-[450px] xl:h-[600px]'
                loop
                muted
                autoPlay
              >
                <source src={walkthrough} />
              </video>
            </div>
          ) : (
            <>
              {previewImage && (
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width:
                      typeof window !== 'undefined' && window.innerWidth >= 1024 ? '70%' : '100%',
                  }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    delay: 0.2,
                    duration: 1.5,
                  }}
                  className='pointer-events-none relative h-[300px] w-full select-none xl:h-[357px]'
                >
                  <Image
                    sizes='100vw'
                    fill
                    src={previewImage}
                    alt={'A Photo of the project'}
                    className='rounded-md object-cover'
                  />
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default WId
