import Header from '@/shared/header'
import Hero from './components/hero/hero'
import Footer from '@/shared/footer'
import { Count } from './components/count/count'
import { Process } from './components/process/process'
import { Team } from './components/team/team'
import { Testimonials } from './components/testimonials/testimonials'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Count />
      <Process />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  )
}
