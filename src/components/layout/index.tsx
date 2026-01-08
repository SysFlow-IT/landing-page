import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContent } from "../../hooks/useContent";
import { setLanguagePreference } from "../../utils/language";
import styles from "./layout.module.css";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const { content, language } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let lastScroll = window.pageYOffset;
    const handleScroll = () => {
      const current = window.pageYOffset;
      setScrolled(current > 80);
      if (current > lastScroll && current > 220) {
        setHidden(true);
        if (window.innerWidth <= 768) {
          setMobileMenuOpen(false);
        }
      } else {
        setHidden(false);
      }
      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileClose = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname.includes(path);

  const scrollToSection = (sectionId: string) => {
    handleMobileClose();
    if (location.pathname !== `/${language}`) {
      navigate(`/${language}`, { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const switchLanguage = () => {
    const newLang = language === 'pl' ? 'en' : 'pl';
    setLanguagePreference(newLang);

    // Simple path mapping
    const currentPath = location.pathname.split('/').pop();
    let newPath = '';

    // Map specific routes
    if (currentPath === 'szkolenie' || currentPath === 'training') {
      newPath = newLang === 'pl' ? 'szkolenie' : 'training';
    } else if (currentPath === 'wdrozenia' || currentPath === 'implementations') {
      newPath = newLang === 'pl' ? 'wdrozenia' : 'implementations';
    }

    navigate(`/${newLang}/${newPath}`);
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${hidden ? styles.hidden : ""
        } ${className}`}
    >
      <div className="container">
        <div className={styles.navContent}>
          <Link
            to={`/${language}`}
            className={styles.brand}
            onClick={handleMobileClose}
          >
            <img
              src={`${import.meta.env.BASE_URL}image/logo.png`}
              alt="SysFlow logo"
              className={styles.brandMark}
            />
            <span className={styles.brandText}>SysFlow</span>
          </Link>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className={`${styles.navCluster} ${mobileMenuOpen ? styles.navClusterOpen : ""
              }`}
          >
            <div
              className={`${styles.navLinks} ${mobileMenuOpen ? styles.open : ""
                }`}
            >
              <Link
                to={`/${language}/${content.NAV.URLS.TRAINING}`}
                onClick={handleMobileClose}
                className={isActive(content.NAV.URLS.TRAINING) ? styles.active : ""}
              >
                {content.NAV.TRAINING}
              </Link>
              <Link
                to={`/${language}/${content.NAV.URLS.IMPLEMENTATIONS}`}
                onClick={handleMobileClose}
                className={isActive(content.NAV.URLS.IMPLEMENTATIONS) ? styles.active : ""}
              >
                {content.NAV.IMPLEMENTATIONS}
              </Link>
              <a
                onClick={() => scrollToSection("team")}
                className={styles.navLink}
              >
                {content.NAV.TEAM}
              </a>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.ctaButton}
                onClick={() => scrollToSection("kontakt")}
              >
                {content.NAV.CONTACT}
              </button>
              <button
                className={styles.langSwitch}
                onClick={switchLanguage}
              >
                {language === 'pl' ? 'EN' : 'PL'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  const { content, language } = useContent();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <Link to={`/${language}`} className={styles.footerLogo}>
              <img
                src={`${import.meta.env.BASE_URL}image/logo.png`}
                alt="SysFlow logo"
                className={styles.logoImage}
              />
              <span className={styles.logoText}>SysFlow</span>
            </Link>
            <div className={styles.footerContact}>
              <a href={`mailto:${content.CONTACT.email}`} className={styles.footerLink}>
                {content.CONTACT.email}
              </a>
              <a href={content.CONTACT.phoneLink} className={styles.footerLink}>
                {content.CONTACT.phone}
              </a>
            </div>
          </div>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} SysFlow. {language === 'pl' ? 'Wszelkie prawa zastrzeżone.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
