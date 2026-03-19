
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SoundOfTrees from './components/SoundOfTrees';
import Services from './components/Services';
import Performances from './components/Performances';
import Events from './components/Events';
import FeaturedVideo from './components/FeaturedVideo';
import InstagramMedia from './components/InstagramMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <Hero />
      <About />
      <SoundOfTrees />
      <Services />
      <Performances />
      <Events />
      <FeaturedVideo />
      <InstagramMedia />
      <Contact />
      <Footer />
    </main>
  );
}
