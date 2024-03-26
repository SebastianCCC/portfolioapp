import { yupResolver } from '@hookform/resolvers/yup'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { Sendicon } from '../../assets'
import HeaderTitles from '../../components/Animate/Titles'
import { animation } from '../../components/Animation/AnimateInputs'
import ContactForm from '../../components/Contact/ContactForm'
import HandleFormMessages from '../../components/Contact/HandleFormMessages'
import Confetti from '../../components/Contact/Confetti'
import { useContact } from '../../hooks/react-client/contact/useContact'
import { schema } from '../../schema/ContactSchema'
import { contact } from '../../components/Contact/contactInputs'

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
      <div className='pt-28 xl:p-4'>
        <HeaderTitles
          title='Contact Me'
          description="Any cool projects in mind please share. Or if it's for a chat that's cool too."
        />
        <div className='m-auto flex flex-col md:w-[90%] xl:w-[85%] 2xl:w-2/3'>
          <AnimatePresence>
            {!success && !error && (
              <motion.form
                variants={animation().container}
                initial='hidden'
                animate='show'
                exit='exit'
                id='form'
                className='mt-20 w-full'
                onSubmit={handleSubmit(onSubmit)}
              >
                <ContactForm
                  contactData={contact}
                  register={register}
                  watch={watch}
                  animation={animation}
                />
                {Boolean(Object.keys(errors).length) && (
                  <p className='w-full select-none tracking-[2px] dark:text-primary/70'>
                    {/* @ts-ignore */}
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
                  type='submit'
                  form='form'
                  className='mt-4 flex items-center text-md'
                >
                  <span className='mr-1'>Send it</span>
                  <div className='-rotate-45 dark:text-tertiary'>
                    <Sendicon />
                  </div>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
          {(success || error) && <HandleFormMessages message={formMessage()} />}
        </div>
      </div>
      {success && <Confetti />}
    </>
  )
}

export default Contact
