import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiArrowSmRight } from 'react-icons/hi'
import { schema } from '../schema/ContactSchema'

const Contact = () => {
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
    axios.post('api/submit', JSON.stringify(data), config)
    reset()
    setIsSend(true)
    setTimeout(() => {
      setIsSend(false)
    }, 5000)
  }

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center min-h-screen text-sm lg:text-base w-full sm:w-[90%] md:w-[70%] lg:w-1/2 m-auto">
        <div className="text-center my-2 p-2">
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              delay: 0.2,
              duration: 1,
            }}
            className="text-2xl font-bold"
          >
            Send me a quick message
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={{
              type: 'spring',
              delay: 0.2,
              duration: 1,
            }}
            className="text-lg"
          >
            Any cool projects in mind please share. Or if it's for a chat that's cool too.
          </motion.p>
        </div>
        <motion.form
          variants={container}
          initial="hidden"
          animate="show"
          id="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          {data.map(({ type, placeholder, registerid }, i) => {
            return (
              <motion.div
                className="my-2 dark:bg-primary bg-tertiary relative text-white"
                variants={item}
                key={i}
              >
                <div className="w-full">
                  {type === 'text' ? (
                    <input
                      className={`w-full p-3 bg-transparent outline-none dark:placeholder-tertiary`}
                      type={type}
                      placeholder={placeholder}
                      {...register(registerid)}
                    />
                  ) : (
                    <div className="relative">
                      <textarea
                        maxLength={maxMsgTxtLength}
                        className="w-full p-3 bg-transparent outline-none resize-none dark:placeholder-tertiary"
                        placeholder={placeholder}
                        {...register(registerid)}
                      />
                      <p className="p-1 font-light select-none absolute bottom-0 right-0">
                        {watch('message')?.length || 0}/{maxMsgTxtLength}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.form>
        {Boolean(Object.keys(errors).length) && (
          <p className="w-full select-none">
            {errors.firstName?.message ||
              errors.phoneNumber?.message ||
              errors.email?.message ||
              errors.emailConfirm?.message ||
              errors.message?.message}
          </p>
        )}
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
          className="text-white dark:bg-primary bg-tertiary w-full flex justify-end items-center text-xl mt-2 p-2"
        >
          <span className="text-lg">{isSend ? 'Message was send' : 'Send'}</span>
          <HiArrowSmRight />
        </motion.button>
      </div>
    </div>
  )
}

export default Contact
