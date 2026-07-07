import InnerPageHero from "../../../components/InnerPageHero";
import HomeCTA from "../../../components/HomeCTA";
import Link from 'next/link';
import { notFound } from 'next/navigation';

const teamData = {
  "1": { 
    name: "أ. محمود سابق", 
    role: "المؤسس والشريك الإداري", 
    degree: "دكتوراه في القانون الجنائي، جامعة القاهرة",
    exp: "+25 سنة", 
    spec: "القضايا الجنائية والمالية", 
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop", 
    bio: "مؤسس مؤسسة سابق للمحاماة، يتمتع بخبرة واسعة تمتد لأكثر من 25 عاماً في الترافع أمام محكمة النقض والمحاكم العليا. أسهم في إرساء مبادئ قانونية هامة وتولى الدفاع في عدد من أبرز القضايا الجنائية وقضايا الأموال العامة في مصر والوطن العربي.",
    social: { linkedin: "#", twitter: "#", email: "mahmoud@sabeklaw.com" }
  },
  "2": { 
    name: "أ. سارة أمين", 
    role: "شريك - قسم الشركات", 
    degree: "ماجستير في قانون الأعمال الدولي، جامعة السوربون",
    exp: "+15 سنة", 
    spec: "تأسيس الشركات والضرائب", 
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", 
    bio: "ترأس قسم الشركات والاستثمار، متخصصة في صياغة العقود المعقدة وتقديم الاستشارات الضريبية للشركات الكبرى. قادت العديد من عمليات الدمج والاستحواذ لشركات متعددة الجنسيات بمهنية عالية.",
    social: { linkedin: "#", email: "sara@sabeklaw.com" }
  },
  "3": { 
    name: "أ. كريم عبد الله", 
    role: "محامي بالنقض", 
    degree: "ليسانس حقوق، جامعة عين شمس ودبلوم التحكيم الدولي",
    exp: "+18 سنة", 
    spec: "منازعات مجلس الدولة والتحكيم", 
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop", 
    bio: "خبير في المنازعات الإدارية وقضايا مجلس الدولة، وله باع طويل في قضايا التحكيم التجاري المحلي والدولي. يمتلك قدرة فائقة على تحليل العقود واستنباط الثغرات لخدمة مصالح عملائه.",
    social: { linkedin: "#", twitter: "#", email: "karim@sabeklaw.com" }
  },
  "4": { 
    name: "أ. نور حسين", 
    role: "مستشار قانوني", 
    degree: "ليسانس حقوق (إنجليزي)، جامعة القاهرة",
    exp: "+10 سنوات", 
    spec: "الملكية الفكرية والعقود", 
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop", 
    bio: "متخصصة في حماية الملكية الفكرية، تسجيل العلامات التجارية وبراءات الاختراع، ومراجعة عقود الفرنشايز للشركات الناشئة والمؤسسات الكبرى.",
    social: { linkedin: "#", email: "nour@sabeklaw.com" }
  }
};

export function generateMetadata({ params }) {
  const member = teamData[params.id];
  if (!member) return { title: 'محامي غير موجود' };
  return { title: `${member.name} | مؤسسة سابق للمحاماة` };
}

export default function TeamDetails({ params }) {
  const member = teamData[params.id];
  
  if (!member) {
    notFound();
  }

  return (
    <>
      <InnerPageHero 
        title={member.name} 
        subtitle={`${member.role} بمؤسسة سابق للمحاماة`}
        breadcrumbs={[
          { label: "فريق العمل", link: "/team" },
          { label: member.name, link: null }
        ]} 
      />
      
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
            <div style={{ flex: '1 1 300px' }}>
              <img src={member.img} alt={member.name} style={{ width: '100%', borderRadius: '4px', border: '1px solid var(--border-royal)', marginBottom: '20px' }} />
              
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '4px', border: '1px solid var(--border-royal)' }}>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontWeight: '700' }}>تواصل مباشر</h4>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} style={{ color: 'var(--gold-royal)', fontSize: '1.4rem' }}><i className="fa-brands fa-linkedin"></i></a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} style={{ color: 'var(--gold-royal)', fontSize: '1.4rem' }}><i className="fa-brands fa-twitter"></i></a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} style={{ color: 'var(--gold-royal)', fontSize: '1.4rem' }}><i className="fa-solid fa-envelope"></i></a>
                  )}
                </div>
              </div>
            </div>
            
            <div style={{ flex: '2 1 500px' }}>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--gold-royal)', marginBottom: '5px', fontWeight: '800' }}>{member.name}</h2>
              <p style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '25px', opacity: 0.8 }}>{member.role}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--muted)', fontSize: '1rem' }}>
                  <i className="fa-solid fa-graduation-cap" style={{ color: 'var(--gold-royal)', width: '20px' }}></i>
                  {member.degree}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--muted)', fontSize: '1rem' }}>
                  <i className="fa-solid fa-briefcase" style={{ color: 'var(--gold-royal)', width: '20px' }}></i>
                  خبرة {member.exp}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--muted)', fontSize: '1rem' }}>
                  <i className="fa-solid fa-gavel" style={{ color: 'var(--gold-royal)', width: '20px' }}></i>
                  {member.spec}
                </span>
              </div>
              
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '30px', borderRadius: '4px', borderRight: '4px solid var(--gold-royal)', borderLeft: 'none' }}>
                <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.3rem', fontWeight: '700' }}>السيرة الذاتية والنطاق المهني</h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.9', fontSize: '1.05rem', margin: 0 }}>
                  {member.bio}
                </p>
              </div>
              
              <div style={{ marginTop: '40px' }}>
                <Link href="/book" className="btn-gold">
                  طلب استشارة مع {member.name.split(' ')[1]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
