import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'
import imgReference from '../images/profile.jpg' // imgReference === '/src/image.png'

type Props = {}

const Hero = ({}: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Shaun Fitzgibbon",
      "I'm a Javascript developer",
      "I'm a React developer",
      "I'm a Tea Drinker",
      "I'm a Computer Nerd",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center'>
      <BackgroundCircles />
      <img
        className='relative mx-auto h-32 w-32 rounded-full object-cover'
        src={imgReference}
        alt='Profile image'
      />
      <div className='z-20'>
        <h2 className='pb-2 text-sm uppercase tracking-[15px] text-gray-500'>
          Software Developer{' '}
        </h2>
        <h1 className='lg-text-6xl px-10 text-5xl font-semibold'>
          <span className='ml-3'>{text}</span>
          <Cursor cursorColor='F7AB0A' />
        </h1>

        <div className='pt-5'>
          <a href='#about'>
            <button className='heroButton'>About</button>
          </a>
          <a href='#experience'>
            <button className='heroButton'>Experience</button>
          </a>
          <a href='#skills'>
            <button className='heroButton'>Skills</button>
          </a>
          <a href='#projects'>
            <button className='heroButton'>Projects</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
