import { projects } from '@/data/project';
import RotatingCard from '@/ui/components/rotating-card';

function ProjectList() {
  // const T = import('@/data/project').then((module) => {
  //   module.projects.map((project) => {
  //     return (
  //       <RotatingCard
  //         key={project.id}
  //         title={project.en.title}
  //         description={project.en.description}
  //         links={project.links}
  //         {...project}
  //       />
  //     );
  //   });
  // });
  return (
    <div>
      {projects.map((project) => {
        return (
          <RotatingCard
            key={project.id}
            title={project.en.title}
            description={project.en.description}
            links={project.links}
            image={project.image}
            className="m-4 bg-red-500"
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
