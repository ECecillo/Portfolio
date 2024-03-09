import AboutMe from '@/ui/layout/about-me';
import Footer from '@/ui/layout/footer';
import Header from '@/ui/layout/header';
import HeroSection from '@/ui/layout/hero-section';
import Projects from '@/ui/layout/projects';

function Layout() {
  return (
    <div className="flex flex-col items-center">
      <main>
        <Header />
        <HeroSection />
        <AboutMe />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
