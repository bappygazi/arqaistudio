import Before from "@/components/screens/before";
import Contact from "@/components/screens/contactus";
import HeroSection from "@/components/screens/hero";
import Journey from "@/components/screens/journey";
import Studio from "@/components/screens/studio";
import Work from "@/components/screens/work";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Before />
      <Work />
      <Journey />
      <Studio />
      <Contact />
    </>
  );
};

export default HomePage;
