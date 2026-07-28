import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import SizeBanner from './components/SizeBanner';
import TrustStrip from './components/TrustStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <SizeBanner />
        <TrustStrip />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
