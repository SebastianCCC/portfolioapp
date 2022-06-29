import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineGlobe } from 'react-icons/hi'
import { RiStackLine, RiTimeLine } from 'react-icons/ri'
import AnimateTitles from '../../components/Animate/Titles'
import db from '../../firebase'

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
  console.log(currentpage)

  const router = useRouter()
  const path = router.query.id

  const { name, deployed, sorcecode, role, startDate, endDate, decs, stack, isgroup } = currentpage

  return (
    <>
      <Head>
        <title>EvenMoreSeb - {path.slice(0).charAt(0).toUpperCase() + path.slice(1)}</title>
      </Head>
      <div className="w-full md:w-4/5 m-auto mt-20">
        <div className="w-full flex flex-col md:justify-between items-center md:flex-row">
          <div className="text-center md:text-left">
            <h1 className="text-3xl lg:text-3xl font-bold">{name}</h1>
            <h2 className="text-lg">{isgroup ? 'Group Project' : 'Solo Project'}</h2>
          </div>
          <a href={deployed} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center text-xl dark:text-tertiary text-white dark:bg-primary bg-tertiary mt-2 md:mt-0 p-2 rounded dark:hover:text-white hover:text-primary">
              <HiOutlineGlobe />
              <p className="pl-2 text-base">{deployed ? name + ' Demo' : 'Not Deployed'}</p>
            </div>
          </a>
        </div>
        <div className="pt-20">
          <h2 className="text-xl font-bold">Description</h2>
          <p className="w-full md:w-1/2">{decs ? decs : 'No description available for now!'}</p>
          <p className="capitalize text-lg font-bold">{role}</p>
        </div>
        <section className="pt-20">
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
        <div className="flex justify-center items-center w-fit m-auto p-2 dark:text-tertiary text-white dark:bg-primary bg-tertiary rounded dark:hover:text-white hover:text-primary">
          <FiGithub />
          <p className="pl-2">{sorcecode ? 'Github Repo' : 'No Public Repo'}</p>
        </div>
      </div>
    </>
  )
}

export default WId
