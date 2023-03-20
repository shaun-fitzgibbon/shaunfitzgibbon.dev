import Skill from "./Skill";
type Props = {};

const Skills = ({}: Props) => {
  return (
    <div className="relative mx-auto flex h-screen min-h-screen max-w-[1200px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10">
      <h1 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h1>
      <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over a skill for current profieciency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
};

export default Skills;
