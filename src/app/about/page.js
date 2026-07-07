import InnerPageHero from "../../components/InnerPageHero";
import CleanAbout from "../../components/CleanAbout";
import VisionMission from "../../components/VisionMission";
import CleanFeatures from "../../components/CleanFeatures";
import TeamGrid from "../../components/TeamGrid";
import HomeCTA from "../../components/HomeCTA";

export const metadata = {
  title: "من نحن | مؤسسة سابق للمحاماة",
  description: "تعرف على مؤسسة سابق للمحاماة، رؤيتنا، رسالتنا، وفريق العمل المتميز لدينا.",
};

export default function AboutPage() {
  return (
    <>
      <InnerPageHero 
        title="من نحن" 
        subtitle="تعرف على قصتنا، رؤيتنا، وفريق العمل الذي يقف خلف نجاحاتنا"
        breadcrumbs={[{ label: "من نحن", link: null }]} 
      />
      <CleanAbout />
      <VisionMission />
      <CleanFeatures />
      <TeamGrid limit={4} />
      <HomeCTA />
    </>
  );
}
