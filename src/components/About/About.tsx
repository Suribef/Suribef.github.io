import { useLang } from '../../contexts/LangContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './About.module.css'

export default function About() {
  const { t } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className={styles.section} id="about" ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>{t.about.section_num} ·</span>
          <h2 className={styles.title}>{t.about.title}</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.main}>
            {t.about.paragraphs.map((para, i) => (
              <p key={i} className={styles.para}>{para}</p>
            ))}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sideItem}>
              <span className={styles.sideLabel}>{t.about.sidebar.location_label}</span>
              <span className={styles.sideValue}>{t.about.sidebar.location_value}</span>
            </div>
            <div className={styles.sideItem}>
              <span className={styles.sideLabel}>{t.about.sidebar.available_label}</span>
              <span className={styles.sideValue}>{t.about.sidebar.available_value}</span>
            </div>
            <div className={styles.sideItem}>
              <span className={styles.sideLabel}>{t.about.sidebar.languages_label}</span>
              <span className={styles.sideValue}>{t.about.sidebar.languages_value}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
