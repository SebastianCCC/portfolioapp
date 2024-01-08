import { motion } from 'framer-motion'
import GradientCard from '../GradientCard'
import { maxMsgTxtLength } from './contactInputs'

const ContactForm = ({ register, watch, animation, contactData }) => {
  return (
    <>
      {contactData.map(({ type, placeholder, name, registerid, to }) => {
        return (
          <motion.div className={`even:my-[30px]`} variants={animation().item} key={registerid}>
            <div className="w-full">
              <label htmlFor={registerid} className="dark:text-secondary">
                {name}
              </label>
              <GradientCard styles="mt-3" to={to} animateOnce={true}>
                {type === 'text' ? (
                  <input
                    className={`w-full p-3 bg-transparent dark:placeholder-tertiary`}
                    type={type}
                    name={registerid}
                    placeholder={placeholder}
                    {...register(registerid)}
                  />
                ) : (
                  <div className="relative">
                    <textarea
                      maxLength={maxMsgTxtLength}
                      className="w-full p-3 bg-transparent resize-none dark:placeholder-tertiary"
                      placeholder={placeholder}
                      name={registerid}
                      {...register(registerid)}
                    />
                    {watch && (
                      <p className="dark:text-tertiary p-2 pr-3 font-light select-none absolute bottom-0 right-0">
                        {maxMsgTxtLength - watch('message')?.length || ''}
                      </p>
                    )}
                  </div>
                )}
              </GradientCard>
            </div>
          </motion.div>
        )
      })}
    </>
  )
}

export default ContactForm
