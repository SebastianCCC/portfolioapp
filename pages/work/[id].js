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
    walkthrough,
  } = currentpage

  return (
    <>
      <Head>
        <title>{`Seechris - ${path.slice(0).charAt(0).toUpperCase() + path.slice(1)}`}</title>
      </Head>
      <div className="pt-20 xl:p-4 md:container md:m-auto">
        <HeaderTitles title={`${name} ${endDate}`} />
        <div className="flex flex-col-reverse lg:flex-row mt-3 lg:mt-[65px]">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              delay: 0.2,
              duration: 2,
            }}
            className="mt-9 lg:mt-0 lg:mr-4 w-[100%]"
          >
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="xl:text-[16px] dark:text-tertiary capitalize">{role}</p>
            <p className="mt-9 xl:text-[18px] dark:text-sec_addition leading-loose">
              {decs ? decs : 'No description available for now!'}
            </p>
            <p className="mt-1 dark:text-tertiary xl:text-[16px]">
              {isgroup ? 'Group' : 'Solo'} Project
            </p>
            <div className="text-center sm:text-left mt-8">
              <h2 className="dark:text-tertiary tracking-[2px] mb-1 uppercase">Tech Used</h2>
              <div className="flex items-center overflow-auto -mx-4 pl-4">
                {stack.map((tech, i) => (
                  <p
                    className="my-4 min-w-fit capitalize first:pl-0 px-4 even:border-x last:border-r-transparent border-sec_addition"
                    key={i}
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <h2 className="text-center sm:text-left dark:text-tertiary tracking-[2px] mt-5 mb-1 uppercase">
              Links
            </h2>
            <div className="flex justify-center sm:justify-start py-4 dark:text-sec_addition uppercase">
              <a
                className="dark:hover:text-white hover:underline underline-offset-1 mr-4"
                href={sorcecode}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sorcecode ? 'sorcecode' : 'No Github Repo'}
              </a>
              <a
                className="dark:hover:text-white hover:underline underline-offset-1"
                href={deployed}
                target="_blank"
                rel="noopener noreferrer"
              >
                {deployed ? 'Demo' : 'Not Deployed'}
              </a>
            </div>
          </motion.div>
          {walkthrough && typeof window !== 'undefined' && window.innerWidth >= 1024 ? (
            <div className="w-full lg:w-[70%] relative h-[300px] xl:h-[500px]">
              <video
                className="absolute w-full h-[300px] lg:h-[450px] xl:h-[600px]"
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
                  className="relative select-none pointer-events-none w-full h-[300px] xl:h-[357px]"
                >
                  <Image
                    sizes="100vw"
                    fill
                    src={previewImage}
                    alt={'A Photo of the project'}
                    className="object-cover rounded-md"
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
