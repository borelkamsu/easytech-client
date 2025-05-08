import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import BlogPosts from '@/components/BlogPosts';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import Newsletter from '@/components/Newsletter';
import AppPromote from '@/components/AppPromote';
import CallToAction from '@/components/CallToAction';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>EasyTech - Smart solutions for your projects</title>
        <meta name="description" content="Empowering individuals and small businesses with simple, reliable, and affordable tech solutions." />
      </Helmet>
      <Hero />
      <Features />
      <Services />
      <CallToAction />
      <BlogPosts limit={3} />
      <Testimonials />
      <AboutUs />
      <AppPromote />
      <ContactForm />
      <Newsletter />
    </>
  );
};

export default Home;
