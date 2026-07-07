"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TeamGrid({ limit = 100 }) {
  const team = [
    { id: "1", name: "أ. محمود سابق", role: "المؤسس والشريك الإداري", exp: "+25 سنة", spec: "القضايا الجنائية والمالية", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop" },
    { id: "2", name: "أ. سارة أمين", role: "شريك - قسم الشركات", exp: "+15 سنة", spec: "تأسيس الشركات والضرائب", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
    { id: "3", name: "أ. كريم عبد الله", role: "محامي بالنقض", exp: "+18 سنة", spec: "منازعات مجلس الدولة والتحكيم", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
    { id: "4", name: "أ. نور حسين", role: "مستشار قانوني", exp: "+10 سنوات", spec: "الملكية الفكرية والعقود", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" }
  ].slice(0, limit);

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
          <h2 className="section-title">فريق <span>العمل</span></h2>
          <p className="section-sub">نخبة من أمهر المحامين والمستشارين القانونيين</p>
        </motion.div>
        
        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member) => (
            <motion.div key={member.id} className="team-card" variants={itemVariants}>
              <div className="team-img" style={{ backgroundImage: `url(${member.img})` }}></div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-meta">
                  <span><i className="fa-solid fa-briefcase"></i> {member.exp}</span>
                  <span><i className="fa-solid fa-gavel"></i> {member.spec}</span>
                </div>
                <Link href={`/team/${member.id}`} className="team-link">
                  عرض السيرة الذاتية <i className="fa-solid fa-arrow-left"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
