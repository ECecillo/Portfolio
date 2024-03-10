import {
  SiCplusplus,
  SiDocker,
  SiGo,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
} from 'react-icons/si';

const technologies = (iconSize: string) => [
  {
    name: 'C++',
    icon: <SiCplusplus size={iconSize} />,
  },
  {
    name: 'GO',
    icon: <SiGo size={iconSize} />,
  },
  {
    name: 'NodeJS',
    icon: <SiNodedotjs size={iconSize} />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript size={iconSize} />,
  },
  {
    name: 'PGSQL',
    icon: <SiPostgresql size={iconSize} />,
  },
  {
    name: 'Docker',
    icon: <SiDocker size={iconSize} />,
  },
];

function Technologies() {
  const iconSize = '4rem';
  return (
    <div className="11/21">
      <h2 className="text-2xl font-bold text-center mb-4">Techno préférés ❤️ </h2>
      <div className="flex justify-center flex-wrap">
        {technologies(iconSize).map((tech) => (
          <div key={tech.name} className="flex flex-col items-center m-4">
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
