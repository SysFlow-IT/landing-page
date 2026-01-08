import React, { useEffect, useState } from "react";
import { useScrollToSection } from "@hooks/useScrollToSection";
import { useContent } from "@hooks/useContent";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  const { content } = useContent();
  const scrollToSection = useScrollToSection();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxDistance = Math.max(window.innerHeight * 0.9, 400);
      const progress = Math.min(window.scrollY / maxDistance, 1);
      setScrollProgress(progress);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <video
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          transform: `translateY(${scrollProgress * 140}px) scale(${1 + scrollProgress * 0.18
            })`,
        }}
      >
        <source src={`${import.meta.env.BASE_URL}video/hero.mp4`} type="video/mp4" />
      </video>
      <div
        className={styles.heroOverlay}
        style={{ opacity: 0.6 + scrollProgress * 0.35 }}
      ></div>
      <div
        className={styles.heroGradientTop}
        style={{
          opacity: 0.35 + scrollProgress * 0.5,
          transform: `scaleY(${1.2 + scrollProgress * 0.6})`,
        }}
      ></div>
      <div
        className={styles.heroGradientBottom}
        style={{
          opacity: 0.3 + scrollProgress * 0.55,
          transform: `scaleY(${1.3 + scrollProgress * 0.8})`,
        }}
      ></div>
      <div
        className={styles.heroInner}
        style={{
          transform: `translateY(${scrollProgress * 25}px)`,
        }}
      >
        <p className={styles.serviceLabel}>{content.HOME_PAGE.HERO.LABEL}</p>
        <h1 className={styles.title}>
          {content.HOME_PAGE.HERO.TITLE}
        </h1>
        <p className={styles.subtitle}>
          {content.HOME_PAGE.HERO.SUBTITLE}
        </p>
        <div className={styles.heroActions}>
          <a
            href="https://calendly.com/michal-sysflow/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryAction}
          >
            {content.HOME_PAGE.HERO.BUTTON_PRIMARY}
          </a>
          <button
            className={styles.secondaryAction}
            onClick={() => scrollToSection("flowone")}
          >
            {content.HOME_PAGE.HERO.BUTTON_SECONDARY}
          </button>
        </div>
      </div>
    </section>
  );
};
