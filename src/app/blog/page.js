import InnerPageHero from "../../components/InnerPageHero";
import HomeCTA from "../../components/HomeCTA";
import Link from 'next/link';

export const metadata = {
  title: "المدونة القانونية | مؤسسة سابق للمحاماة",
  description: "مقالات قانونية ونصائح حول إجراءات الطلاق، تأسيس الشركات، حقوق العمال وغيرها.",
};

export default function BlogPage() {
  const articles = [
    { title: "إجراءات الطلاق ومحاكم الأسرة في القانون المصري", date: "١٥ أكتوبر ٢٠٢٦", author: "أ. سارة أمين", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop" },
    { title: "دليلك الشامل لتأسيس الشركات ذات المسئولية المحدودة", date: "١٠ أكتوبر ٢٠٢٦", author: "أ. محمود سابق", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop" },
    { title: "كيف ترفع دعوى تعويض عمالية وتضمن حقوقك؟", date: "٥ أكتوبر ٢٠٢٦", author: "أ. كريم عبد الله", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop" },
    { title: "قوانين الإيجار الجديد وتأثيرها على الملاك والمستأجرين", date: "١ أكتوبر ٢٠٢٦", author: "أ. نور حسين", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <>
      <InnerPageHero 
        title="المدونة القانونية" 
        subtitle="مقالات دورية ونقاشات قانونية مبسطة تهم المواطنين ورواد الأعمال"
        breadcrumbs={[{ label: "المدونة", link: null }]} 
      />
      
      <section className="section">
        <div className="container">
          <div className="team-grid">
            {articles.map((article, index) => (
              <div key={index} className="team-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="team-img" style={{ backgroundImage: `url(${article.img})`, height: '220px' }}></div>
                <div className="team-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--gold-royal)', fontSize: '0.85rem', marginBottom: '15px' }}>
                    <span><i className="fa-regular fa-calendar" style={{ marginLeft: '5px' }}></i> {article.date}</span>
                    <span><i className="fa-regular fa-user" style={{ marginLeft: '5px' }}></i> {article.author}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', lineHeight: '1.6', fontWeight: '700' }}>{article.title}</h3>
                  <div style={{ marginTop: 'auto' }}>
                    <Link href="#" className="team-link" style={{ fontSize: '0.95rem' }}>
                      اقرأ المقال <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
