import { useState } from 'react'
import { useForm } from 'react-hook-form'
import useWeb3Forms from '@web3forms/react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

type Inputs = {
  botcheck: boolean
  name: string
  email: string
  subject: string
  message: string
}

const Contact = ({}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onTouched',
  })
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState('')

  const { submit: onSubmit } = useWeb3Forms({
    access_key: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY,
    settings: {
      from_name: 'no-reply@shaunfitzgibbon.dev',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true)
      setMessage(msg)
      reset()
    },
    onError: (msg, data) => {
      setIsSuccess(false)
      setMessage(msg)
    },
  })

  return (
    <div className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-center text-4xl font-semibold'>
          I have got what you need.{' '}
          <span className='underline decoration-[#F7AB0A]'>Lets Talk.</span>
        </h4>
        <div className='space-y-10'>
          {/* Email */}
          <div className='flex items-center justify-center space-x-5'>
            <EnvelopeIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
            <p className='text-2xl'>hello@shaunfitzgibbon.dev</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto flex w-fit flex-col space-y-2'
        >
          <input
            type='checkbox'
            id=''
            className='hidden'
            {...register('botcheck')}
          />

          {/* NAME & EMAIL */}
          <div className='mb-5 w-full'>
            {/* NAME */}
            <div className='flex space-x-2'>
              <input
                type='text'
                placeholder='Name'
                autoComplete='false'
                className='contactInput'
                {...register('name', {
                  required: 'Name is required',
                  maxLength: 80,
                })}
              />
              {errors.name && (
                <div className='mt-1 text-red-600'>
                  <small>{errors.name.message}</small>
                </div>
              )}

              {/* EMAIL ADDRESS */}
              <label htmlFor='email_address' className='sr-only'>
                Email Address
              </label>
              <input
                id='email_address'
                type='email'
                placeholder='Email Address'
                autoComplete='false'
                className='contactInput'
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email',
                  },
                })}
              />
              {errors.email && (
                <div className='mt-1 text-red-600'>
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>
          </div>

          {/* SUBJECT */}
          <div className='mb-5 w-full'>
            <input
              type='text'
              placeholder='Subject'
              autoComplete='false'
              className='contactInput'
              {...register('subject', {
                required: 'Subject is required',
                maxLength: 80,
              })}
            />
            {errors.subject && (
              <div className='mt-1 text-red-600'>
                <small>{errors.subject.message}</small>
              </div>
            )}
          </div>

          {/* MESSAGE */}
          <div className='mb-5 w-full'>
            <textarea
              placeholder='Your Message'
              className='contactInput'
              {...register('message', {
                required: 'Enter your Message',
              })}
            />
            {errors.message && (
              <div className='mt-1 text-red-600'>
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type='submit'
            className='rounded-md bg-[#F7AB0A] py-5 px-10 text-lg font-bold text-black'
          >
            {false ? (
              <svg
                className='mx-auto h-5 w-5 animate-spin text-white dark:text-black'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
            ) : (
              'Send'
            )}
          </button>
        </form>

        {isSubmitSuccessful && isSuccess && (
          <div className='mt-3 text-center text-sm text-green-500'>
            {message || 'Success. Message sent successfully'}
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div className='mt-3 text-center text-sm text-red-500'>
            {message || 'Something went wrong. Please try later.'}
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
