import React from 'react';
import { useContent } from '../../hooks/useContent';
import { useRevealOnIntersect } from '@hooks/useRevealOnIntersect';
import styles from './Team.module.css';

export const Team: React.FC = () => {
  const { content } = useContent();
  const { ref, isVisible } = useRevealOnIntersect();

  return (
    <section id="team" className={styles.section} ref={ref}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{content.TEAM_COMPONENT.TITLE}</h2>
        <div className={styles.grid}>
          {content.TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className={`${styles.card} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.content}>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
