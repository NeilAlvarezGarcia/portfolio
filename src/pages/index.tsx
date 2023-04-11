import { createRef, useEffect, useState } from "react";

import Head from "next/head";

import { activeTypes } from "@/utils/interfaces/activeSectionTypes";

import { Header } from "@/components/Home/styles";
import Navbar from "@/components/Navbar/";
import Home from "@/components/Home/";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const homeRef = createRef<HTMLElement>();
  const aboutRef = createRef<HTMLElement>();
  const stackTechRef = createRef<HTMLElement>();
  const contactRef = createRef<HTMLElement>();

  const [activeSection, setActiveSection] = useState<activeTypes>(activeTypes.home);

  const scrollInto = (element: HTMLElement) => {
    element.scrollIntoView({
      behavior: "smooth",
      block: document.body.clientWidth >= 768 ? "center" : "start",
    });
  };

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
      <main>
        <Header ref={homeRef}>
          <Navbar section={activeSection} changeSection={setActiveSection} />

          <Home />
        </Header>

        <About ref={aboutRef} changeSection={() => setActiveSection(activeTypes.stack)} />

        <Stack ref={stackTechRef} />

        <Contact ref={contactRef} />

        <Footer changeSection={() => scrollInto(homeRef.current!)} />
      </main>
    </>
  );
}
