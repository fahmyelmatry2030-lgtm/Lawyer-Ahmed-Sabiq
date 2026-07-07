import CleanHero from "../components/CleanHero";
import CleanFeatures from "../components/CleanFeatures";
import CleanAbout from "../components/CleanAbout";
import CleanServices from "../components/CleanServices";
import HomeStats from "../components/HomeStats";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeCTA from "../components/HomeCTA";

export default function Home() {
  return (
    <>
      <CleanHero />
      <CleanAbout />
      <CleanServices />
      <CleanFeatures />
      <HomeStats />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}
