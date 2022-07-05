import { motion } from 'framer-motion'
import Link from 'next/link'
import { MailIcon } from './images'

const ContactSwitch = () => {
  return (
    <>
      <Link href="/contact">
        <motion.button className="dark:text-tertiary text-secondary py-1 mb-1 dark:hover:text-white hover:text-primary rounded p-1 text-2xl flex items-center">
          <MailIcon />
          <h2 className="xl:hidden font-bold pl-2 text-base">Contact Me</h2>
        </motion.button>
      </Link>
    </>
  )
}

export default ContactSwitch
