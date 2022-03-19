/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Header />

        <div className="row py-2">
          <div className="col-md-4">
            <div className="card bg-light">
              <div className="card-body">
                <h2 id="skills">Skills</h2>

                <Skills />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card bg-light">
              <div className="card-body">
                <h2 id="projects">Projects</h2>

                <Projects />
              </div>
            </div>
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
