import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { HiOutlineGlobe } from 'react-icons/hi'
import { RiStackLine, RiTimeLine, RiGithubFill } from 'react-icons/ri'
import AnimateTitles from '../../components/Animate/Titles'
import db from '../../firebase'
import { motion } from 'framer-motion'
import HeaderTitles from '../../components/Animate/Titles'
import Image from 'next/image'

export async function getStaticProps({ params }) {
  const currentpage = doc(db, `work/${params?.id}`)
  const page = await (await getDoc(currentpage)).data()

  return {
    props: {
      currentpage: page,
    },
    revalidate: 10,
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
    startDate,
    endDate,
    decs,
    stack,
    isgroup,
    previewImage,
  } = currentpage

  return (
    <>
      <Head>
        <title>Seechris - {path.slice(0).charAt(0).toUpperCase() + path.slice(1)}</title>
      </Head>
      <div className="mt-10 xl:mt-0 xl:p-4">
        <HeaderTitles title={`${name} ${endDate}`} />
        <div className="flex flex-col-reverse xl:flex-row mt-3 xl:mt-[65px]">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              delay: 0.2,
              duration: 2,
            }}
            className="mt-9 xl:mt-0 xl:mr-4"
          >
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="xl:text-[16px] dark:text-tertiary capitalize">{role}</p>
            <p className="mt-9 xl:text-[18px] dark:text-sec_addition leading-loose">
              {decs ? decs : 'No description available for now!'}
            </p>
            <p className="mt-1 dark:text-tertiary xl:text-[16px]">
              {isgroup ? 'Group' : 'Solo'} Project
            </p>
          </motion.div>
          {previewImage && (
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                delay: 0.2,
                duration: 1.5,
              }}
              className="relative select-none pointer-events-none w-full h-[190px] xl:h-[357px]"
            >
              <Image
                lazyBoundary="0px"
                layout="fill"
                objectFit="cover"
                src={previewImage}
                alt={'A Photo of me'}
              />
            </motion.div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-end uppercase dark:text-tertiary py-5">
          <div className="flex flex-col text-center sm:text-left sm:mr-40">
            <h2 className="tracking-[2px] mb-5">Links</h2>
            <a
              className="dark:hover:text-white"
              href={sorcecode}
              target="_blank"
              rel="noopener noreferrer"
            >
              {sorcecode ? 'sorcecode' : 'No Github Repo'}
            </a>
            <a
              className="dark:hover:text-white"
              href={deployed}
              target="_blank"
              rel="noopener noreferrer"
            >
              {deployed ? 'Demo' : 'Not Deployed'}
            </a>
          </div>
          <div className="text-center sm:text-left mt-10 sm:mt-0">
            <h2 className="tracking-[2px] mb-5">Tech Used</h2>
            {stack.map((tech, i) => (
              <p className="dark:text-white capitalize" key={i}>
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WId
