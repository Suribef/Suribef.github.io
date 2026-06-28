import { useLang } from '../../contexts/LangContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Stack.module.css'

export default function Stack() {
  const { t } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className={styles.section} id="stack" ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>{t.stack.section_num} ·</span>
          <h2 className={styles.title}>{t.stack.title}</h2>
          <p className={styles.subtitle}>{t.stack.subtitle}</p>
        </div>

        <div className={styles.table}>
          {t.stack.categories.map((cat) => (
            <div key={cat.label} className={styles.row}>
              <span className={styles.label}>{cat.label}</span>
              <span className={styles.items}>{cat.items.join(' · ')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
