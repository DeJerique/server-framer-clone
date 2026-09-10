import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import FeatureGrid from './components/FeatureGrid'
import Showcase from './components/Showcase'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <FeatureGrid />
        <Showcase />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
