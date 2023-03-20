import { motion } from 'framer-motion'
import imgReference from '../images/profile.jpg'

type Props = {}

const About = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='-md-20 md:h-95 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px] '
        src={imgReference}
        alt='Profile image'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#33939B]/40'>little</span>{' '}
          background
        </h4>

        <p className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          asperiores magni illo et. Odit labore accusantium delectus maxime
          dolor soluta impedit eveniet amet, quibusdam iure, nulla totam
          possimus voluptatum obcaecati! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sit asperiores magni illo et. Odit labore
          accusantium delectus maxime dolor soluta impedit eveniet amet,
          quibusdam iure, nulla totam possimus voluptatum obcaecati! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sit asperiores magni illo
          et. Odit labore accusantium delectus maxime dolor soluta impedit
          eveniet amet, quibusdam iure, nulla totam possimus voluptatum
          obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sit asperiores magni illo et. Odit labore accusantium delectus maxime
          dolor soluta impedit eveniet amet, quibusdam iure, nulla totam
          possimus voluptatum obcaecati!
        </p>
      </div>
    </motion.div>
  )
}

export default About
