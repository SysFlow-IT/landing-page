import React, { useRef, useEffect, useMemo, useState } from 'react'
import { useContent } from '../../hooks/useContent'
import { useRevealOnIntersect } from '@hooks/useRevealOnIntersect'
import styles from './FlowOne.module.css'

interface ProcessStep {
  title: string
  description: string
  image: string
}

interface AutomationArea {
  title: string
  description: string
  image?: string
}

interface ProcessStepCardProps {
  step: ProcessStep
  index: number
  isVisible: boolean
  delayStyle: React.CSSProperties
}

interface AutomationAreaCardProps {
  area: AutomationArea
  index: number
  isVisible: boolean
}

const AutomationAreaCard: React.FC<AutomationAreaCardProps> = ({
  area,
  index,
  isVisible,
}) => {
  return (
    <div
      className={`${styles.areaCard} ${isVisible ? styles.visible : ''}`}
      style={{
        animationDelay: `${index * 0.12}s`,
        '--card-index': index
      } as React.CSSProperties}
    >
      {area.image && (
        <div className={styles.areaCardImageWrapper} key={`image-${index}`}>
          <img
            key={`img-${index}-${area.image}`}
            src={area.image}
            alt={area.title}
            className={styles.areaCardImage}
            loading="lazy"
          />
        </div>
      )}
      <h4>{area.title}</h4>
      <p>{area.description}</p>
    </div>
  )
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  step,
  index,
  isVisible,
  delayStyle,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isCompactStack, setIsCompactStack] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsCompactStack(window.innerWidth <= 600)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const baseTop = isCompactStack ? 90 : 140
  const verticalStep = isCompactStack ? 18 : 30
  const horizontalStep = isCompactStack ? 8 : 15
  const stickyTop = baseTop + index * verticalStep
  const leftOffset = index * horizontalStep

  return (
    <div
      ref={cardRef}
      className={`${styles.processStep} ${isVisible ? styles.visible : ''}`}
      style={{
        position: 'sticky',
        top: `${stickyTop}px`,
        marginLeft: `${leftOffset}px`,
        marginBottom: '200px',
        transformOrigin: 'center top',
        ...delayStyle,
      }}
    >
      <div className={styles.stepImageWrapper}>
        <img
          src={step.image}
          alt={step.title}
          className={styles.stepImage}
          loading="lazy"
        />
      </div>
      <div className={styles.stepContent}>
        <h4>{step.title}</h4>
        <p>{step.description}</p>
      </div>
    </div>
  )
}

export const FlowOne: React.FC = () => {
  const { content } = useContent()
  const { ref, isVisible } = useRevealOnIntersect()

  const cardDelaySteps = useMemo(
    () =>
      content.PROCESS_STEPS.map((_, index) => ({
        animationDelay: `${index * 140 + 200}ms`,
      })),
    [content.PROCESS_STEPS]
  )

  return (
    <section id="flowone" className="section section--darker" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${styles.titleText}`}>{content.FLOW_ONE_COMPONENT.TITLE}</h2>
        <p className={`section-description ${styles.descriptionText}`}>
          {content.FLOW_ONE_COMPONENT.DESCRIPTION}
        </p>

        <div className={`${styles.goal} ${isVisible ? styles.visible : ''}`}>
          <h3>{content.FLOW_ONE_COMPONENT.GOAL.TITLE}</h3>
          <p>
            {content.FLOW_ONE_COMPONENT.GOAL.DESCRIPTION}
          </p>
          <div className={styles.billingModel}>
            {content.FLOW_ONE_COMPONENT.GOAL.BILLING}
          </div>
        </div>

        <h3 className={styles.processTitle}>{content.FLOW_ONE_COMPONENT.PROCESS_TITLE}</h3>
        <div className={styles.processStepsContainer}>
          <div className={styles.processSteps}>
            {content.PROCESS_STEPS.map((step, index) => (
              <ProcessStepCard
                key={index}
                step={step}
                index={index}
                isVisible={isVisible}
                delayStyle={cardDelaySteps[index]}
              />
            ))}
          </div>
        </div>

        <h3 className={styles.areasTitle}>{content.FLOW_ONE_COMPONENT.AREAS.TITLE}</h3>
        <p className={styles.areasSubtitle}>
          {content.FLOW_ONE_COMPONENT.AREAS.SUBTITLE}
        </p>

        <div className={styles.automationAreas}>
          {content.AUTOMATION_AREAS.map((area, index) => (
            <AutomationAreaCard
              key={index}
              area={area}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
