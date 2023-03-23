import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className='relative flex items-center justify-center'
    >
      <div className='absolute mt-56 h-[200px] w-[200px] rounded-full border border-[#221B39]' />
      <div className='absolute mt-56 h-[300px] w-[300px] animate-ping rounded-full border border-[#221B39]' />
      <div className='absolute mt-56 h-[300px] w-[300px] animate-pulse rounded-full border border-[#33939B]' />
      <div className='absolute mt-56 h-[500px] w-[500px] animate-ping rounded-full border border-[#221B39]' />
      <div className='absolute mt-56 h-[500px] w-[500px] rounded-full border border-[#221B39]' />
      <div className='absolute mt-56 h-[650px] w-[650px] animate-pulse rounded-full border border-[#33939B] opacity-20' />
      <div className='absolute mt-56 h-[800px] w-[800px] rounded-full border border-[#221B39] ' />
    </motion.div>
  )
}

export default BackgroundCircles
