import { useContext } from 'react'
import { StateContext } from '../../hooks/StateContext'
import { MailIcon } from './images'
import { motion } from 'framer-motion'

const ContactSwitch = () => {
  const { isContactOpen, setIsContactOpen } = useContext(StateContext)
  return (
    <>
      <motion.button
        onClick={() => setIsContactOpen(!isContactOpen)}
        className="dark:text-tertiary text-secondary py-1 mb-1 dark:hover:text-white hover:text-primary rounded p-1 text-2xl flex items-center m-auto"
      >
        <MailIcon />
        <h2 className="lg:hidden font-bold pl-2 text-lg">contact me</h2>
      </motion.button>
    </>
  )
}

export default ContactSwitch
