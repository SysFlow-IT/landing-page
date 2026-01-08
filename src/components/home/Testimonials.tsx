import React, { useRef, useEffect } from 'react';
import { useContent } from '../../hooks/useContent';
import { useRevealOnIntersect } from '@hooks/useRevealOnIntersect';
import styles from './Testimonials.module.css';
import gsap from 'gsap';

export const Testimonials: React.FC = () => {
    const { content } = useContent();
    const { ref, isVisible } = useRevealOnIntersect();
    const cardRef = useRef<HTMLDivElement>(null);

    // Simple carousel logic could be added here if we have multiple testimonials
    // For now, we display the first one statically but styled as a featured card
    const testimonial = content.TESTIMONIALS[0];

    useEffect(() => {
        if (isVisible && cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
            );
        }
    }, [isVisible]);

    return (
        <section className={`${styles.section} section section--darker`} ref={ref}>
            <div className="container">
                <h2 className="section-title">
                    {content.HOME_PAGE.TESTIMONIALS.TITLE}
                </h2>

                <div className={styles.testimonialWrapper}>
                    <div className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`} ref={cardRef}>
                        <p className={styles.quote}>
                            "{testimonial.content}"
                        </p>
                        <div className={styles.author}>
                            <span className={styles.name}>{testimonial.author}</span>
                            <span className={styles.role}>
                                {testimonial.role}, {testimonial.company}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
