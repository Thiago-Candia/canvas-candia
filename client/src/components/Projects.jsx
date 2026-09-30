import Section from './Section.jsx';
import Carousel from './Carousel.jsx';
import ProjectCard from './ProjectCard.jsx';
import { PROJECTS } from '../data/content.js';

export default function Projects() {
  return (
    <Section id="proyectos" eyebrow="Proyectos" title="Lo que construí" wide>
      <Carousel ariaLabel="Proyectos">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            data-carousel-item
            className="w-[85%] shrink-0 snap-start sm:w-[65%] lg:w-[56%] lg:max-w-[820px]"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </Carousel>
    </Section>
  );
}
