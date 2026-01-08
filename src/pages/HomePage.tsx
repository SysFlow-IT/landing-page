import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Footer } from "@components/layout";
import { Problems } from "@components/home/Problems";
import { Testimonials } from "@components/home/Testimonials";
import { Team } from "@components/home/Team";
import { useContent } from "../hooks/useContent";
import { useRevealOnIntersect } from "@hooks/useRevealOnIntersect";
import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  const { content, language } = useContent();
  const [scrollProgress, setScrollProgress] = useState(0);
  const { ref: solutionsRef, isVisible } = useRevealOnIntersect();
  const location = useLocation();

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

  // Handle scroll to section from navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);



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
          </div>
        </div>
      </section>

      <Problems />

      <section className="section section--darker" ref={solutionsRef}>
        <div className="container">
          <h2 className="section-title">{content.HOME_PAGE.SOLUTIONS.TITLE}</h2>
          <p className={`${styles.descriptionText} ${isVisible ? styles.visible : ""}`}>
            {content.HOME_PAGE.SOLUTIONS.DESCRIPTION}
          </p>
          <h3 className={styles.heading}>{content.HOME_PAGE.SOLUTIONS.SUBHEADING}</h3>
          <div className={styles.cards}>
            <Link
              to={`/${language}/${content.HOME_PAGE.SOLUTIONS.CARDS.TRAINING.URL.replace('/', '')}`}
              className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
            >
              <div className={styles.cardImage}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt={content.HOME_PAGE.SOLUTIONS.CARDS.TRAINING.TITLE}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h4>{content.HOME_PAGE.SOLUTIONS.CARDS.TRAINING.TITLE}</h4>
                <p>
                  {content.HOME_PAGE.SOLUTIONS.CARDS.TRAINING.DESCRIPTION}
                </p>
                <span className={styles.link}>
                  {content.HOME_PAGE.SOLUTIONS.CARDS.TRAINING.LINK}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link
              to={`/${language}/${content.HOME_PAGE.SOLUTIONS.CARDS.FLOWONE.URL.replace('/', '')}`}
              className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className={styles.cardImage}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt={content.HOME_PAGE.SOLUTIONS.CARDS.FLOWONE.TITLE}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h4>{content.HOME_PAGE.SOLUTIONS.CARDS.FLOWONE.TITLE}</h4>
                <p>
                  {content.HOME_PAGE.SOLUTIONS.CARDS.FLOWONE.DESCRIPTION}
                </p>
                <span className={styles.link}>
                  {content.HOME_PAGE.SOLUTIONS.CARDS.FLOWONE.LINK}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <Team />

      <section id="kontakt" className={styles.cta}>
        <div className="container">
          <h2>{content.HOME_PAGE.CTA.TITLE}</h2>
          <p>
            {content.HOME_PAGE.CTA.DESCRIPTION}
          </p>
          <div className={styles.ctaButtons}>
            <a href="https://calendly.com/michal-sysflow/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
              {content.HOME_PAGE.CTA.BUTTON_PRIMARY}
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
