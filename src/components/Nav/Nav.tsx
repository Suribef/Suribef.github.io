import { useLang } from '../../contexts/LangContext'
import { useTheme } from '../../contexts/ThemeContext'
import styles from './Nav.module.css'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

const NAV_SECTIONS = [
  { key: 'products', id: 'products' },
  { key: 'work', id: 'work' },
  { key: 'stack', id: 'stack' },
  { key: 'about', id: 'about' },
  { key: 'contact', id: 'contact' },
] as const

export default function Nav() {
  const { lang, t, toggle: toggleLang } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="/#" className={styles.logo}>SU</a>

        <div className={styles.links}>
          {NAV_SECTIONS.map(({ key, id }) => (
            <button
              key={key}
              className={styles.link}
              onClick={() => scrollTo(id)}
            >
              {t.nav[key]}
            </button>
          ))}
        </div>

        <div className={styles.controls}>
          <button
            className={styles.iconBtn}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className={styles.langBtn}
            onClick={toggleLang}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            <span className={lang === 'es' ? styles.langActive : ''}>ES</span>
            <span className={styles.sep}>/</span>
            <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
