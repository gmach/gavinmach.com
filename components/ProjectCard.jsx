import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProjectCard.module.scss';
import { projects } from './Explorer';

const ProjectCard = ({ project }) => {
  return (
    <Link href={project.path}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={tag}>
                {tag}
              </span>
            ))}
          </div>
          {/* <div className={styles.cta}>
            {project.source_code && (
              <a
                href={project.source_code}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.underline}
              >
                Source Code
              </a>
            )}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Live Demo
            </a>
          </div> */}
        </div>
        <div className="cardimage">
          <Image src={project.image} height={300} width={600} alt={project.name} />
        </div>        
      </div>

    </Link>
  );
};

export default ProjectCard;
