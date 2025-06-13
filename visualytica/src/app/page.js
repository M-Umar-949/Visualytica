// src/app/page.js
"use client"
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import InfoCard from '@/components/Title';
import Features from '@/components/Features';
import Tech from '@/components/Tech';
import Team from '@/components/Team';
import Timeline from '@/components/Timeline';
import Demo from '@/components/Demo';
import Footer from '@/components/Footer';


export default function HomePage() {
  return (
    <>
      <Nav />
      <section id="home">
        <Hero />
      </section>

      <div id="about" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <InfoCard 
          title='WHAT IS VISUALYTICA ?'
          description='Visualytica is a WEB-based network data visualization platform that reveals hidden relationships within complex systems. From social networks to biological data, it transforms raw connections into clear, interactive graphs — helping users explore and act on insights in real time.'
        />
      </div>

      <section id="features">
        <Features />
      </section>

      <section id="tech">
        <Tech />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="demo">
        <Demo />
      </section>

      <section id="newsletter">
        <Footer />
      </section>
    </>
  );
}

