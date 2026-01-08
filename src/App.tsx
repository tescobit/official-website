import ContactSection from './components/contact';
import CoreValues from './components/core-values';
import Footer from './components/footer';
import Hero from './components/hero';
import LeadershipSection from './components/leadership';
import Navbar from './components/navbar';
import Offerings from './components/offerings';
import Portfolio from './components/portfolio';
import ServicesSection from './components/services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <Offerings />
      <Portfolio />
      <CoreValues />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
