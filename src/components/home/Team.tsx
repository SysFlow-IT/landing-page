import React from 'react';
import { useContent } from '../../hooks/useContent';
import { useRevealOnIntersect } from '@hooks/useRevealOnIntersect';
import styles from './Team.module.css';

export const Team: React.FC = () => {
  const { content } = useContent();
  const { ref, isVisible } = useRevealOnIntersect();

  return (
    <section id="team" className={`${styles.section} section section--dark`} ref={ref}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{content.TEAM_COMPONENT.TITLE}</h2>
        <p className={styles.sectionDescription}>{content.TEAM_COMPONENT.DESCRIPTION}</p>
        <div className={styles.teamGrid}>
          {content.TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className={`${styles.teamMember} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.memberAvatar}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.memberImage}
                  loading="lazy"
                />
                <div className={styles.memberGradient}></div>
              </div>
              <div className={styles.teamMemberContent}>
                <h3>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
