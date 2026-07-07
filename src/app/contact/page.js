import InnerPageHero from "../../components/InnerPageHero";
import CleanContact from "../../components/CleanContact";

export const metadata = {
  title: "تواصل معنا | مؤسسة سابق للمحاماة",
  description: "تواصل مع مؤسسة سابق للمحاماة لحجز استشارة قانونية أو الاستفسار عن خدماتنا.",
};

export default function ContactPage() {
  return (
    <>
      <InnerPageHero 
        title="تواصل معنا" 
        subtitle="نحن هنا للإجابة على استفساراتك وتقديم المساعدة القانونية التي تحتاجها"
        breadcrumbs={[{ label: "تواصل معنا", link: null }]} 
      />
      <CleanContact />
    </>
  );
}
