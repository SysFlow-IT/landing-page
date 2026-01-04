import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CONTACT } from "@constants";
import styles from "./layout.module.css";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${
        hidden ? styles.hidden : ""
      } ${className}`}
    >
      <div className="container">
        <div className={styles.navContent}>
          <Link
            to="/"
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
            className={`${styles.navCluster} ${
              mobileMenuOpen ? styles.navClusterOpen : ""
            }`}
          >
            <div
              className={`${styles.navLinks} ${
                mobileMenuOpen ? styles.open : ""
              }`}
            >
              <Link
                to="/szkolenie"
                onClick={handleMobileClose}
                className={isActive("/szkolenie") ? styles.active : ""}
              >
                Szkolenie
              </Link>
              <Link
                to="/wdrozenia"
                onClick={handleMobileClose}
                className={isActive("/wdrozenia") ? styles.active : ""}
              >
                Wdrożenia
              </Link>
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className={styles.ctaButton}
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <Link to="/" className={styles.footerLogo}>
              <img
                src={`${import.meta.env.BASE_URL}image/logo.png`}
                alt="SysFlow logo"
                className={styles.logoImage}
              />
              <span className={styles.logoText}>SysFlow</span>
            </Link>
            <div className={styles.footerContact}>
              <a href={`mailto:${CONTACT.email}`} className={styles.footerLink}>
                {CONTACT.email}
              </a>
              <a href={CONTACT.phoneLink} className={styles.footerLink}>
                {CONTACT.phone}
              </a>
            </div>
          </div>
          <p className={styles.footerText}>
            © 2025 SysFlow. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
