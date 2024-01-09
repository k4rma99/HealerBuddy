import ChooseUs from './components/choose-us/choose'
import { Content } from './components/count/content'
import Hero from './components/hero/hero'
import { Process } from './components/process/process'
import { Services } from './components/services-given/services'
import { Team } from './components/team/team'
import Footer from '@/shared/footer'

import 'react-toastify/dist/ReactToastify.css';
import MentalHealthForm from './register-form/page'
import Directory from './directory/page'

export default function Home() {
  return (

    <main>
      <Hero />
      <Content />
      <ChooseUs />
      <Services />
      <Process />
      <Team />
      <Footer />
    </main>

  )
}
