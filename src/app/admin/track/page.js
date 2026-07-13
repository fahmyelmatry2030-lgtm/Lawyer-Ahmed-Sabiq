"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TrackCasePage() {
  const [nationalId, setNationalId] = useState("");
  const [caseNum, setCaseNum] = useState("");
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");
  const [caseDetails, setCaseDetails] = useState(null);

  // Mock legal database
  const casesDb = {
    "1098/2026": {
      nationalId: "29012030104432",
      client: "شركة منصور للمقاولات",
      title: "نزاع حول بنود عقد المقاولة وتأخر صرف المستخلصات المالية",
      court: "محكمة القضاء الإداري - مجلس الدولة (الدائرة الأولى)",
      lawyer: "أ. محمود سابق",
      status: "جلسة تقديم مستندات",
      lastUpdate: "تم إيداع تقرير الخبراء بملف القضية وفي انتظار جلسة المرافعة.",
      nextSession: "الأربعاء، 8 يوليو 2026 - الساعة 10:00 صباحاً",
      requiredDocs: "أصل العقد المبرم وتوقيعات الاستلام الخاصة بالدفعة الأولى.",
      financials: {
        total: "150,000 ج.م",
        paid: "100,000 ج.م",
        remaining: "50,000 ج.م"
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setError("");
    setSearched(false);

    const match = casesDb[caseNum];
    if (match && match.nationalId === nationalId) {
      setCaseDetails(match);
      setSearched(true);
    } else {
      setError("لم يتم العثور على أي قضية تطابق البيانات المدخلة. يرجى مراجعة رقم القضية أو التواصل مع الدعم الفني للمكتب.");
    }
  };

  return (
    <section className="section" style={{ minHeight: "85vh", paddingTop: "140px" }}>
      <div className="container" style={{ maxWidth: searched ? "900px" : "550px" }}>
        
        {/* Step 1: Input Form */}
        {!searched && (
          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", padding: "50px 40px", borderRadius: "4px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
            <div style={{ textAlign: "center", marginBottom: "35px" }}>
              <i className="fa-solid fa-folder-open" style={{ fontSize: "2.5rem", color: "var(--gold-royal)", marginBottom: "15px" }}></i>
              <h2 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: "800", marginBottom: "5px" }}>بوابة تتبع القضايا الرقمية</h2>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>استعلم عن حالة قضيتك ومواعيد الجلسات القادمة مباشرة</p>
            </div>

            <form onSubmit={handleSearch}>
              {error && (
                <div style={{ backgroundColor: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)", color: "#f87171", padding: "15px", borderRadius: "4px", marginBottom: "25px", fontSize: "0.9rem", lineHeight: "1.7", textAlign: "center" }}>
                  {error}
                </div>
              )}

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>الرقم القومي للموكل / رقم السجل التجاري</label>
                <input 
                  type="text" 
                  className="zeiny-input" 
                  placeholder="أدخل الرقم القومي المكون من 14 رقم"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  required 
                />
              </div>

              <div style={{ marginBottom: "30px" }}>
                <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>رقم القضية بالمكتب</label>
                <input 
                  type="text" 
                  className="zeiny-input" 
                  placeholder="مثال: 1098/2026"
                  value={caseNum}
                  onChange={(e) => setCaseNum(e.target.value)}
                  required 
                />
              </div>

              <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                بدء التتبع والبحث <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Track Result Layout */}
        {searched && caseDetails && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", padding: "40px", borderRadius: "4px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
          >
            {/* Header info */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid var(--border-royal)", paddingBottom: "25px", marginBottom: "30px", flexWrap: "wrap", gap: "20px" }}>
              <div>
                <span style={{ color: "var(--gold-royal)", fontSize: "0.95rem", fontWeight: "700", display: "block", marginBottom: "5px" }}>ملف القضية الرقمي</span>
                <h2 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: "800", margin: 0 }}>{caseDetails.client}</h2>
              </div>
              <button className="btn-outline" onClick={() => setSearched(false)} style={{ padding: "8px 20px", fontSize: "0.9rem" }}>
                استعلام آخر <i className="fa-solid fa-rotate-right" style={{ marginRight: "8px" }}></i>
              </button>
            </div>

            {/* Grid details */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr", gap: "30px" }} className="track-grid-responsive">
              <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                <div>
                  <h3 style={{ color: "var(--gold-royal)", fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>موضوع النزاع والقضية</h3>
                  <p style={{ color: "var(--white)", fontSize: "1.1rem", lineHeight: "1.8", margin: 0 }}>{caseDetails.title}</p>
                </div>

                <div style={{ backgroundColor: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", padding: "20px", borderRadius: "4px" }}>
                  <h4 style={{ color: "var(--gold-royal)", fontSize: "1rem", fontWeight: "700", marginBottom: "6px" }}>آخر تحديث وإجراء تم اتخاذه</h4>
                  <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>{caseDetails.lastUpdate}</p>
                </div>

                {caseDetails.requiredDocs && (
                  <div style={{ backgroundColor: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.15)", padding: "20px", borderRadius: "4px" }}>
                    <h4 style={{ color: "#f59e0b", fontSize: "1rem", fontWeight: "700", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <i className="fa-solid fa-triangle-exclamation"></i> مستندات مطلوبة من الموكل
                    </h4>
                    <p style={{ color: "var(--white)", fontSize: "0.95rem", lineHeight: "1.7", margin: 0 }}>{caseDetails.requiredDocs}</p>
                  </div>
                )}
              </div>

              {/* Sidebar stats/financials info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ backgroundColor: "rgba(205,162,80,0.04)", border: "1px solid var(--border-royal)", padding: "25px", borderRadius: "4px" }}>
                  <span style={{ color: "var(--gold-royal)", fontSize: "0.85rem", fontWeight: "700", display: "block", marginBottom: "5px" }}>المحكمة المتابع أمامها</span>
                  <p style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "600", margin: "0 0 15px 0", lineHeight: "1.6" }}>{caseDetails.court}</p>
                  
                  <span style={{ color: "var(--gold-royal)", fontSize: "0.85rem", fontWeight: "700", display: "block", marginBottom: "5px" }}>المستشار المسؤول</span>
                  <p style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "600", margin: 0 }}>{caseDetails.lawyer}</p>
                </div>

                <div style={{ backgroundColor: "rgba(37, 211, 102, 0.03)", border: "1px solid rgba(37, 211, 102, 0.15)", padding: "25px", borderRadius: "4px" }}>
                  <span style={{ color: "#25d366", fontSize: "0.85rem", fontWeight: "700", display: "block", marginBottom: "5px" }}>الجلسة القادمة بالأجندة</span>
                  <p style={{ color: "#fff", fontSize: "1rem", fontWeight: "700", margin: 0 }}>{caseDetails.nextSession}</p>
                </div>

                <div style={{ backgroundColor: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)", padding: "25px", borderRadius: "4px" }}>
                  <span style={{ color: "var(--muted)", fontSize: "0.85rem", fontWeight: "700", display: "block", marginBottom: "12px" }}>الموقف المالي التعاقدي</span>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginBottom: "8px" }}>
                    <span style={{ color: "var(--muted)" }}>إجمالي الأتعاب:</span>
                    <span style={{ color: "#fff", fontWeight: "600" }}>{caseDetails.financials.total}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginBottom: "8px" }}>
                    <span style={{ color: "var(--muted)" }}>المدفوع:</span>
                    <span style={{ color: "#10b981", fontWeight: "600" }}>{caseDetails.financials.paid}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "8px" }}>
                    <span style={{ color: "var(--muted)" }}>المتبقي:</span>
                    <span style={{ color: "#f59e0b", fontWeight: "700" }}>{caseDetails.financials.remaining}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .track-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
        }
      `}</style>
    </section>
  );
}
