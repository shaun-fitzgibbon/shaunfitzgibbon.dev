import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = ({}: Props) => {
  return (
    <header className='sticky top-0 z-20 mx-auto flex h-14 max-w-7xl items-start justify-between p-2 xl:items-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'
      >
        <SocialIcon
          url='https://twitter.com/Shaun_FitzG'
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url='https://www.youtube.com/channel/UCietrTpJj5zVvojRY61D5dg'
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/shaun-fitzgibbon/'
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url='https://github.com/shaun-fitzgibbon'
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url='https://dribbble.com/Sfitzg'
          fgColor='gray'
          bgColor='transparent'
          target='_blank'
        />
      </motion.div>

      <a href='#contact'>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className='flex cursor-pointer flex-row items-center text-gray-300'
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='hidden text-sm uppercase text-gray-400 md:inline-flex'>
            Holla at me
          </p>
        </motion.div>
      </a>
    </header>
  )
}

export default Header
