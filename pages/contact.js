import { yupResolver } from '@hookform/resolvers/yup'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Sendicon } from '../assets'
import HeaderTitles from '../components/Animate/Titles'
import { data, maxMsgTxtLength } from '../components/Contact/contactInputs'
import GradientCard from '../components/GradientCard'
import { useContact } from '../hooks/contact/useContact'
import { schema } from '../schema/ContactSchema'
import HandleFormMessages from '../components/Contact/HandleFormMessages'
import SCConfetti from '../components/Contact/SCConfetti'
import { animation } from '../components/Animation/AnimateInputs'
import Head from 'next/head'

const Contact = () => {
  const { success, error, onSubmit } = useContact()

  const formMessage = () => {
    if (success) {
      return {
        title: 'Message received',
        description: `I have sent you an email (${success}) to confirm, please check your inbox and spam folder.`,
      }
    }
    if (error) {
      return {
        title: "Message didn't go through",
        description: error,
      }
    }
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <>
      <Head>
        <title>Seechris - Contact</title>
      </Head>
      <div className="pt-28 xl:p-4">
        <HeaderTitles title="Contact" />
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
            Any cool projects in mind please share. Or if it&apos;s for a chat that&apos;s cool too.
          </motion.h1>
          <AnimatePresence>
            {!success && !error && (
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
                        <label htmlFor={registerid} className="uppercase dark:text-secondary">
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
                              <p className="dark:text-tertiary p-2 pr-3 font-light select-none absolute bottom-0 right-0">
                                {maxMsgTxtLength - watch('message')?.length || ''}
                              </p>
                            </div>
                          )}
                        </GradientCard>
                      </div>
                    </motion.div>
                  )
                })}
                {Boolean(Object.keys(errors).length) && (
                  <p className="dark:text-primary/70 w-full select-none tracking-[2px]">
                    {errors.firstName?.message ||
                      errors.email?.message ||
                      errors.subject?.message ||
                      errors.message?.message}
                  </p>
                )}
                <motion.button
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      delay: 3.6,
                      duration: 0.7,
                    },
                  }}
                  type="submit"
                  form="form"
                  className="flex items-center mt-4 text-md"
                >
                  <span className="mr-1">Send it</span>
                  <div className="dark:text-tertiary -rotate-45">
                    <Sendicon />
                  </div>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
          {(success || error) && <HandleFormMessages message={formMessage()} />}
        </div>
      </div>
      {success && <SCConfetti />}
    </>
  )
}

export default Contact
