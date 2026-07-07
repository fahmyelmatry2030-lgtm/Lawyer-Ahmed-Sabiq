"use client";
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function HomeStats() {
  const stats = [
    { number: 850, suffix: "+", title: "قضية ناجحة", icon: "fa-solid fa-gavel" },
    { number: 420, suffix: "+", title: "شركة تم تأسيسها", icon: "fa-solid fa-building" },
    { number: 25, suffix: "+", title: "سنة من الخبرة", icon: "fa-solid fa-briefcase" },
    { number: 98, suffix: "%", title: "نسبة كسب القضايا", icon: "fa-solid fa-trophy" }
  ];

  return (
    <section className="stats-final">
      <div className="stats-final-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stats-final-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <i className={stat.icon}></i>
            <h3>
              <CountUp 
                end={stat.number} 
                duration={2.5} 
                enableScrollSpy={true} 
                scrollSpyOnce={true} 
              />
              {stat.suffix}
            </h3>
            <p>{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
