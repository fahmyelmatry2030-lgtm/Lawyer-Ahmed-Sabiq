"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CleanHero() {
  return (
    <section className="hero-final">
      <div className="hero-final-bg"></div>
      <div className="hero-final-overlay"></div>
      
      {/* Decorative gold line on top */}
      <div className="hero-gold-accent"></div>
      
      <div className="hero-final-wrapper">
        <motion.div
          className="hero-final-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="hero-label">
            <span className="hero-label-line"></span>
            <span>مؤسسة سابق للمحاماة والاستشارات القانونية</span>
            <span className="hero-label-line"></span>
          </div>
          
          <h1 className="hero-final-title">
            النزاهة، الخبرة،<br/>
            <span>والالتزام المطلق</span>
          </h1>
          
          <p className="hero-final-desc">
            حلفاؤك في أعقد القضايا — نقدم حلولاً قانونية متكاملة للشركات 
            والأفراد بمعايير عالمية، مستندين إلى عقود من النجاحات.
          </p>
          
          <div className="hero-final-actions">
            <Link href="/book" className="btn-gold">
              طلب استشارة مبدئية
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <Link href="/services" className="btn-outline">
              خدماتنا القانونية
            </Link>
          </div>
        </motion.div>
        
        {/* Bottom stats bar */}
        <motion.div 
          className="hero-stats-bar"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero-stat">
            <strong>+850</strong>
            <span>قضية ناجحة</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <strong>+25</strong>
            <span>سنة خبرة</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <strong>98%</strong>
            <span>نسبة النجاح</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <strong>+420</strong>
            <span>شركة تم تأسيسها</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
