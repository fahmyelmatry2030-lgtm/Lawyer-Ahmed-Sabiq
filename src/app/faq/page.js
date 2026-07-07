import InnerPageHero from "../../components/InnerPageHero";
import HomeCTA from "../../components/HomeCTA";

export const metadata = {
  title: "الأسئلة الشائعة | مؤسسة سابق للمحاماة",
  description: "إجابات على الأسئلة الشائعة حول الاستشارات القانونية وإجراءات المحاكم.",
};

export default function FAQPage() {
  const faqs = [
    { q: "كم تستغرق القضية في المحاكم عادة؟", a: "تختلف المدة حسب نوع القضية (مدنية، جنائية، أسرة) ودرجة التعقيد. بعض القضايا تحل ودياً في أسابيع، وأخرى قد تستغرق أشهراً أو سنوات. نلتزم دائماً بالعمل على تسريع الإجراءات قدر الإمكان." },
    { q: "كيف أحجز استشارة مع أحد المحامين؟", a: "يمكنك حجز استشارة بسهولة عبر صفحة 'حجز موعد' في موقعنا واختيار التاريخ والوقت المناسبين، أو من خلال الاتصال بأرقامنا الموضحة في صفحة التواصل." },
    { q: "هل يمكن الاستشارة أونلاين دون الحضور للمكتب؟", a: "نعم، نوفر استشارات قانونية عن بُعد (أونلاين) عبر زووم أو الهاتف لتسهيل التواصل مع عملائنا داخل وخارج البلاد." },
    { q: "كيف يتم تحديد أتعاب المحاماة؟", a: "يتم تحديد الأتعاب بشفافية بعد الجلسة الاستشارية الأولى ودراسة أوراق القضية وتحديد الجهد القانوني المطلوب، ويتم توقيع عقد اتفاق يضمن حقوق الطرفين." },
    { q: "هل بياناتي ومستنداتي آمنة لديكم؟", a: "السرية هي الركن الأساسي في مهنتنا. نلتزم التزاماً كاملاً بالحفاظ على سرية كافة البيانات والمستندات الخاصة بعملائنا تحت طائلة المسؤولية القانونية والأخلاقية." }
  ];

  return (
    <>
      <InnerPageHero 
        title="الأسئلة الشائعة" 
        subtitle="نجيب على الاستفسارات الأكثر تكراراً لتوضيح آليات عملنا القانوني"
        breadcrumbs={[{ label: "الأسئلة الشائعة", link: null }]} 
      />
      
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ backgroundColor: 'var(--bg-light)', border: '1px solid var(--border)', borderRadius: '8px', padding: '35px 30px' }}>
                <h3 style={{ color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '15px', display: 'flex', gap: '15px', alignItems: 'flex-start', fontWeight: '700' }}>
                  <i className="fa-solid fa-circle-question" style={{ marginTop: '5px', fontSize: '1.2rem' }}></i>
                  {faq.q}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.8', paddingRight: '35px', margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
