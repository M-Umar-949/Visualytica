// src/app/page.js
"use client"
import Hero from '@/components/Hero';
import InfoCard from '@/components/Title';
import Features from '@/components/Features';
import Tech from '@/components/Tech';


export default function HomePage() {
  return (
    <>
      <Hero />
      <div style={{ marginTop: '4rem' ,marginBottom: '4rem'}}>
        <InfoCard 
          title='WHAT IS VISUALYTICA ?'
          description='Visualytica is a WEB-based network data visualization platform that reveals hidden relationships within complex systems. From social networks to biological data, it transforms raw connections into clear, interactive graphs — helping users explore and act on insights in real time.'
        />
      </div>
      <Features/>
      <Tech/>
    </>
  );
}
