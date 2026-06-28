import { createContext, useContext, useState } from 'react'
import { es } from '../translations/es'
import { en } from '../translations/en'

type Lang = 'es' | 'en'

// Both translations share the same shape — literal types differ, so we widen to the es shape.
export type Translations = typeof es

const LangContext = createContext<{
  lang: Lang
  t: Translations
  toggle: () => void
}>({ lang: 'es', t: es, toggle: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const t = (lang === 'es' ? es : en) as unknown as Translations

  return (
    <LangContext.Provider value={{ lang, t, toggle: () => setLang(l => l === 'es' ? 'en' : 'es') }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
