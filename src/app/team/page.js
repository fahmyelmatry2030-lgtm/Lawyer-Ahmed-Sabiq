import InnerPageHero from "../../components/InnerPageHero";
import TeamGrid from "../../components/TeamGrid";
import HomeCTA from "../../components/HomeCTA";

export const metadata = {
  title: "فريق العمل | مؤسسة سابق للمحاماة",
  description: "تعرف على نخبة المحامين والمستشارين القانونيين في مؤسسة سابق.",
};

export default function TeamPage() {
  return (
    <>
      <InnerPageHero 
        title="فريق العمل" 
        subtitle="نخبة من أمهر المحامين والمستشارين القانونيين بخبرات متنوعة"
        breadcrumbs={[{ label: "فريق العمل", link: null }]} 
      />
      <TeamGrid />
      <HomeCTA />
    </>
  );
}
