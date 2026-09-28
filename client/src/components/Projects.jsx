import Section from './Section.jsx';
import Carousel from './Carousel.jsx';
import ProjectCard from './ProjectCard.jsx';
import { PROJECTS } from '../data/content.js';

export default function Projects() {
  return (
    <Section id="proyectos" eyebrow="Proyectos" title="Lo que construí">
      {/* Full-bleed: rompe el max-w-6xl para que las cards ocupen casi todo
          el ancho de la ventana (ver DESIGN.md #8). El overflow-x-clip en
          <body> absorbe el sub-pixel que puede sobrar contra la scrollbar. */}
      <div className="w-[100vw] mx-[calc(50%-50vw)]">
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
      </div>
    </Section>
  );
}
