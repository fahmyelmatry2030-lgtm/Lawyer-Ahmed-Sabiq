"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function InnerPageHero({ title, subtitle, breadcrumbs }) {
  // Map page title to icon
  const getPageLabel = () => {
    return title || "من نحن";
  };

  return (
    <section className="royal-inner-hero">
      <div className="royal-inner-bg"></div>
      <div className="royal-inner-overlay"></div>
      
      {/* Structural columns on left and right for classic look */}
      <div className="royal-column-left"></div>
      <div className="royal-column-right"></div>

      <div className="container royal-inner-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: "center", position: "relative", zIndex: 10 }}
        >
          {/* Centered Badge with gold outline and scale icon */}
          <div className="royal-badge-center">
            <i className="fa-solid fa-scale-balanced"></i>
            <span>{getPageLabel()}</span>
          </div>

          {/* Royal Centered Title */}
          <h1 className="royal-inner-title">
            {title === "من نحن" ? "مؤسسة سابق للمحاماة" : title}
          </h1>

          {/* Subtitle */}
          <p className="royal-inner-sub">
            {subtitle || "مكتب محاماة متخصص يقدم خدمات قانونية شاملة بأعلى معايير الجودة والاحترافية، نلتزم بتحقيق العدالة."}
          </p>

        </motion.div>
      </div>
    </section>
  );
}
