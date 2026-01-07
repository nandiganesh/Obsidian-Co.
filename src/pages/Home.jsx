import Hero from '../components/home/Hero'
import MaterialHighlights from '../components/home/MaterialHighlights'
import BrandLegacy from '../components/home/BrandLegacy'
import FeaturedProjectsSection from '../components/home/FeaturedProjectsSection'
import CallToAction from '../components/home/CallToAction'

function Home() {
  return (
    <div className="bg-porcelain text-graphite">
      <Hero />
      <MaterialHighlights />
      <BrandLegacy />
      <FeaturedProjectsSection />
      <CallToAction />
    </div>
  )
}

export default Home
