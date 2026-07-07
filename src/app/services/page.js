import InnerPageHero from "../../components/InnerPageHero";
import CleanServices from "../../components/CleanServices";
import HomeCTA from "../../components/HomeCTA";

export const metadata = {
  title: "الخدمات القانونية | مؤسسة سابق للمحاماة",
  description: "خدمات قانونية شاملة تغطي كافة التخصصات: قضايا مدنية، جنائية، شركات، عقارات، ملكية فكرية والمزيد.",
};

export default function ServicesPage() {
  return (
    <>
      <InnerPageHero 
        title="الخدمات القانونية" 
        subtitle="تغطية شاملة لكافة فروع القانون بخبرات متخصصة ومعايير عالمية"
        breadcrumbs={[{ label: "الخدمات", link: null }]} 
      />
      <CleanServices />
      <HomeCTA />
    </>
  );
}
