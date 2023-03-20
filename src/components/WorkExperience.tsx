import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const WorkExperience = ({}: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='item-center relative mx-auto flex h-screen max-w-full flex-col justify-evenly overflow-hidden px-10 text-left md:flex-row'
        >
            <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
                Experience
            </h3>
            <div className='flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-[#F7AB0A]/80'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    )
}

export default WorkExperience
