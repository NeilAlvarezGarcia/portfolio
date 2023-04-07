import { createRef, useEffect, useState } from "react";

import Head from "next/head";

import { roboto } from "@/utils/fonts";
import { activeTypes } from "@/utils/interfaces/activeSectionTypes";

import { Header } from "@/components/Home/styles";
import Navbar from "@/components/Navbar/";
import Home from "@/components/Home/";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

export default function Portfolio() {
  const homeRef = createRef<HTMLElement>();
  const aboutRef = createRef<HTMLElement>();
  const stackTechRef = createRef<HTMLElement>();
  const contactRef = createRef<HTMLElement>();

  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<activeTypes>(activeTypes.home);

  const scrollInto = (element: HTMLElement) => element.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const ref = {
      home: homeRef,
      about: aboutRef,
      stack: stackTechRef,
      contact: contactRef,
    };

    const element = ref[activeSection]?.current;

    if (!element) return;

    scrollInto(element);
  }, [activeSection]);

  return (
    <>
      <Head>
        <title>Neil Alvarez Garcia</title>
        <meta name='description' content="Neil's portfolio" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main className={roboto.className}>
        <Header ref={homeRef}>
          <Navbar section={activeSection} changeSection={setActiveSection} />

          <Home />
        </Header>

        <About />

        <Stack />

        <Contact />

        <Footer />

        {/* <div
              style={{
                padding: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4rem",
                overflow: "auto",
                justifyContent: "center",
              }}>
              <h2 className={styles["text-with-color"]}>
                Latest <span>Projets</span>
              </h2>

              <div
                style={{
                  width: "80%",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "3rem",
                }}>
                <div style={{ position: "relative", overflow: "hidden", borderRadius: "2rem" }}>
                  <CustomeImage img='https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, #0ef, rgba(0, 0, 0, 0.5))",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "2rem",
                      textAlign: "center",
                      gap: "1rem",
                    }}>
                    <h3 style={{ fontSize: "3rem" }}>Todo App</h3>
                    <p style={{ fontSize: "1.8rem", lineHeight: 1.5 }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
                      dignissimos mollitia exercitationem deserunt minus nihil, enim eligendi a.
                    </p>

                    <a
                      href='https://github.com/NeilAlvarezGarcia/github-searcher'
                      target='_blank'
                      style={{
                        width: "5rem",
                        height: "5rem",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}>
                      <LinkTo />
                    </a>
                  </div>
                </div>

                <div style={{ position: "relative", overflow: "hidden", borderRadius: "2rem" }}>
                  <CustomeImage img='https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, #0ef, rgba(0, 0, 0, 0.5))",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "2rem",
                      textAlign: "center",
                      gap: "1rem",
                    }}>
                    <h3 style={{ fontSize: "3rem" }}>Todo App</h3>
                    <p style={{ fontSize: "1.8rem", lineHeight: 1.5 }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
                      dignissimos mollitia exercitationem deserunt minus nihil, enim eligendi a.
                    </p>

                    <a
                      href='https://github.com/NeilAlvarezGarcia/github-searcher'
                      target='_blank'
                      style={{
                        width: "5rem",
                        height: "5rem",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}>
                      <LinkTo />
                    </a>
                  </div>
                </div>

                <div style={{ position: "relative", overflow: "hidden", borderRadius: "2rem" }}>
                  <CustomeImage img='https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, #0ef, rgba(0, 0, 0, 0.5))",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "2rem",
                      textAlign: "center",
                      gap: "1rem",
                    }}>
                    <h3 style={{ fontSize: "3rem" }}>Todo App</h3>
                    <p style={{ fontSize: "1.8rem", lineHeight: 1.5 }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
                      dignissimos mollitia exercitationem deserunt minus nihil, enim eligendi a.
                    </p>

                    <a
                      href='https://github.com/NeilAlvarezGarcia/github-searcher'
                      target='_blank'
                      style={{
                        width: "5rem",
                        height: "5rem",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}>
                      <LinkTo />
                    </a>
                  </div>
                </div>

                <div style={{ position: "relative", overflow: "hidden", borderRadius: "2rem" }}>
                  <CustomeImage img='https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, #0ef, rgba(0, 0, 0, 0.5))",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "2rem",
                      textAlign: "center",
                      gap: "1rem",
                    }}>
                    <h3 style={{ fontSize: "3rem" }}>Todo App</h3>
                    <p style={{ fontSize: "1.8rem", lineHeight: 1.5 }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
                      dignissimos mollitia exercitationem deserunt minus nihil, enim eligendi a.
                    </p>

                    <a
                      href='https://github.com/NeilAlvarezGarcia/github-searcher'
                      target='_blank'
                      style={{
                        width: "5rem",
                        height: "5rem",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}>
                      <LinkTo />
                    </a>
                  </div>
                </div>

                <div style={{ position: "relative", overflow: "hidden", borderRadius: "2rem" }}>
                  <CustomeImage img='https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, #0ef, rgba(0, 0, 0, 0.5))",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "2rem",
                      textAlign: "center",
                      gap: "1rem",
                    }}>
                    <h3 style={{ fontSize: "3rem" }}>Todo App</h3>
                    <p style={{ fontSize: "1.8rem", lineHeight: 1.5 }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
                      dignissimos mollitia exercitationem deserunt minus nihil, enim eligendi a.
                    </p>

                    <a
                      href='https://github.com/NeilAlvarezGarcia/github-searcher'
                      target='_blank'
                      style={{
                        width: "5rem",
                        height: "5rem",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}>
                      <LinkTo />
                    </a>
                  </div>
                </div>

                <div style={{ position: "relative", overflow: "hidden", borderRadius: "2rem" }}>
                  <CustomeImage img='https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, #0ef, rgba(0, 0, 0, 0.5))",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "2rem",
                      textAlign: "center",
                      gap: "1rem",
                    }}>
                    <h3 style={{ fontSize: "3rem" }}>Todo App</h3>
                    <p style={{ fontSize: "1.8rem", lineHeight: 1.5 }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
                      dignissimos mollitia exercitationem deserunt minus nihil, enim eligendi a.
                    </p>

                    <a
                      href='https://github.com/NeilAlvarezGarcia/github-searcher'
                      target='_blank'
                      style={{
                        width: "5rem",
                        height: "5rem",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}>
                      <LinkTo />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

        {/* <div style={{ padding: "2rem", overflow: "auto" }}>
              <h2 className={styles["text-with-color"]}>
                Let's write <span>the letter</span>
              </h2>

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                  marginTop: "2rem",
                }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <label htmlFor='' style={{ color: "#0ef", fontSize: "1.8rem", fontWeight: 600 }}>
                    Name
                  </label>
                  <input
                    type='text'
                    style={{
                      borderRadius: "1rem",
                      padding: "1rem",
                      background: "transparent",
                      border: "white solid thin",
                      color: "white",
                      fontSize: "1.6rem",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <label htmlFor='' style={{ color: "#0ef", fontSize: "1.8rem", fontWeight: 600 }}>
                    Email
                  </label>
                  <input
                    type='email'
                    style={{
                      borderRadius: "1rem",
                      padding: "1rem",
                      background: "transparent",
                      border: "white solid thin",
                      color: "white",
                      fontSize: "1.6rem",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <label htmlFor='' style={{ color: "#0ef", fontSize: "1.8rem", fontWeight: 600 }}>
                    Description
                  </label>
                  <textarea
                    style={{
                      borderRadius: "1rem",
                      padding: "1rem",
                      background: "transparent",
                      border: "white solid thin",
                      color: "white",
                      height: "20rem",
                      fontSize: "1.6rem",
                    }}></textarea>
                </div>
                <input
                  type='submit'
                  value='Send'
                  style={{
                    background: "white",
                    borderRadius: "1rem",
                    padding: "1rem",
                    color: "#1f242d",
                    fontWeight: 600,
                    fontSize: "1.6rem",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                />
              </form>
            </div> */}

        <Modal>
          <p>çhola mundos</p>
        </Modal>
      </main>
    </>
  );
}
