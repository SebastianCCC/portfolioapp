import { yupResolver } from '@hookform/resolvers/yup'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Sendicon } from '../assets'
import HeaderTitles from '../components/Animate/Titles'
import { animation } from '../components/Animation/AnimateInputs'
import GradientCard from '../components/GradientCard'
import { data } from '../components/User/LoginInputs'
import { useUserLogin } from '../hooks/user/useUser'
import { schema } from '../schema/UserSchema'
import Head from 'next/head'

const Contact = () => {
  const { error, onSubmit } = useUserLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <>
      <Head>
        <title>Seechris - Login</title>
      </Head>
      <div className='pt-28 xl:p-4'>
        <HeaderTitles
          title='Login to your account'
          description='Signin will allow you to like my projects and upvote the once you like. (Beta)'
        />
        <div className='m-auto flex flex-col md:w-[90%] xl:w-[85%] 2xl:w-2/3'>
          <AnimatePresence>
            <motion.form
              variants={animation().container}
              initial='hidden'
              animate='show'
              exit='exit'
              id='form'
              className='mt-20 w-full'
              onSubmit={handleSubmit(onSubmit)}
            >
              {data.map(({ type, placeholder, name, registerid, to }) => {
                return (
                  <motion.div
                    className={`even:my-[30px]`}
                    variants={animation().item}
                    key={registerid}
                  >
                    <div className='w-full'>
                      <label htmlFor={registerid} className='dark:text-secondary'>
                        {name}
                      </label>
                      <GradientCard styles='mt-3' to={to} animateOnce={true}>
                        <input
                          className={`w-full bg-transparent p-3 dark:placeholder-tertiary`}
                          type={type}
                          placeholder={placeholder}
                          {...register(registerid)}
                        />
                      </GradientCard>
                    </div>
                  </motion.div>
                )
              })}
              {(Boolean(Object.keys(errors).length) || error) && (
                <p className='w-full select-none tracking-[2px] dark:text-primary/70'>
                  {/* @ts-ignore */}
                  {errors.email?.message || errors.password?.message || error}
                </p>
              )}
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    delay: 2.6,
                    duration: 0.7,
                  },
                }}
                type='submit'
                form='form'
                className='mt-4 flex items-center text-md'
              >
                <span className='mr-1'>Login</span>
                <div className='-rotate-45 dark:text-tertiary'>
                  <Sendicon />
                </div>
              </motion.button>
            </motion.form>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Contact
