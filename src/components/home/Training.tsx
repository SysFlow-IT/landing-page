import React, { useRef, useEffect, useState } from "react";
import { useContent } from "@hooks/useContent";
import { useRevealOnIntersect } from "@hooks/useRevealOnIntersect";
import styles from "./Training.module.css";

// Interface for Agenda Item - inferred from usage but better to be explicit or derived
interface AgendaItem {
  number: string;
  title: string;
  description: string;
}

interface AgendaCardProps {
  item: AgendaItem;
  index: number;
  isVisible: boolean;
}

const AgendaCard: React.FC<AgendaCardProps> = ({ item, index, isVisible }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  });
  const [gridTransform, setGridTransform] = useState({
    x: 50,
    y: 50,
    scale: 1,
    radius: 80,
  });

  useEffect(() => {
    const element = itemRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      const translateX = ((x - centerX) / centerX) * 8;
      const translateY = ((y - centerY) / centerY) * 8;

      const gridXPercent = (x / rect.width) * 100;
      const gridYPercent = (y / rect.height) * 100;
      const bulgeRadius = 80;
      const gridScale = 1.5;

      setTransform({
        x: translateX,
        y: translateY,
        rotateX,
        rotateY,
      });

      setGridTransform({
        x: gridXPercent,
        y: gridYPercent,
        scale: gridScale,
        radius: bulgeRadius,
      });
    };

    const handleMouseLeave = () => {
      setTransform({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
      setGridTransform({ x: 50, y: 50, scale: 1, radius: 80 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`${styles.agendaItem} ${isVisible ? styles.visible : ""}`}
      style={{
        animationDelay: `${index * 0.05}s`,
        transform: `perspective(1000px) translateX(${transform.x}px) translateY(${transform.y}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateZ(0)`,
      }}
    >
      <div className={styles.agendaGridWrapper}>
        <div
          className={styles.agendaGridPattern}
          style={
            {
              transform: `scale(${gridTransform.scale})`,
              transformOrigin: `${gridTransform.x}% ${gridTransform.y}%`,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={styles.agendaGridBulge}
          style={
            {
              "--bulge-radius": `${gridTransform.radius}px`,
              "--bulge-x": `${gridTransform.x}%`,
              "--bulge-y": `${gridTransform.y}%`,
            } as React.CSSProperties
          }
        ></div>
      </div>
      <div className={styles.agendaNumber}>{item.number}</div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
};

export const Training: React.FC = () => {
  const { content } = useContent();
  const { ref, isVisible } = useRevealOnIntersect();
  const [animatedPrice, setAnimatedPrice] = useState(0);
  const priceBoxRef = useRef<HTMLDivElement>(null);
  const animationTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const priceBox = priceBoxRef.current;
    if (!priceBox) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Resetuj cenę i uruchom animację od 30000 w dół do target price
          setAnimatedPrice(30000);

          // Wyczyść poprzedni timer jeśli istnieje
          if (animationTimerRef.current) {
            clearInterval(animationTimerRef.current);
          }

          let start = 30000;
          const end = content.TRAINING_COMPONENT.PRICE.VALUE; // Target price from content
          const duration = 2000;
          const decrement = (30000 - end) / (duration / 16);

          animationTimerRef.current = window.setInterval(() => {
            start -= decrement;
            if (start <= end) {
              setAnimatedPrice(end);
              if (animationTimerRef.current) {
                clearInterval(animationTimerRef.current);
                animationTimerRef.current = null;
              }
            } else {
              setAnimatedPrice(Math.floor(start));
            }
          }, 16);
        } else {
          // Resetuj cenę gdy element opuszcza viewport
          setAnimatedPrice(30000);
          if (animationTimerRef.current) {
            clearInterval(animationTimerRef.current);
            animationTimerRef.current = null;
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(priceBox);

    return () => {
      observer.disconnect();
      if (animationTimerRef.current) {
        clearInterval(animationTimerRef.current);
      }
    };
  }, [content.TRAINING_COMPONENT.PRICE.VALUE]);

  return (
    <section
      id="szkolenie"
      className={`${styles.section} section section--dark`}
      ref={ref}
    >
      <div className={styles.videoBackground}>
        <video autoPlay loop muted playsInline className={styles.video}>
          <source
            src={`${import.meta.env.BASE_URL}video/video1.mp4`}
            type="video/mp4"
          />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>
      <div className="container">
        <h2
          className={`section-title ${styles.titleText}`}
          style={{ color: "#fff" }}
        >
          {content.TRAINING_COMPONENT.TITLE}
        </h2>
        <p
          className={`section-description ${styles.descriptionText}`}
          style={{ color: "#fff" }}
        >
          {content.TRAINING_COMPONENT.DESCRIPTION}
        </p>

        <div className={styles.features}>
          <h3>{content.TRAINING_COMPONENT.FEATURES_TITLE}</h3>
          <div className={styles.featuresGrid}>
            {content.TRAINING_FEATURES.map((feature, index) => (
              <div
                key={index}
                className={`${styles.feature} ${isVisible ? styles.visible : ""
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.featureIcon}>✓</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: feature.replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong>$1</strong>"
                    ),
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          ref={priceBoxRef}
          className={`${styles.priceBox} ${isVisible ? styles.visible : ""}`}
        >
          <h3>{content.TRAINING_COMPONENT.PRICE.TITLE}</h3>
          <div className={styles.price}>
            {animatedPrice.toLocaleString(content.TRAINING_COMPONENT.PRICE.VALUE > 10000 ? "pl-PL" : "en-US")} {content.TRAINING_COMPONENT.PRICE.VALUE > 10000 ? "PLN" : "EUR"}
          </div>
          <p className={styles.priceNote}>
            {content.TRAINING_COMPONENT.PRICE.NOTE}
          </p>
        </div>

        <h3
          className={`${styles.agendaTitle} ${styles.agendaTitleText}`}
          style={{ color: "#fff" }}
        >
          {content.TRAINING_COMPONENT.AGENDA.TITLE}
        </h3>
        <p
          className={`${styles.agendaSubtitle} ${styles.agendaSubtitleText}`}
          style={{ color: "#fff" }}
        >
          {content.TRAINING_COMPONENT.AGENDA.SUBTITLE}
        </p>

        <div className={styles.agendaGrid}>
          {content.AGENDA_ITEMS.map((item, index) => (
            <AgendaCard
              key={item.number}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
