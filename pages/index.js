import React from 'react';
import data from '../data/data.json';

import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Services from '@/components/Services';
import Works from '@/components/Works';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partner';
import Faq from '@/components/Faq';
import Stats from '@/components/Stats';

export default function Home({ nav, about, services, works, contact, footer,hero }) {
  return (
    <>
      <Navbar nav={nav} />
      <Hero data={hero}  />
      <About about={about} />
      <Services services={services} />
      <Testimonials testimonials={data.testimonials} />
      <Partners partners={data.partners} />
      <Faq faq={data.faq} />
   <Stats stats={data.stats} />
      <Works data={works} />
      <ContactUs data={contact} />
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      nav: data.nav,
      about: data.about,
      services: data.services,
      works: data.works,
      contact: data.contact,
      footer: data.footer,
      hero: data.hero,
    },
  };
}
