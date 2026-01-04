import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "@components/layout";
import { Team } from "@components/home/Team";
import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
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

      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.servicesTitle}>Jak możemy Ci pomóc?</h2>
          <div className={styles.serviceCards}>
            <Link to="/szkolenie" className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14v7" />
                </svg>
              </div>
              <h3>Szkolenie</h3>
              <p>
                Kompleksowy program dla zespołów. 8 spotkań, które wyposażą Twój zespół
                w praktyczną wiedzę i narzędzia do natychmiastowego zastosowania.
              </p>
              <span className={styles.cardLink}>
                Dowiedz się więcej
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/wdrozenia" className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Wdrożenia</h3>
              <p>
                Kompleksowe wdrożenia systemów automatyzacji. Od audytu, przez migrację
                danych, po pełną automatyzację procesów w Twojej firmie.
              </p>
              <span className={styles.cardLink}>
                Dowiedz się więcej
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Team />
      <Footer />
    </div>
  );
};
