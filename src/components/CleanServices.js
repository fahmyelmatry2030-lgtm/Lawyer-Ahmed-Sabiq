"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CleanServices() {
  const services = [
    { id: "civil", icon: "fa-solid fa-scale-unbalanced", title: "القضايا المدنية", desc: "تمثيل قانوني شامل في النزاعات المدنية والتجارية لتحصيل الديون والتعويضات." },
    { id: "criminal", icon: "fa-solid fa-gavel", title: "القضايا الجنائية", desc: "دفاع صلب في الجنايات وقضايا الأموال العامة والجنح بجميع درجات التقاضي." },
    { id: "family", icon: "fa-solid fa-users", title: "قضايا الأسرة", desc: "معالجة قضايا الأحوال الشخصية، الطلاق، النفقة، والمواريث بسرية تامة." },
    { id: "corporate", icon: "fa-solid fa-building", title: "الشركات والاستثمار", desc: "تأسيس الشركات، إعادة الهيكلة، وعمليات الدمج والاستحواذ." },
    { id: "real-estate", icon: "fa-solid fa-city", title: "العقارات", desc: "تسجيل العقارات، منازعات الملكية، وصياغة عقود المقاولات والبيع." },
    { id: "tax", icon: "fa-solid fa-file-invoice-dollar", title: "الضرائب", desc: "حل منازعات التهرب الضريبي وتمثيل الشركات أمام لجان الطعن الضريبي." },
    { id: "ip", icon: "fa-solid fa-lightbulb", title: "الملكية الفكرية", desc: "تسجيل العلامات التجارية وبراءات الاختراع وحمايتها من التعدي." },
    { id: "arbitration", icon: "fa-solid fa-handshake", title: "التحكيم", desc: "تسوية المنازعات التجارية محلياً ودولياً عبر التحكيم المؤسسي والحر." },
    { id: "contracts", icon: "fa-solid fa-file-contract", title: "صياغة العقود", desc: "صياغة ومراجعة العقود المحلية والدولية لضمان الحماية القانونية." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
          <h2 className="section-title">الخدمات <span>القانونية</span></h2>
          <p className="section-sub">
            نقدم تغطية قانونية شاملة عبر خبرات متخصصة في كافة فروع القانون لدعم الأفراد والشركات.
          </p>
        </motion.div>

        <motion.div 
          className="zeiny-services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((srv, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={`/services/${srv.id}`} style={{ textDecoration: 'none' }}>
                <div className="zeiny-service-card">
                  <div className="zeiny-service-icon">
                    <i className={srv.icon}></i>
                  </div>
                  <h3 className="zeiny-service-title">{srv.title}</h3>
                  <p className="zeiny-service-desc">{srv.desc}</p>
                  <div style={{ marginTop: '20px', color: 'var(--gold-royal)', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    اقرأ المزيد <i className="fa-solid fa-arrow-left" style={{ marginLeft: '5px' }}></i>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
