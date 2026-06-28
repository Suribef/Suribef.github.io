import { Link } from 'react-router-dom'
import { useLang } from '../../contexts/LangContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './EngineeringInPractice.module.css'

function tagClass(type: 'learn' | 'tradeoff' | 'leadership') {
  if (type === 'learn') return styles.tagLearn
  if (type === 'tradeoff') return styles.tagTradeoff
  return styles.tagLeadership
}

export default function EngineeringInPractice() {
  const { t } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className={styles.section} id="engineering" ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>{t.engineering.section_num} ·</span>
          <h2 className={styles.title}>{t.engineering.title}</h2>
          <p className={styles.subtitle}>{t.engineering.subtitle}</p>
        </div>

        <div className={styles.cards}>
          {t.engineering.items.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.projectBadge}>{item.project}</span>
              </div>

              <div className={styles.grid}>
                <div className={styles.col}>
                  <span className={styles.colLabel}>Problema</span>
                  <p className={styles.colText}>{item.problem}</p>
                </div>
                <div className={styles.col}>
                  <span className={styles.colLabel}>Decisión</span>
                  <p className={styles.colText}>{item.decision}</p>
                </div>
                <div className={styles.col}>
                  <span className={styles.colLabel}>Trade-off</span>
                  <p className={styles.colText}>{item.tradeoff}</p>
                </div>
              </div>

              <div className={styles.cardFoot}>
                <span className={`${styles.tag} ${tagClass(item.tag_type)}`}>
                  {item.tag}
                </span>
                {item.link_external ? (
                  <a
                    href={item.link_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footLink}
                  >
                    {item.link_label} ↗
                  </a>
                ) : (
                  <Link to={item.link_href} className={styles.footLink}>
                    {item.link_label} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
