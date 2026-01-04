import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "@components/layout";
import { Team } from "@components/home/Team";
import { useRevealOnIntersect } from "@hooks/useRevealOnIntersect";
import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { ref: solutionsRef, isVisible } = useRevealOnIntersect();

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
          <p className={styles.serviceLabel}>SysFlow /</p>
          <h1 className={styles.title}>
            Automatyzacja, AI, bezpieczeństwo i systemy zarządzania danymi
          </h1>
          <p className={styles.subtitle}>
            SysFlow.One to software house, który przekształca sposób pracy firm
            poprzez automatyzację, AI, bezpieczeństwo i systemy zarządzania danymi.
          </p>
        </div>
      </section>

      <section className="section section--darker" ref={solutionsRef}>
        <div className="container">
          <h2 className="section-title">Nasze Rozwiązania</h2>
          <p className={`${styles.descriptionText} ${isVisible ? styles.visible : ""}`}>
            Też przez to przechodziliśmy — i odpowiedź znaleźliśmy w technologiach
            oraz mądrej automatyzacji. Poświęciliśmy czas na analizę narzędzi,
            przetestowaliśmy je w praktyce i zostawiliśmy tylko te, które realnie
            upraszczają pracę. Porządkujemy procesy, łączymy systemy, wprowadzamy
            AI tam, gdzie ma sens — aż w końcu układamy spójny, działający
            ekosystem pracy. Efekt? Mniej chaosu, szybsze decyzje i więcej czasu
            na kluczowe zadania.
          </p>
          <h3 className={styles.heading}>Jak możemy pomóc?</h3>
          <div className={styles.cards}>
            <Link
              to="/szkolenie"
              className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
            >
              <div className={styles.cardImage}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="Szkolenie"
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h4>Szkolenie</h4>
                <p>
                  Kompleksowy program edukacyjny z optymalizacji pracy,
                  automatyzacji, bezpieczeństwa i prywatności oraz AI
                </p>
                <span className={styles.link}>
                  Dowiedz się więcej
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link
              to="/wdrozenia"
              className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className={styles.cardImage}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="FlowOne SYSTEM"
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h4>FlowOne SYSTEM</h4>
                <p>
                  Wdrożenie zaawansowanego systemu do zarządzania danymi i
                  automatyzacji procesów biznesowych przy wykorzystaniu narzędzi
                  typu low-code.
                </p>
                <span className={styles.link}>
                  Dowiedz się więcej
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Team />
      <Footer />
    </div>
  );
};
