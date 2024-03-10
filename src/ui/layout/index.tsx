import AboutMe from '@/ui/layout/about-me';
import Footer from '@/ui/layout/footer';
import Header from '@/ui/layout/header';
import HeroSection from '@/ui/layout/hero-section';
import Projects from '@/ui/layout/projects';
import Divider from '@/ui/components/divider';

function Layout() {
  return (
    <div className="flex flex-col">
      <header>
        <Header />
      </header>
      <main className="flex flex-col items-center">
        <HeroSection />
        <AboutMe />
        <Projects />
      </main>
      <footer className="flex flex-col items-center">
        <Divider />
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;