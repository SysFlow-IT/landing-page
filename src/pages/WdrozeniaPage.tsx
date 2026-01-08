import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "@components/layout";
import { FlowOne } from "@components/home/FlowOne";
import { WhyChoose } from "@components/home/WhyChoose";
import { Team } from "@components/home/Team";
import { useContent } from "../hooks/useContent";
import { useScrollToSection } from "@hooks/useScrollToSection";
import styles from "./WdrozeniaPage.module.css";

export const WdrozeniaPage: React.FC = () => {
  const { content } = useContent();
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollToSection = useScrollToSection();

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
    <div className="app loaded">
      <Navbar />
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            transform: `translateY(${scrollProgress * 140}px) scale(${1 + scrollProgress * 0.18})`,
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
          <p className={styles.serviceLabel}>{content.IMPLEMENTATIONS_PAGE.HERO.LABEL}</p>
          <h1 className={styles.title}>
            {content.IMPLEMENTATIONS_PAGE.HERO.TITLE}
          </h1>
          <p className={styles.subtitle}>
            {content.IMPLEMENTATIONS_PAGE.HERO.SUBTITLE}
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://calendly.com/michal-sysflow/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              {content.IMPLEMENTATIONS_PAGE.HERO.BUTTON_PRIMARY}
            </a>
            <button
              className={styles.secondaryAction}
              onClick={() => scrollToSection("flowone")}
            >
              {content.IMPLEMENTATIONS_PAGE.HERO.BUTTON_SECONDARY}
            </button>
          </div>
        </div>
      </section>

      <FlowOne />
      <WhyChoose />
      <Team />

      <section className={styles.cta}>
        <div className="container">
          <h2>{content.IMPLEMENTATIONS_PAGE.CTA.TITLE}</h2>
          <p>
            {content.IMPLEMENTATIONS_PAGE.CTA.DESCRIPTION}
          </p>
          <div className={styles.ctaButtons}>
            <a href="https://calendly.com/michal-sysflow/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
              {content.IMPLEMENTATIONS_PAGE.CTA.BUTTON_PRIMARY}
            </a>
            <a href={content.CONTACT.phoneLink} className={styles.secondaryAction}>
              {content.CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
