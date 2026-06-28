import { useLang } from '../../contexts/LangContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Products.module.css'

type ProductStatus = 'dev' | 'done' | 'npm' | 'design'

function StatusBadge({ status, t }: {
  status: ProductStatus
  t: { status_dev: string; status_done: string; status_npm: string; status_design: string }
}) {
  if (status === 'dev') {
    return (
      <span className={`${styles.statusBadge} ${styles.statusDev}`}>
        <span className={styles.statusDot} />{t.status_dev}
      </span>
    )
  }
  if (status === 'done') {
    return (
      <span className={`${styles.statusBadge} ${styles.statusDone}`}>
        <span className={styles.statusDot} />{t.status_done}
      </span>
    )
  }
  if (status === 'npm') {
    return (
      <span className={`${styles.statusBadge} ${styles.statusNpm}`}>
        {t.status_npm}
      </span>
    )
  }
  return (
    <span className={`${styles.statusBadge} ${styles.statusDesign}`}>
      <span className={styles.statusDot} />{t.status_design}
    </span>
  )
}

export default function Products() {
  const { t } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className={styles.section} id="products" ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>{t.products.section_num} ·</span>
          <h2 className={styles.title}>{t.products.title}</h2>
          <p className={styles.subtitle}>{t.products.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.products.items.map((item) => {
            const hasExtra = 'metrics' in item
            return (
              <div key={item.num} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNum}>{item.num}</span>
                  <StatusBadge status={item.status} t={t.products} />
                </div>
                <p className={styles.tags}>{item.tags}</p>
                <h3 className={styles.cardName}>{item.name}</h3>
                <p className={styles.desc}>{item.description}</p>
                <p className={styles.highlight}>{item.highlight}</p>
                <div className={styles.stack}>
                  {item.stack.map((tech) => (
                    <span key={tech} className={styles.chip}>{tech}</span>
                  ))}
                </div>
                {hasExtra && (
                  <div className={styles.metrics}>
                    <p>{(item as typeof t.products.items[0]).metrics}</p>
                    <div className={styles.metricsLinks}>
                      <a
                        href={(item as typeof t.products.items[0]).storybook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.metricsLink}
                      >
                        Storybook ↗
                      </a>
                      <a
                        href={(item as typeof t.products.items[0]).npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.metricsLink}
                      >
                        npm ↗
                      </a>
                      <a
                        href={(item as typeof t.products.items[0]).case_study}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.metricsLink}
                      >
                        Case Study ↗
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
