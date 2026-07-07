"use client";

import { motion } from "framer-motion";

export default function DashboardOverview() {
  const quickStats = [
    { title: "القضايا النشطة", value: "34", icon: "fa-solid fa-gavel", color: "var(--gold-royal)" },
    { title: "جلسات هذا الأسبوع", value: "8", icon: "fa-solid fa-calendar-check", color: "#60a5fa" },
    { title: "استشارات معلقة", value: "12", icon: "fa-solid fa-clock", color: "#f59e0b" },
    { title: "إجمالي الموكلين", value: "187", icon: "fa-solid fa-users", color: "#10b981" }
  ];

  const recentSessions = [
    { client: "شركة منصور للمقاولات", caseNum: "1098/2026", court: "محكمة القضاء الإداري", date: "اليوم، 10:00 ص" },
    { client: "أحمد عبد الله حسين", caseNum: "4532/2026", court: "محكمة جنح الدقي", date: "غداً، 11:30 ص" },
    { client: "مريم فوزي علي", caseNum: "897/2026", court: "محكمة أسرة مدينة نصر", date: "الخميس، 09:00 ص" }
  ];

  return (
    <div>
      <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", marginBottom: "30px" }}>لوحة التحكم والمتابعة</h2>

      {/* Grid for Quick Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "25px", marginBottom: "40px" }}>
        {quickStats.map((stat, i) => (
          <div key={i} style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <span style={{ display: "block", color: "var(--muted)", fontSize: "0.95rem", marginBottom: "8px" }}>{stat.title}</span>
              <strong style={{ display: "block", fontSize: "2.2rem", fontWeight: "800", color: "#fff" }}>{stat.value}</strong>
            </div>
            <div style={{ width: "50px", height: "50px", borderRadius: "4px", background: `rgba(255,255,255,0.02)`, border: `1px solid var(--border-royal)`, display: "flex", alignItems: "center", justifyContent: "center", color: stat.color, fontSize: "1.4rem" }}>
              <i className={stat.icon}></i>
            </div>
          </div>
        ))}
      </div>

      {/* Grid for Detailed Insights */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "30px" }}>
        {/* Main Side: Schedule & Alert */}
        <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "30px" }}>
          <h3 style={{ fontSize: "1.25rem", color: "var(--gold-royal)", fontWeight: "700", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
            <i className="fa-solid fa-calendar-days"></i> جدول الجلسات القادمة
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {recentSessions.map((session, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-royal)", borderRadius: "4px" }}>
                <div>
                  <strong style={{ display: "block", color: "#fff", fontSize: "1.1rem", marginBottom: "5px" }}>{session.client}</strong>
                  <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>رقم القضية: {session.caseNum} | {session.court}</span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <span style={{ display: "inline-block", background: "rgba(205,162,80,0.1)", color: "var(--gold-royal)", padding: "6px 14px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "700" }}>
                    {session.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Side: Short Actions & Help */}
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "30px" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#fff", fontWeight: "700", marginBottom: "15px" }}>إضافة سريعة</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button className="btn-gold" style={{ padding: "12px", fontSize: "0.95rem", justifyContent: "center", width: "100%" }}>
                <i className="fa-solid fa-plus"></i> إضافة قضية جديدة
              </button>
              <button className="btn-outline" style={{ padding: "10px", fontSize: "0.95rem", justifyContent: "center", width: "100%" }}>
                <i className="fa-solid fa-user-plus"></i> إضافة موكل جديد
              </button>
            </div>
          </div>

          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "30px", borderRight: "4px solid var(--gold-royal)", borderLeft: "none" }}>
            <h4 style={{ color: "#fff", fontSize: "1rem", fontWeight: "700", marginBottom: "10px" }}>إشعار النظام</h4>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>
              يوجد عدد 3 استشارات جديدة لم يتم تعيين محامٍ لها بعد. يرجى مراجعة صفحة الاستشارات المفتوحة وتوزيعها.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
