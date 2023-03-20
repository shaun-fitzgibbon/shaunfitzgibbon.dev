import { motion } from 'framer-motion'
import imgReference from '../images/profile.jpg'

type Props = {}

const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5]
  return (
    <div className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Projects
      </h3>

      <div className='relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-[#33939B]/80'>
        {projects.map((project, i) => (
          <div
            key={i}
            className='flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={imgReference}
              alt=''
            />

            <div className='max-w-6xl space-y-10 px-0 md:px-10'>
              <h4 className='text-center text-4xl font-semibold'>
                <span className='underline decoration-[#33939B]/50'>
                  Case study {i + 1} of {projects.length}:
                </span>{' '}
                UPS clone
              </h4>

              <p className='text-center text-lg md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                facere earum commodi dolorum, ullam illo expedita quisquam ipsam
                saepe aut placeat ducimus nisi blanditiis. Quod commodi
                veritatis libero architecto perferendis?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#33939B]/10'></div>
    </div>
  )
}

export default Projects
