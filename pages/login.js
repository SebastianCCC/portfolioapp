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
      <div className="pt-28 xl:p-4">
        <HeaderTitles title="Login" />
        <div className="flex flex-col mt-[26px] md:w-[90%] xl:w-[85%] 2xl:w-2/3 m-auto">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              delay: 0.2,
              duration: 2,
            }}
            className="xl:text-[17px] lg:mr-20"
          >
            Signin will allow you to like my projects and upvote the once you like.
          </motion.h1>
          <AnimatePresence>
            <motion.form
              variants={animation().container}
              initial="hidden"
              animate="show"
              exit="exit"
              id="form"
              className="w-full mt-20"
              onSubmit={handleSubmit(onSubmit)}
            >
              {data.map(({ type, placeholder, name, registerid, to }) => {
                return (
                  <motion.div
                    className={`even:my-[30px]`}
                    variants={animation().item}
                    key={registerid}
                  >
                    <div className="w-full">
                      <label htmlFor={registerid} className="dark:text-secondary">
                        {name}
                      </label>
                      <GradientCard styles="mt-3" to={to} animateOnce={true}>
                        <input
                          className={`w-full p-3 bg-transparent dark:placeholder-tertiary`}
                          type={type}
                          name={registerid}
                          placeholder={placeholder}
                          {...register(registerid)}
                        />
                      </GradientCard>
                    </div>
                  </motion.div>
                )
              })}
              {(Boolean(Object.keys(errors).length) || error) && (
                <p className="dark:text-primary/70 w-full select-none tracking-[2px]">
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
                type="submit"
                form="form"
                className="flex items-center mt-4 text-md"
              >
                <span className="mr-1">Login</span>
                <div className="dark:text-tertiary -rotate-45">
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
