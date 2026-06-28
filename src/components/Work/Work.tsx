import { Link } from 'react-router-dom'
import { useLang } from '../../contexts/LangContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Work.module.css'

export default function Work() {
  const { t } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className={styles.section} id="work" ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>{t.work.section_num} ·</span>
          <h2 className={styles.title}>{t.work.title}</h2>
          <p className={styles.subtitle}>{t.work.subtitle}</p>
        </div>

        <div className={styles.list}>
          {t.work.items.map((item) => (
            <div key={item.name} className={styles.item}>
              <div className={styles.left}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.desc}>{item.description}</p>
                <div className={styles.stack}>
                  {item.stack.map((tech) => (
                    <span key={tech} className={styles.chip}>{tech}</span>
                  ))}
                </div>
              </div>
              {item.link_external ? (
                <a
                  href={item.link_href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {item.link_label} ↗
                </a>
              ) : (
                <Link to={item.link_href} className={styles.link}>
                  {item.link_label} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
