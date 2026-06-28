import { useLang } from '../../contexts/LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>{t.footer.copy}</p>
        <p className={styles.built}>{t.footer.built}</p>
      </div>
    </footer>
  )
}
