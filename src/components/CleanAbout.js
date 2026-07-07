"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CleanAbout() {
  return (
    <section className="about-section">
      <div className="about-grid">
        <motion.div 
          className="about-image-side"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800&auto=format&fit=crop" 
            alt="مكتب محاماة" 
          />
          <div className="about-exp-badge">
            <strong>+25</strong>
            <span>سنة خبرة</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-text-side"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-label">
            <span className="about-label-line"></span>
            من نحن
          </div>
          
          <h2 className="about-title">
            مؤسسة سابق للمحاماة <span>والاستشارات القانونية</span>
          </h2>
          
          <p className="about-desc">
            تأسست المؤسسة على يد نخبة من كبار المحامين والمستشارين القانونيين، 
            بهدف تقديم خدمات قانونية احترافية تليق بتطلعات عملائنا. 
            نفخر بتاريخنا الطويل في تحقيق نجاحات متتالية في أصعب القضايا وأعقد النزاعات.
          </p>
          
          <div className="about-checks">
            <div className="about-check">
              <i className="fa-solid fa-circle-check"></i>
              <span>خبرة تمتد لأكثر من 25 عاماً في المحاكم العليا</span>
            </div>
            <div className="about-check">
              <i className="fa-solid fa-circle-check"></i>
              <span>تغطية قانونية شاملة للشركات والأفراد</span>
            </div>
            <div className="about-check">
              <i className="fa-solid fa-circle-check"></i>
              <span>التزام مطلق بالسرية والشفافية والنزاهة</span>
            </div>
          </div>

          <Link href="/about" className="btn-gold" style={{ display: 'inline-flex' }}>
            تعرف علينا أكثر <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
