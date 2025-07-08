import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200" data-aos="fade-down">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/" className="text-sm uppercase font-semibold tracking-widest">Liyana Maisela</a>
          <div className="space-x-6 hidden md:flex">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#Shop">Shop</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="pt-24"></div>

      <header className="max-w-6xl mx-auto px-6 text-center py-32" data-aos="fade-up">
        <h1 className="text-6xl tracking-wide leading-tight mb-6 uppercase font-semibold font-[\'Alokary\',sans-serif]">Liyana Maisela</h1>
        <p className="text-lg font-light tracking-wider">Frontend Engineer | React Developer | UI/UX Enthusiast</p>
      </header>

      <section id="about" className="max-w-4xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-2xl mb-6 tracking-widest">ABOUT ME</h2>
        <p className="text-base font-light leading-relaxed max-w-xl mx-auto">
          I'm a frontend engineer based in Gauteng, South Africa. Passionate about crafting clean, accessible, and beautiful user interfaces using modern technologies like React, Tailwind CSS, and APIs.
        </p>
      </section>

      <section id="services" className="max-w-4xl mx-auto px-6 mt-20" data-aos="fade-up">
        <h2 className="text-2xl mb-12 tracking-widest text-center">WHAT I OFFER</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div data-aos="zoom-in">
            <h3 className="text-xl mb-2 tracking-wide">RESPONSIVE WEB DESIGN</h3>
            <p className="font-light text-sm">I design interfaces that look great on any screen size using mobile-first principles.</p>
          </div>
          <div data-aos="zoom-in">
            <h3 className="text-xl mb-2 tracking-wide">REACT DEVELOPMENT</h3>
            <p className="font-light text-sm">From components to hooks, I build interactive and efficient user experiences.</p>
          </div>
          <div data-aos="zoom-in">
            <h3 className="text-xl mb-2 tracking-wide">API INTEGRATION</h3>
            <p className="font-light text-sm">Seamless integration with third-party APIs to bring your app to life.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 mt-32" data-aos="fade-up">
        <h2 className="text-2xl mb-12 tracking-widest text-center">FEATURED PROJECTS</h2>
        <div className="relative">
          <div id="carousel" className="flex overflow-x-auto space-x-6 scroll-smooth snap-x snap-mandatory px-2">
            <div className="min-w-[300px] snap-start flex-shrink-0 bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-xl tracking-wide mb-2">Weather App</h3>
              <p className="font-light text-sm mb-4">Built with React and OpenWeatherMap API. Responsive and fast.</p>
              <span className="text-xs font-semibold tracking-widest text-gray-500">VIEW PROJECT →</span>
            </div>
            <div className="min-w-[300px] snap-start flex-shrink-0 bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-xl tracking-wide mb-2">E-commerce UI</h3>
              <p className="font-light text-sm mb-4">Mock online shop built with HTML, CSS, and React components.</p>
              <span className="text-xs font-semibold tracking-widest text-gray-500">VIEW PROJECT →</span>
            </div>
            <div className="min-w-[300px] snap-start flex-shrink-0 bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-xl tracking-wide mb-2">Platepal AI Meal Plan Generator</h3>
              <p className="font-light text-sm mb-4">An AI-powered app that generates personalized meal plans based on your diet preferences.</p>
              <span className="text-xs font-semibold tracking-widest text-gray-500">VIEW PROJECT →</span>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button onClick={() => scrollCarousel(-1)} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">←</button>
            <button onClick={() => scrollCarousel(1)} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">→</button>
          </div>
        </div>
      </section>

      <section id="blog" className="max-w-6xl mx-auto px-6 py-24" data-aos="fade-up">
        <h2 className="text-3xl mb-12 text-center uppercase tracking-widest">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-xl hover:scale-105 transition" data-category="Tech">
            <h3 className="text-xl mb-2 font-semibold uppercase tracking-wider">Why I Love Tailwind CSS</h3>
            <p className="text-sm text-gray-600 mb-4">June 2025</p>
            <p>Tailwind CSS has revolutionized how I approach styling in frontend development. Here’s how...</p>
            <a href="#" className="mt-4 inline-block text-indigo-600">Read More →</a>
          </article>
          <article className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-xl hover:scale-105 transition" data-category="Tech">
            <h3 className="text-xl mb-2 font-semibold uppercase tracking-wider">My Favorite VS Code Extensions</h3>
            <p className="text-sm text-gray-600 mb-4">May 2025</p>
            <p>Boost productivity and streamline your workflow with these essential VS Code extensions...</p>
            <a href="#" className="mt-4 inline-block text-indigo-600">Read More →</a>
          </article>
          <article className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-xl hover:scale-105 transition" data-category="Tech">
            <h3 className="text-xl mb-2 font-semibold uppercase tracking-wider">Getting Started with React</h3>
            <p className="text-sm text-gray-600 mb-4">April 2025</p>
            <p>A beginner-friendly introduction to React and how to start building dynamic user interfaces...</p>
            <a href="#" className="mt-4 inline-block text-indigo-600">Read More →</a>
          </article>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 mt-32 text-center" data-aos="fade-up">
        <h2 className="text-2xl mb-6 tracking-widest">GET IN TOUCH</h2>
        <p className="font-light mb-8 max-w-md mx-auto">Let’s build something together or just say hello!</p>
        <a href="mailto:liyanam@example.com" className="inline-block border border-gray-900 px-8 py-3 rounded-md font-semibold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition">Say Hello</a>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-xs font-light text-gray-500 tracking-widest" data-aos="fade-in">
        © 2025 Liyana Maisela.
      </footer>
    </>
  );
};

function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  if (carousel) {
    const scrollAmount = 320;
    carousel.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
  }
}

export default Home;
