import { useLang } from '../../contexts/LangContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()
  const ref = useScrollReveal<HTMLDivElement>()

  function scrollToProducts() {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner} ref={ref}>
        <span className={styles.sectionNum}>01 ·</span>

        <div className={styles.badge}>
          <span className={styles.dot} />
          <span className={styles.badgeText}>{t.hero.available}</span>
        </div>

        <h1 className={styles.name}>{t.hero.name}</h1>
        <p className={styles.role}>{t.hero.role}</p>
        <p className={styles.tagline}>{t.hero.tagline}</p>

        <div className={styles.ctas}>
          <button className={styles.ctaPrimary} onClick={scrollToProducts}>
            {t.hero.cta_primary}
          </button>
          <a
            href="/cv-sergio-uribe.pdf"
            download
            className={styles.ctaSecondary}
          >
            {t.hero.cta_secondary} ↓
          </a>
        </div>
      </div>
    </section>
  )
}
