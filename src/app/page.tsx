import Header from '@/shared/header'
import Hero from './components/hero/hero'
import Footer from '@/shared/footer'
import { Count } from './components/count/count'
import { Process } from './components/process/process'
import { Team } from './components/team/team'
import { Testimonials } from './components/testimonials/testimonials'
import ChooseUs from './components/choose-us/choose'
import Services from './components/services-given/services'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Count />
      <ChooseUs />
      <Services />
      <Process />
      <Team />
      {/* <Testimonials /> */}
      <Footer />
    </main>
  )
}
