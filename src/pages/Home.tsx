import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import Work from '../components/Work/Work'
import Stack from '../components/Stack/Stack'
import About from '../components/About/About'
import EngineeringInPractice from '../components/EngineeringInPractice/EngineeringInPractice'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Work />
      <Stack />
      <About />
      <EngineeringInPractice />
      <Contact />
      <Footer />
    </main>
  )
}
