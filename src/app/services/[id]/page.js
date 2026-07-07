import InnerPageHero from "../../../components/InnerPageHero";
import HomeCTA from "../../../components/HomeCTA";
import Link from 'next/link';
import { notFound } from 'next/navigation';

const servicesData = {
  "civil": { title: "القضايا المدنية", icon: "fa-solid fa-scale-unbalanced", desc: "نقدم تمثيلاً شاملاً في كافة النزاعات المدنية والتجارية، بما في ذلك تحصيل الديون، التعويضات، ومنازعات العقود." },
  "criminal": { title: "القضايا الجنائية", icon: "fa-solid fa-gavel", desc: "نمتاز بخبرة واسعة في قضايا الجنايات، الأموال العامة، والجنح، مع بناء استراتيجيات دفاع صلبة أمام كافة درجات التقاضي." },
  "family": { title: "قضايا الأسرة", icon: "fa-solid fa-users", desc: "نتعامل مع قضايا الأحوال الشخصية بمهنية وسرية، بما يشمل الطلاق، النفقات، الحضانة، والمواريث." },
  "corporate": { title: "الشركات والاستثمار", icon: "fa-solid fa-building", desc: "ندعم المستثمرين عبر تأسيس الشركات، إعداد لوائح العمل، وعمليات الدمج والاستحواذ." },
  "real-estate": { title: "العقارات", icon: "fa-solid fa-city", desc: "تغطي خدماتنا تسجيل العقارات، نزاعات الملكية، دعاوى الفرز والتجنيب، وصياغة عقود المقاولات." },
  "tax": { title: "الضرائب", icon: "fa-solid fa-file-invoice-dollar", desc: "نمثل الشركات أمام لجان الطعن الضريبي ونقدم استشارات لتجنب التهرب الضريبي وتحقيق الامتثال." },
  "ip": { title: "الملكية الفكرية", icon: "fa-solid fa-lightbulb", desc: "تسجيل العلامات التجارية، براءات الاختراع، وحمايتها من التعدي بالتقاضي محلياً ودولياً." },
  "arbitration": { title: "التحكيم", icon: "fa-solid fa-handshake", desc: "تسوية المنازعات عبر التحكيم التجاري، سواء المؤسسي أو الحر، لتوفير الوقت والجهد على عملائنا." },
  "contracts": { title: "صياغة العقود", icon: "fa-solid fa-file-contract", desc: "نقوم بصياغة ومراجعة كافة أنواع العقود التجارية والمدنية لضمان حقوق العميل وتجنب الثغرات." }
};

export function generateMetadata({ params }) {
  const service = servicesData[params.id];
  if (!service) return { title: 'الخدمة غير موجودة' };
  return { title: `${service.title} | مؤسسة سابق للمحاماة` };
}

export default function ServiceDetails({ params }) {
  const service = servicesData[params.id];
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <InnerPageHero 
        title={service.title} 
        subtitle="تفاصيل الخدمة القانونية والنطاق المهني الذي نقدمه لموكلينا"
        breadcrumbs={[
          { label: "الخدمات", link: "/services" },
          { label: service.title, link: null }
        ]} 
      />
      
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
            <div style={{ fontSize: '3rem', color: 'var(--gold-royal)' }}>
              <i className={service.icon}></i>
            </div>
            <h2 style={{ fontSize: '2.2rem', color: '#fff', fontWeight: '800' }}>{service.title}</h2>
          </div>
          
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '40px', borderRadius: '4px', border: '1px solid var(--border-royal)' }}>
            <p style={{ color: 'var(--white)', fontSize: '1.15rem', lineHeight: '2', marginBottom: '30px' }}>
              {service.desc}
            </p>
            
            <h3 style={{ color: 'var(--gold-royal)', fontSize: '1.4rem', fontWeight: '700', marginBottom: '20px' }}>ماذا نقدم في هذا التخصص؟</h3>
            <ul style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '2', paddingRight: '20px', listStyleType: 'disc' }}>
              <li>دراسة وافية لأوراق القضية وتحديد الثغرات بدقة متناهية.</li>
              <li>التمثيل القانوني والترافع أمام كافة درجات المحاكم والهيئات القضائية.</li>
              <li>تقديم استشارات وقائية استباقية لتفادي النزاع وحماية مصالحك.</li>
              <li>صياغة المذكرات والدفوع القانونية بأسلوب رصين واحترافي.</li>
            </ul>
          </div>
          
          <div style={{ marginTop: '30px' }}>
            <Link href="/services" className="btn-outline">
              العودة للخدمات <i className="fa-solid fa-arrow-left" style={{ marginRight: '8px' }}></i>
            </Link>
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
