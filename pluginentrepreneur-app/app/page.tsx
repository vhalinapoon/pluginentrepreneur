import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TrackRecord from "./components/TrackRecord";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative isolate flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <TrackRecord />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
