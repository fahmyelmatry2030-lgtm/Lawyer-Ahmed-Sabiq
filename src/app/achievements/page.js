"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import InnerPageHero from "../../components/InnerPageHero";
import HomeStats from "../../components/HomeStats";
import HomeCTA from "../../components/HomeCTA";

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "كافة الإنجازات" },
    { id: "criminal", label: "جنائي وأموال عامة" },
    { id: "commercial", label: "تجاري واستثمار" },
    { id: "administrative", label: "قضاء إداري ودستوري" }
  ];

  const caseStories = [
    {
      id: 1,
      category: "criminal",
      year: "2025",
      title: "حكم تاريخي بالبراءة في قضية استيلاء على أموال عامة",
      court: "محكمة جنايات القاهرة (أموال عامة)",
      clientType: "رئيس مجلس إدارة شركة مساهمة",
      challenge: "اتهام بالاستيلاء وتسهيل الاستيلاء على مبالغ تتجاوز 120 مليون جنيه بناءً على تقرير لجان فنية.",
      strategy: "إثبات بطلان تقرير اللجنة الفنية لعدم الاختصاص، وتقديم مستندات قاطعة تنفي القصد الجنائي وتثبت قانونية كافة التصرفات المالية.",
      result: "حكم نهائي بالبراءة ورفض الدعوى المدنية المقامة من النيابة العامة."
    },
    {
      id: 2,
      category: "commercial",
      year: "2024",
      title: "تسوية نزاع تجاري دولي عبر التحكيم بقيمة 50 مليون دولار",
      court: "مركز القاهرة الإقليمي للتحكيم التجاري الدولي (CRCICA)",
      clientType: "مجموعة استثمارية متعددة الجنسيات",
      challenge: "نزاع معقد حول بنود فسخ عقد شراكة وإنشاء مصنع إلكترونيات ومطالبات بتعويضات ضخمة.",
      strategy: "تفعيل شرط التحكيم، تقديم مذكرات متخصصة في القانون التجاري الدولي، ودحض ادعاءات الطرف الآخر بشأن الأضرار التبعية.",
      result: "صدور حكم تحكيم لصالح موكلنا برفض التعويضات المبالغ فيها وإنهاء الشراكة بالتراضي وفق شروط موكلنا."
    },
    {
      id: 3,
      category: "administrative",
      year: "2024",
      title: "إلغاء قرار سحب تراخيص مجمع صناعي واسترداده بالكامل",
      court: "محكمة القضاء الإداري (مجلس الدولة)",
      clientType: "شركة صناعية كبرى",
      challenge: "قرار إداري مفاجئ بسحب تخصيص الأرض وإلغاء رخصة تشغيل المصنع بدعوى عدم الجدية.",
      strategy: "تقديم إثباتات ملموسة لمعدلات التنفيذ ونسب التشغيل الفعلي وإثبات تعسف الجهة الإدارية ومخالفتها لروح قانون الاستثمار.",
      result: "الحكم بإلغاء القرار الإداري بصفة مستعجلة، واسترداد الأرض والتراخيص مع التعويض المالي عن فترة التوقف."
    },
    {
      id: 4,
      category: "criminal",
      year: "2023",
      title: "براءة في قضية تهريب جمركي كبرى وإلغاء الغرامات",
      court: "محكمة الجنايات الاستئنافية",
      clientType: "شركة استيراد وتصدير",
      challenge: "اتهام بتهريب بضائع محظورة عبر الميناء وغرامات جمركية تقديرية بلغت 45 مليون جنيه.",
      strategy: "إثبات عدم صلة الموكل بالبضائع المضبوطة وبطلان إجراءات التفتيش والضبط لانتفاء التلبس وعدم الحصول على إذن نيابة.",
      result: "براءة الموكل وإلغاء كافة القرارات التحفظية على الحسابات البنكية للشركة."
    },
    {
      id: 5,
      category: "commercial",
      year: "2023",
      title: "حسم نزاع ملكية فكرية وعلامات تجارية لصالح توكيل عالمي",
      court: "المحكمة الاقتصادية بالقاهرة",
      clientType: "العلامة التجارية العالمية للأجهزة الكهربائية",
      challenge: "تعدي شركة محلية على الاسم التجاري وتصميمات المنتجات وطرح بضائع مقلدة بالأسواق.",
      strategy: "إجراء تفتيش قضائي وضبط البضائع المقلدة وإثبات أسبقية التسجيل الدولي والمحلي وحجم الضرر التجاري.",
      result: "الحكم بإلزام الشركة المعتدية بالتعويض المالي الضخم ومصادرة وإعدام كافة المنتجات المقلدة وإغلاق منافذ التوزيع."
    },
    {
      id: 6,
      category: "administrative",
      year: "2022",
      title: "حكم دستوري بإلغاء فرض رسوم غير قانونية على مصانع قطاع خاص",
      court: "المحكمة الدستورية العليا / مجلس الدولة",
      clientType: "غرفة الصناعات المعدنية",
      challenge: "فرض رسم صادر إضافي بقرار وزاري مما أضر بالقدرة التنافسية للتصدير الخارجي.",
      strategy: "الدفع بعدم دستورية القرار لمخالفته لمبدأ فرض الضرائب والرسوم بغير قانون وبطلان الإجراءات الإدارية المتبعة.",
      result: "الحكم التاريخي بعدم دستورية القرار التنظيمي، وإلغاء الرسوم وإعادتها بأثر رجعي للمصانع المتضررة."
    }
  ];

  const filteredCases = activeCategory === "all" 
    ? caseStories 
    : caseStories.filter(c => c.category === activeCategory);

  return (
    <>
      <InnerPageHero 
        title="القضايا والإنجازات" 
        subtitle="سجل موثق بالانتصارات والأحكام التاريخية التي حسمناها لصالح موكلينا"
        breadcrumbs={[{ label: "الإنجازات", link: null }]} 
      />

      <HomeStats />

      {/* Categories Filter Selector */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginBottom: "50px" }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? "btn-gold" : "btn-outline"}
                style={{ padding: "12px 25px", fontSize: "0.95rem" }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Timeline Grid */}
      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "50px", position: "relative" }}>
            {/* Elegant vertical timeline bar */}
            <div style={{ position: "absolute", top: 0, bottom: 0, right: "40px", width: "1px", background: "linear-gradient(180deg, var(--gold-royal) 0%, transparent 100%)", zIndex: 1 }} className="timeline-line-desktop"></div>

            {filteredCases.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ display: "flex", gap: "40px", position: "relative", zIndex: 2 }}
                className="timeline-item-wrapper"
              >
                {/* Timeline Node Icon */}
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--bg-card)", border: "2px solid var(--gold-royal)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-royal)", fontSize: "1.4rem", fontWeight: "800", flexShrink: 0 }} className="timeline-node">
                  {story.year}
                </div>

                {/* Case Story Card Content */}
                <div style={{ flexGrow: 1, backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "40px", position: "relative" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap", gap: "15px" }}>
                    <div>
                      <h3 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "800", marginBottom: "5px" }}>{story.title}</h3>
                      <span style={{ color: "var(--gold-royal)", fontSize: "0.95rem", fontWeight: "700" }}>{story.court}</span>
                    </div>
                    <span style={{ color: "var(--muted)", fontSize: "0.9rem", border: "1px solid var(--border-royal)", padding: "4px 12px", borderRadius: "4px", background: "rgba(255,255,255,0.01)" }}>
                      صفة الموكل: {story.clientType}
                    </span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginTop: "25px" }} className="case-details-grid">
                    <div>
                      <h4 style={{ color: "var(--gold-royal)", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>المعضلة القانونية</h4>
                      <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.8", margin: 0 }}>{story.challenge}</p>
                    </div>
                    <div>
                      <h4 style={{ color: "var(--gold-royal)", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>استراتيجية الدفاع</h4>
                      <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.8", margin: 0 }}>{story.strategy}</p>
                    </div>
                  </div>

                  <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid var(--border-royal)", display: "flex", alignItems: "center", gap: "15px" }}>
                    <i className="fa-solid fa-square-poll-horizontal" style={{ color: "#10b981", fontSize: "1.3rem" }}></i>
                    <span style={{ color: "#10b981", fontWeight: "700", fontSize: "1.05rem" }}>
                      الحكم النهائي: {story.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />

      <style jsx global>{`
        @media (max-width: 768px) {
          .timeline-line-desktop {
            display: none !important;
          }
          .timeline-item-wrapper {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .timeline-node {
            width: 60px !important;
            height: 60px !important;
            font-size: 1.1rem !important;
            margin: 0 auto;
          }
          .case-details-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
}
