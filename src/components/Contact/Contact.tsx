import { useLang } from '../../contexts/LangContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <div className={styles.inner}>
        <span className={styles.num}>{t.contact.section_num} ·</span>
        <h2 className={styles.headline}>{t.contact.headline}</h2>
        <p className={styles.desc}>{t.contact.description}</p>

        <div className={styles.actions}>
          <a href={t.contact.email_href} className={styles.emailBtn}>
            {t.contact.email_label}
          </a>
          <a href="/cv-sergio-uribe.pdf" download className={styles.cvLink}>
            {t.contact.cv_label} ↓
          </a>
        </div>

        <div className={styles.socials}>
          <a
            href={t.contact.github_href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            {t.contact.github_label} ↗
          </a>
          <a
            href={t.contact.linkedin_href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            {t.contact.linkedin_label} ↗
          </a>
        </div>
      </div>
    </section>
  )
}
