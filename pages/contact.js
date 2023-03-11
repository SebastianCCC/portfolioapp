import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiArrowSmRight } from 'react-icons/hi'
import { schema } from '../schema/ContactSchema'
import HeaderTitles from '../components/Animate/Titles'
import { Sendicon } from '../assets'

const Contact = () => {
  const [isSend, setIsSend] = useState(false)
  const container = {
    hidden: { x: -50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.2,
        delayChildren: 1,
        staggerChildren: 0.7,
      },
    },
  }

  const item = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  }

  const maxMsgTxtLength = 400

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const data = [
    {
      type: 'text',
      placeholder: 'Simon Sinek',
      name: 'What’s your name?',
      registerid: 'firstName',
      error: errors.firstName,
    },
    {
      type: 'text',
      placeholder: 'Simon@Sinek.com',
      name: 'What’s your email address?',
      registerid: 'email',
      error: errors.email,
    },
    {
      type: 'text',
      placeholder: 'Subject',
      name: 'What’s the subject?',
      registerid: 'subject',
      error: errors.subject,
    },
    {
      type: 'textarea',
      placeholder: 'Hello Sebastian...',
      name: 'What’s your message?',
      registerid: 'message',
      error: errors.message,
    },
  ]

  const onSubmit = (data) => {
    const config = {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    }
    axios.post('api/submit', JSON.stringify(data), config)
    reset()
    setIsSend(true)
    setTimeout(() => {
      setIsSend(false)
    }, 5000)
  }

  return (
    <div className="pt-20 xl:p-4">
      <HeaderTitles title="Contact" />
      <div className="flex flex-col lg:flex-row mt-[26px]">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            delay: 0.2,
            duration: 2,
          }}
          className="xl:text-md lg:mr-20"
        >
          Any cool projects in mind please share. Or if it&apos;s for a chat that&apos;s cool too.
        </motion.h1>
        <motion.form
          variants={container}
          initial="hidden"
          animate="show"
          id="form"
          className="w-full mt-20 lg:mt-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          {data.map(({ type, placeholder, name, registerid, error }, i) => {
            return (
              <motion.div
                className={`even:my-[30px] border-b ${
                  error ? 'border-primary' : 'dark:border-tertiary'
                } relative`}
                variants={item}
                key={i}
              >
                <div className="w-full">
                  <label htmlFor={registerid} className="uppercase dark:text-secondary">
                    {name}
                  </label>
                  {type === 'text' ? (
                    <input
                      className={`w-full pt-3 pb-1 bg-transparent dark:placeholder-tertiary`}
                      type={type}
                      name={registerid}
                      placeholder={placeholder}
                      {...register(registerid)}
                    />
                  ) : (
                    <div className="relative">
                      <textarea
                        maxLength={maxMsgTxtLength}
                        className="w-full pt-3 pb-1 bg-transparent resize-none dark:placeholder-tertiary"
                        placeholder={placeholder}
                        name={registerid}
                        {...register(registerid)}
                      />
                      <p className="dark:text-tertiary p-1 font-light select-none absolute bottom-0 right-0">
                        {maxMsgTxtLength - watch('message')?.length || ''}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
          {Boolean(Object.keys(errors).length) && (
            <p className="dark:text-primary w-full select-none">
              {errors.firstName?.message ||
                errors.email?.message ||
                errors.subject?.message ||
                errors.message?.message}
            </p>
          )}
          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              delay: 3.9,
              duration: 1,
            }}
            type="submit"
            form="form"
            className="flex items-center mt-2 text-md"
          >
            <span className="mr-1">{isSend ? 'Message was send' : 'Send it'}</span>
            <div className="dark:text-tertiary -rotate-45">
              <Sendicon />
            </div>
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
