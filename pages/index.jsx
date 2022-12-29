import Head from "next/head";
import OurSpeakers from "../components/OurSpeakers/Index";
import AboutUs from "../components/AboutUs/Index";
import TheyTrustedUs from "../components/TheyTrustedUs/Index";
import OurPartners from "../components/OurPartners/Index";
import Agenda from "../components/Agenda/Index";
import AboutEvent from "../components/AboutEvent/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
import Committee from "../components/Committee/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>IAIS 2022</title>
        <link rel="shortcut icon" href="/ico.png" />
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <AboutUs />
        <OurPartners />
        <OurSpeakers/>
        <TheyTrustedUs />
        <Agenda />
        <Committee/>
        
    
      </main>
      <Footer />
    </>
  );
}
