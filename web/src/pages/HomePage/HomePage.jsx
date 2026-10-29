import { Metadata } from '@redwoodjs/web'

import AboutIntro from 'src/components/AboutIntro/AboutIntro'
import ContactCTA from 'src/components/ContactCTA/ContactCTA'
import Hero from 'src/components/Hero/Hero'

const HomePage = () => {
  return (
    <>
      <Metadata
        title="Home"
        description="QSolve — clear answers and practical solutions for organisations."
      />
      <Hero />
      <AboutIntro />
      <ContactCTA />
    </>
  )
}

export default HomePage
