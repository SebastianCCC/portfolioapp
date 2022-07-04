import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiArrowSmRight } from 'react-icons/hi'
import { schema } from '../../schema/Contact'
import { StateContext } from '../../hooks/StateContext'

const ContactForm = () => {
  const { setIsContactOpen } = useContext(StateContext)
  const [isSend, setIsSend] = useState(false)
  const container = {
    hidden: { x: '100vw' },
    show: {
      x: 0,
      transition: {
        delay: 0.2,
        duration: 1.2,
        delayChildren: 1,
        staggerChildren: 0.7,
      },
    },
  }

  const item = {
    hidden: { x: '100vw' },
    show: { x: 0 },
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const data = [
    {
      type: 'text',
      placeholder: 'Enter your first name',
      registerid: 'firstName',
      errormsg: errors.firstName?.message,
    },
    {
      type: 'text',
      placeholder: 'Enter your phone number',
      registerid: 'phoneNumber',
      errormsg: errors.phoneNumber?.message,
    },
    {
      type: 'text',
      placeholder: 'Enter your email',
      registerid: 'email',
      errormsg: errors.email?.message,
    },
    {
      type: 'text',
      placeholder: 'Confirm your email',
      registerid: 'emailConfirm',
      errormsg: errors.emailConfirm?.message,
    },
    {
      type: 'textarea',
      placeholder: "What's on your mind?",
      registerid: 'message',
      errormsg: errors.message?.message,
    },
  ]

  const onSubmit = (data) => {
    const config = {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    }
    axios.post('api/contact', JSON.stringify(data), config)
    reset()
    setIsSend(true)
    setTimeout(() => {
      setIsSend(false)
      setIsContactOpen(false)
    }, 5000)
  }

  return (
    <div className="dark:bg-tertiary bg-white p-4 text-sm lg:text-base text-white w-full fixed bottom-0 right-0 z-20">
      <div className="flex flex-col justify-center min-h-screen w-full sm:w-[90%] md:w-[70%] lg:w-1/2 m-auto">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 0.2,
            duration: 1,
          }}
          className="dark:bg-additional bg-primary my-2 p-2"
        >
          <h2 className="font-bold text-white">Send me a quick message</h2>
          <p className="text-sm">
            Any cool projects in mind please share. Or just for a quick chat, go ahead.
          </p>
        </motion.div>
        <motion.form
          variants={container}
          initial="hidden"
          animate="show"
          id="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          {data.map(({ type, placeholder, registerid, errormsg }, i) => {
            return (
              <motion.div variants={item} key={i}>
                <div className="my-2 dark:bg-primary bg-tertiary relative">
                  {type === 'text' ? (
                    <input
                      className={`w-full p-3 bg-transparent outline-none dark:placeholder-tertiary`}
                      type={type}
                      placeholder={placeholder}
                      {...register(registerid)}
                    />
                  ) : (
                    <textarea
                      className="w-full p-3 bg-transparent outline-none resize-none dark:placeholder-tertiary"
                      placeholder={placeholder}
                      {...register(registerid)}
                    />
                  )}
                </div>
                <p className="px-3 w-full dark:text-white text-black text-sm select-none">
                  {errormsg}
                </p>
              </motion.div>
            )
          })}
        </motion.form>
        <motion.button
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 4.5,
            duration: 1,
          }}
          type="submit"
          form="form"
          className="dark:bg-primary bg-tertiary w-full flex justify-end items-center text-xl mt-2 p-2"
        >
          <span className="text-lg">{isSend ? 'Message was send' : 'Send'}</span>
          <HiArrowSmRight />
        </motion.button>
      </div>
    </div>
  )
}

export default ContactForm
