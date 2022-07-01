import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineGlobe } from 'react-icons/hi'
import { RiStackLine, RiTimeLine } from 'react-icons/ri'
import AnimateTitles from '../../components/Animate/Titles'
import db from '../../firebase'
import { motion } from 'framer-motion'

export async function getStaticProps({ params }) {
  const currentpage = doc(db, `work/${params?.id}`)
  const page = await (await getDoc(currentpage)).data()

  return {
    props: {
      currentpage: page,
    },
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

  const { name, deployed, sorcecode, role, startDate, endDate, decs, stack, isgroup } = currentpage

  return (
    <>
      <Head>
        <title>EvenMoreSeb - {path.slice(0).charAt(0).toUpperCase() + path.slice(1)}</title>
      </Head>
      <div className="w-full md:w-4/5 m-auto mt-20">
        <div className="w-full flex flex-col md:justify-between md:flex-row">
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                delay: 0.2,
                duration: 1,
              }}
              className="text-3xl lg:text-3xl font-bold"
            >
              {name}
            </motion.h1>
            <motion.h2
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                delay: 0.6,
                duration: 1,
              }}
              className="text-lg"
            >
              {isgroup ? 'Group Project' : 'Solo Project'}
            </motion.h2>
          </div>
          <a href={deployed} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                delay: 0.7,
                duration: 1,
              }}
              className="flex items-center w-fit m-auto text-xl dark:text-tertiary text-white dark:bg-primary bg-tertiary mt-2 md:mt-0 p-2 rounded dark:hover:text-white hover:text-primary"
            >
              <HiOutlineGlobe />
              <p className="pl-2 text-base">{deployed ? name + ' Demo' : 'Not Deployed'}</p>
            </motion.div>
          </a>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 1,
            duration: 1,
          }}
          className="py-20"
        >
          <h2 className="text-xl font-bold">Description</h2>
          <p className="w-full lg:w-1/2">{decs ? decs : 'No description available for now!'}</p>
          <p className="capitalize text-lg font-bold">{role}</p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            delay: 1.5,
            duration: 1,
          }}
        >
          <section className="mt-20 overflow-hidden">
            <AnimateTitles>
              <span className="text-secondary">
                <RiStackLine />
              </span>
              <h2 className="capitalize pl-2">Stack</h2>
            </AnimateTitles>
            <div className="flex flex-col md:flex-row justify-center items-center pt-2">
              {stack.map((item, i) => (
                <article
                  className="w-full md:w-fit even:my-2 md:even:mx-2 p-2 dark:bg-primary bg-tertiary text-center text-white"
                  key={i}
                >
                  <p className="">{item}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="flex justify-center items-center py-10">
            <div className="pr-2 text-lg">
              <div className="flex items-center">
                <RiTimeLine />
                <p className="pl-2">Started</p>
              </div>
              <p className="font-bold">{startDate}</p>
            </div>
            <div className="pl-2 text-lg">
              <div className="flex items-center">
                <RiTimeLine />
                <p className="pl-2">Ended</p>
              </div>
              <p className="font-bold">{endDate}</p>
            </div>
          </section>
          <a href={sorcecode} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center items-center w-fit m-auto p-2 dark:text-tertiary text-white dark:bg-primary bg-tertiary rounded dark:hover:text-white hover:text-primary">
              <FiGithub />
              <p className="pl-2">{sorcecode ? 'Github Repo' : 'No Public Repo'}</p>
            </div>
          </a>
        </motion.div>
      </div>
    </>
  )
}

export default WId
