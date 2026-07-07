"use client";
import { motion } from 'framer-motion';

export default function HomeTestimonials() {
  const testimonials = [
    { name: "أحمد منصور", company: "شركة المقاولات الحديثة", text: "تعاملنا مع مؤسسة سابق في عدة منازعات تجارية، وكانوا دائماً على قدر المسؤولية، دقة في المواعيد واحترافية في الترافع." },
    { name: "مريم فوزي", company: "عميل شخصي", text: "لجأت إليهم في قضية أحوال شخصية معقدة، ووجدت منهم كل الدعم القانوني والنفسي، حتى حصلت على حقوقي كاملة في وقت قياسي." },
    { name: "د. طارق زيدان", company: "مجموعة زيدان الطبية", text: "تأسيس شركتنا وصياغة عقودنا الطبية تمت بسلاسة تامة بفضل فريق الاستشارات المتمرس. نعتمد عليهم في كافة شؤوننا القانونية." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">آراء <span>عملائنا</span></h2>
          <p className="section-sub">ثقة عملائنا هي رصيدنا الأكبر ومحركنا نحو المزيد من النجاح</p>
        </motion.div>
        
        <motion.div 
          className="zeiny-features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {testimonials.map((t, index) => (
            <motion.div key={index} className="zeiny-feature-card" variants={itemVariants} style={{ position: 'relative', textAlign: 'right' }}>
              <i className="fa-solid fa-quote-right" style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '2.5rem', color: 'rgba(205, 162, 80, 0.15)' }}></i>
              <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: '25px', position: 'relative', zIndex: 2, fontSize: '1.05rem', lineHeight: '1.8' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-royal) 0%, #b88e3c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0b0f19', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 5px 0', fontWeight: '700' }}>{t.name}</h4>
                  <span style={{ color: 'var(--gold-royal)', fontSize: '0.9rem', fontWeight: '600' }}>{t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
