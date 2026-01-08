import React from "react";
import { useContent } from "../../hooks/useContent";
import { useRevealOnIntersect } from "@hooks/useRevealOnIntersect";
import styles from "./Problems.module.css";

export const Problems: React.FC = () => {
  const { content } = useContent();
  const { ref, isVisible } = useRevealOnIntersect();

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{content.PROBLEMS_COMPONENT.TITLE}</h2>
          <p className={styles.subtitle}>{content.PROBLEMS_COMPONENT.SUBTITLE}</p>
        </div>
        <div className={styles.grid}>
          {content.PROBLEMS.map((problem, index) => (
            <div
              key={index}
              className={`${styles.card} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <img src={problem.image} alt="" className={styles.image} loading="lazy" />
              </div>
              <p className={styles.text}>{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
