import React from 'react'
import { useContent } from '../../hooks/useContent'
import { useRevealOnIntersect } from '@hooks/useRevealOnIntersect'
import styles from './CTA.module.css'

export const CTA: React.FC = () => {
  const { content } = useContent()
  const { ref, isVisible } = useRevealOnIntersect()

  return (
    <section className={`${styles.section} section section--dark`} ref={ref}>
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>{content.CTA_COMPONENT.TITLE}</h2>
        <p className={styles.description}>
          {content.CTA_COMPONENT.DESCRIPTION}
        </p>

        <div className={`${styles.steps} ${isVisible ? styles.visible : ''}`}>
          <h3>{content.CTA_COMPONENT.STEPS_TITLE}</h3>
          <ol className={styles.stepsList}>
            {content.CTA_COMPONENT.STEPS.map((step, index) => (
              <li key={index}><strong>{step.BOLD}</strong> – {step.TEXT}</li>
            ))}
          </ol>
        </div>

        <div className={styles.buttons}>
          <a href="https://calendly.com/michal-sysflow/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
            {content.CTA_COMPONENT.BUTTON_PRIMARY}
          </a>
          <button
            className={styles.secondary}
            onClick={() => window.location.href = content.CONTACT.phoneLink}
          >
            {content.CTA_COMPONENT.BUTTON_SECONDARY}
          </button>
        </div>
      </div>
    </section>
  )
}
