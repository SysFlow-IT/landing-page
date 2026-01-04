import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "@components/layout";
import { Problems } from "@components/home/Problems";
import { Training } from "@components/home/Training";
import { Team } from "@components/home/Team";
import { CONTACT } from "@constants";
import { useScrollToSection } from "@hooks/useScrollToSection";
import styles from "./SzkoleniePage.module.css";

export const SzkoleniePage: React.FC = () => {
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
          <source src={`${import.meta.env.BASE_URL}video/video1.mp4`} type="video/mp4" />
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
          <p className={styles.serviceLabel}>SysFlow / Szkolenie</p>
          <h1 className={styles.title}>
            Przekształć Sposób Pracy Swojego Zespołu
          </h1>
          <p className={styles.subtitle}>
            Kompleksowy program szkoleniowy: 8 spotkań, które wyposażą Twój zespół
            w praktyczną wiedzę i narzędzia do natychmiastowego zastosowania.
          </p>
          <div className={styles.heroActions}>
            <button
              className={styles.primaryAction}
              onClick={() => scrollToSection("szkolenie")}
            >
              Zobacz program
            </button>
            <button
              className={styles.secondaryAction}
              onClick={() => window.location.href = CONTACT.phoneLink}
            >
              Zadzwoń
            </button>
          </div>
        </div>
      </section>

      <Problems />
      <Training />
      <Team />

      <section className={styles.cta}>
        <div className="container">
          <h2>Zarezerwuj szkolenie dla swojego zespołu</h2>
          <p>
            Skontaktuj się z nami, aby omówić szczegóły programu i dostosować go do potrzeb Twojej firmy.
          </p>
          <div className={styles.ctaButtons}>
            <a href={`mailto:${CONTACT.email}`} className={styles.primaryAction}>
              Napisz do nas
            </a>
            <a href={CONTACT.phoneLink} className={styles.secondaryAction}>
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
