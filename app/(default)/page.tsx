export const metadata = {
  title: 'Technotribes',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Projects from '@/components/projects'
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Projects/>
      <Testimonials />
    </>
  )
}
