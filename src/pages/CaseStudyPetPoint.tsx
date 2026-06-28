import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import styles from './CaseStudyPetPoint.module.css'

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

const ASCII_ARCH = `┌─────────────────────────────┐
│   React 19 + TypeScript     │
│   TanStack Query · SPA      │
└──────────────┬──────────────┘
               │ HTTPS
┌──────────────▼──────────────┐
│      Supabase / PostgREST   │
│      Auth · RLS context     │
└──────┬───────────────┬──────┘
       │               │
┌──────▼──────┐ ┌──────▼──────┐
│ PostgreSQL  │ │  RPCs       │
│ RLS 12 tbl  │ │  atómicas   │
└─────────────┘ └─────────────┘`

export default function CaseStudyPetPoint() {
  const { t } = useLang()
  const cs = t.case_study_petpoint
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link to="/" className={styles.back}>{cs.back}</Link>

        <header className={styles.header}>
          <span className={styles.label}>{cs.label.toUpperCase()}</span>
          <h1 className={styles.title}>{cs.title}</h1>
          <p className={styles.subtitle}>{cs.subtitle}</p>
          <span className={styles.rolePill}>{cs.role}</span>
        </header>

        <section className={styles.triSection}>
          <div className={styles.triCol}>
            <span className={styles.triLabel}>{cs.problem_label}</span>
            <p className={styles.triText}>{cs.problem}</p>
          </div>
          <div className={styles.triCol}>
            <span className={styles.triLabel}>{cs.approach_label}</span>
            <p className={styles.triText}>{cs.approach}</p>
          </div>
          <div className={styles.triCol}>
            <span className={styles.triLabel}>{cs.result_label}</span>
            <p className={styles.triText}>{cs.result}</p>
          </div>
        </section>

        <section className={styles.archSection}>
          <span className={styles.sectionLabel}>{cs.arch_label.toUpperCase()}</span>
          <pre className={styles.ascii}>{ASCII_ARCH}</pre>
        </section>

        <section className={styles.decisionsSection}>
          <span className={styles.sectionLabel}>{cs.decisions_label.toUpperCase()}</span>
          <div className={styles.accordion}>
            {cs.decisions.map((decision, i) => (
              <div
                key={i}
                className={`${styles.accordionItem} ${openIdx === i ? styles.accordionOpen : ''}`}
              >
                <button
                  className={styles.accordionHead}
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                >
                  <span className={styles.accordionTitle}>{decision.title}</span>
                  {openIdx === i ? <ChevronDown /> : <ChevronRight />}
                </button>
                {openIdx === i && (
                  <div className={styles.accordionBody}>
                    <p>{decision.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.stackSection}>
          <span className={styles.sectionLabel}>{cs.stack_label.toUpperCase()}</span>
          <div className={styles.chips}>
            {cs.stack.map((tech) => (
              <span key={tech} className={styles.chip}>{tech}</span>
            ))}
          </div>
        </section>

        <div className={styles.footLinks}>
          <a
            href={cs.repo_href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoLink}
          >
            {cs.repo_label} ↗
          </a>
          <Link to="/" className={styles.backBottom}>{cs.back}</Link>
        </div>
      </div>
    </main>
  )
}
