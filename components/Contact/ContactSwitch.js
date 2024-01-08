import { motion } from 'framer-motion'
import Link from 'next/link'
import { selectForm } from './contactInputs'

const ContactSwitch = ({ onClick }) => {
  return (
    <>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          delay: 0.2,
          duration: 2,
        }}
      >
        <div className="rounded-md dark:bg-[#151515] bg-projectview border dark:border-tertiary/25 border-secondary/70 py-3 px-5 mb-4">
          <h3 className="text-sm">Switch between forms</h3>
          <div className="w-full h-[0.5px] dark:bg-tertiary/40 bg-secondary my-3" />
          <div className="flex justify-between">
            {selectForm.map(({ title, slug, link }) => {
              return (
                <div onClick={onClick} key={slug}>
                  <Link href={link}>
                    <p className="text-sm font-extrabold">{title}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ContactSwitch
