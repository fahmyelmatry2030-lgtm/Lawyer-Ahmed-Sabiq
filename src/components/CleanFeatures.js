"use client";
import { motion } from 'framer-motion';

export default function CleanFeatures() {
  const features = [
    { icon: "fa-solid fa-scale-balanced", title: "خبرة واسعة", desc: "نمتلك تاريخاً طويلاً في قاعات المحاكم وتقديم الاستشارات الدقيقة." },
    { icon: "fa-solid fa-handshake", title: "شفافية ومصداقية", desc: "نبني علاقاتنا على الوضوح التام في تقييم الموقف القانوني." },
    { icon: "fa-solid fa-shield-halved", title: "سرية تامة", desc: "نضمن حماية تامة لمعلومات عملائنا وأسرار قضاياهم." },
    { icon: "fa-solid fa-clock", title: "سرعة الإنجاز", desc: "نحرص على كسب الوقت واستغلال الثغرات بكفاءة عالية." }
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
          <h2 className="section-title">لماذا <span>نحن؟</span></h2>
          <p className="section-sub">
            نجمع بين الخبرة العميقة والفهم الدقيق لاحتياجات عملائنا لتقديم أفضل الحلول القانونية.
          </p>
        </motion.div>

        <motion.div 
          className="zeiny-features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat, index) => (
            <motion.div key={index} className="zeiny-feature-card" variants={itemVariants}>
              <div className="zeiny-feature-icon">
                <i className={feat.icon}></i>
              </div>
              <h3 className="zeiny-feature-title">{feat.title}</h3>
              <p className="zeiny-feature-desc">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
