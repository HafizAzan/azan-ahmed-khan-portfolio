'use client';

import { CustomCursor } from '@/components/layout/CustomCursor';
import { Loader } from '@/components/layout/Loader';
import { Navbar } from '@/components/layout/Navbar';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Projects,
  Services,
  TechStack,
  Testimonials,
} from '@/sections';

export function HomePage() {
  return (
    <SmoothScrollProvider>
      <Loader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
