"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function DashboardOverview() {
  // Stats and state
  const [alertsCount, setAlertsCount] = useState(3);

  // Mock sessions for today
  const todaySessions = [
    { id: "S1", time: "09:00 ص", caseName: "شركة الفرسان ضد هيئة الاستثمار", client: "أحمد الفيشاوي", court: "مجلس الدولة (الدائرة الأولى)", status: "جاهزة" },
    { id: "S2", time: "11:00 ص", caseName: "دعوى إثبات صحة ونفاذ عقد البيع", client: "منى عبد الرحمن", court: "شمال القاهرة الابتدائية", status: "بانتظار المستندات" },
    { id: "S3", time: "01:30 م", caseName: "قضية أموال عامة واستيلاء", client: "منصور الكردي", court: "جنايات التجمع الخامس", status: "مرافعة ختامية" }
  ];

  // Mock alerts list
  const activeAlerts = [
    { id: 1, type: "warning", text: "قضية رقم 1098/2026 تحتاج لمستند التوقيع الأصلي للموكل خلال 24 ساعة.", time: "منذ ساعة" },
    { id: 2, type: "danger", text: "فاتورة متأخرة السداد بقيمة 50,000 ج.م على موكل شركة منصور.", time: "منذ ساعتين" },
    { id: 3, type: "info", text: "موعد استشارة قانونية لتأسيس شركة استثمار تجاري اليوم الساعة 04:00 م.", time: "منذ 3 ساعات" }
  ];

  // Latest cases
  const latestCases = [
    { num: "1098/2026", client: "شركة منصور للمقاولات", court: "القضاء الإداري - مجلس الدولة", update: "تم إيداع تقرير الخبير", status: "نشطة" },
    { num: "5422/2025", client: "ورثة الحاج عبد الله الشافعي", court: "محكمة الأسرة بالدقي", update: "جلسة إعلام وراثة مبرمجة", status: "قيد المراجعة" },
    { num: "9021/2025", client: "مجموعة النيل للاستثمار", court: "المحكمة الاقتصادية", update: "تسوية ودية تحت الصياغة", status: "معلقة" }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      
      {/* 1. TOP TICKER HEADER BAR (لمسة احترافية عاجلة) */}
      <div style={{ backgroundColor: "#0f1524", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "18px 25px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "25px", flexWrap: "wrap" }}>
          <span style={{ color: "var(--white)", fontSize: "0.95rem" }}>
            <i className="fa-solid fa-calendar-day" style={{ color: "var(--gold-royal)", marginLeft: "8px" }}></i>
            اليوم: <strong style={{ color: "var(--gold-royal)" }}>3 جلسات قضائية</strong>
          </span>
          <span style={{ color: "var(--white)", fontSize: "0.95rem", borderRight: "1px solid rgba(255,255,255,0.1)", paddingRight: "25px" }} className="header-ticker-border">
            <i className="fa-solid fa-clock" style={{ color: "var(--gold-royal)", marginLeft: "8px" }}></i>
            أقرب جلسة: <strong style={{ color: "var(--gold-royal)" }}>الساعة 09:00 ص</strong>
          </span>
          <span style={{ color: "var(--white)", fontSize: "0.95rem", borderRight: "1px solid rgba(255,255,255,0.1)", paddingRight: "25px" }} className="header-ticker-border">
            <i className="fa-solid fa-bell" style={{ color: "#ef4444", marginLeft: "8px" }}></i>
            تنبيهات عاجلة: <strong style={{ color: "#ef4444" }}>{alertsCount} تنبيهات</strong>
          </span>
        </div>
        <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
          {new Date().toLocaleDateString("ar-EG", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* 2. QUICK ACTIONS BAR (إجراءات سريعة فورية للمحامي) */}
      <div>
        <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "700", marginBottom: "15px" }}>⚡ إجراءات سريعة</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "15px" }} className="quick-actions-grid">
          <Link href="/portal/dashboard/cases?action=new" className="quick-action-btn">
            <i className="fa-solid fa-folder-plus"></i>
            <span>إضافة قضية</span>
          </Link>
          <Link href="/portal/dashboard/clients?action=new" className="quick-action-btn">
            <i className="fa-solid fa-user-plus"></i>
            <span>إضافة موكل</span>
          </Link>
          <Link href="/portal/dashboard/calendar?action=new" className="quick-action-btn">
            <i className="fa-solid fa-calendar-plus"></i>
            <span>إضافة جلسة</span>
          </Link>
          <button className="quick-action-btn" onClick={() => alert("رفع مستند جديد")}>
            <i className="fa-solid fa-file-upload"></i>
            <span>رفع مستند</span>
          </button>
          <button className="quick-action-btn" onClick={() => alert("إنشاء فاتورة جديدة")}>
            <i className="fa-solid fa-file-invoice-dollar"></i>
            <span>إنشاء فاتورة</span>
          </button>
          <Link href="/portal/dashboard/consultations" className="quick-action-btn">
            <i className="fa-solid fa-clipboard-question"></i>
            <span>تسجيل استشارة</span>
          </Link>
        </div>
      </div>

      {/* 3. KEY METRICS STATS CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="dashboard-stats-grid">
        <div className="dash-stat-card">
          <div className="stat-card-icon"><i className="fa-solid fa-scale-balanced"></i></div>
          <div className="stat-card-info">
            <span>إجمالي القضايا بالمكتب</span>
            <h3>148 قضية</h3>
            <small style={{ color: "#10b981" }}><i className="fa-solid fa-caret-up"></i> +12 هذا الشهر</small>
          </div>
        </div>
        <div className="dash-stat-card">
          <div className="stat-card-icon"><i className="fa-solid fa-users"></i></div>
          <div className="stat-card-info">
            <span>إجمالي الموكلين المسجلين</span>
            <h3>312 موكل</h3>
            <small style={{ color: "#10b981" }}><i className="fa-solid fa-caret-up"></i> +8 موكلين جدد</small>
          </div>
        </div>
        <div className="dash-stat-card">
          <div className="stat-card-icon"><i className="fa-solid fa-hourglass-half"></i></div>
          <div className="stat-card-info">
            <span>قضايا مفتوحة قيد العمل</span>
            <h3>42 قضية</h3>
            <small style={{ color: "var(--gold-royal)" }}>12 قضية تحتاج تحديث</small>
          </div>
        </div>
        <div className="dash-stat-card">
          <div className="stat-card-icon"><i className="fa-solid fa-wallet"></i></div>
          <div className="stat-card-info">
            <span>فواتير غير مسددة</span>
            <h3>120,000 ج.م</h3>
            <small style={{ color: "#ef4444" }}>3 فواتير متأخرة جداً</small>
          </div>
        </div>
      </div>

      {/* 4. TODAY'S SESSIONS & ALERTS */}
      <div style={{ display: "grid", gridTemplateColumns: "1.7fr 1.3fr", gap: "30px" }} className="dashboard-grid-row-two">
        
        {/* Sessions table */}
        <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
            <h3 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "800", margin: 0 }}>
              <i className="fa-solid fa-calendar-day" style={{ color: "var(--gold-royal)", marginLeft: "10px" }}></i>
              جلسات المحاكم لليوم
            </h3>
            <Link href="/portal/dashboard/calendar" style={{ color: "var(--gold-royal)", fontSize: "0.85rem", fontWeight: "700" }}>عرض الأجندة بالكامل</Link>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "right" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-royal)" }}>
                  <th style={{ padding: "12px", color: "var(--gold-royal)", fontWeight: "700", fontSize: "0.9rem" }}>الوقت</th>
                  <th style={{ padding: "12px", color: "var(--gold-royal)", fontWeight: "700", fontSize: "0.9rem" }}>موضوع القضية</th>
                  <th style={{ padding: "12px", color: "var(--gold-royal)", fontWeight: "700", fontSize: "0.9rem" }}>الموكل</th>
                  <th style={{ padding: "12px", color: "var(--gold-royal)", fontWeight: "700", fontSize: "0.9rem" }}>المحكمة</th>
                  <th style={{ padding: "12px", color: "var(--gold-royal)", fontWeight: "700", fontSize: "0.9rem", textAlign: "left" }}>إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {todaySessions.map((session) => (
                  <tr key={session.id} style={{ borderBottom: "1px dotted rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "15px 12px", fontWeight: "700", color: "#fff" }}>{session.time}</td>
                    <td style={{ padding: "15px 12px", color: "var(--white)", fontSize: "0.95rem" }}>{session.caseName}</td>
                    <td style={{ padding: "15px 12px", color: "var(--muted)" }}>{session.client}</td>
                    <td style={{ padding: "15px 12px", color: "var(--muted)" }}>{session.court}</td>
                    <td style={{ padding: "15px 12px", textAlign: "left" }}>
                      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                        <button className="row-action-btn" title="عرض الملف"><i className="fa-solid fa-eye"></i></button>
                        <button className="row-action-btn" title="إضافة ملاحظة" style={{ borderColor: "rgba(205,162,80,0.3)", color: "var(--gold-royal)" }}><i className="fa-solid fa-comment-medical"></i></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Urgent Alerts section */}
        <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
            <h3 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "800", margin: 0 }}>
              <i className="fa-solid fa-circle-exclamation" style={{ color: "#ef4444", marginLeft: "10px" }}></i>
              إشعارات وتنبيهات عاجلة
            </h3>
            <button onClick={() => setAlertsCount(0)} style={{ background: "none", border: "none", color: "var(--gold-royal)", fontSize: "0.85rem", cursor: "pointer", fontWeight: "700" }}>تحديد الكل كمقروء</button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {activeAlerts.map((alert) => (
              <div 
                key={alert.id} 
                style={{ 
                  display: "flex", 
                  gap: "15px", 
                  padding: "15px", 
                  borderRadius: "4px", 
                  backgroundColor: alert.type === "danger" ? "rgba(239, 68, 68, 0.03)" : alert.type === "warning" ? "rgba(245, 158, 11, 0.03)" : "rgba(59, 130, 246, 0.03)",
                  border: `1px solid ${alert.type === "danger" ? "rgba(239, 68, 68, 0.12)" : alert.type === "warning" ? "rgba(245, 158, 11, 0.12)" : "rgba(59, 130, 246, 0.12)"}`
                }}
              >
                <div style={{ color: alert.type === "danger" ? "#ef4444" : alert.type === "warning" ? "#f59e0b" : "#3b82f6", fontSize: "1.1rem" }}>
                  {alert.type === "danger" ? <i className="fa-solid fa-circle-xmark"></i> : alert.type === "warning" ? <i className="fa-solid fa-triangle-exclamation"></i> : <i className="fa-solid fa-circle-info"></i>}
                </div>
                <div>
                  <p style={{ color: "var(--white)", fontSize: "0.9rem", margin: "0 0 5px 0", lineHeight: "1.6" }}>{alert.text}</p>
                  <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 5. LATEST CASES & CLIENTS */}
      <div style={{ display: "grid", gridTemplateColumns: "1.7fr 1.3fr", gap: "30px" }} className="dashboard-grid-row-two">
        
        {/* Latest Cases */}
        <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
            <h3 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "800", margin: 0 }}>أحدث القضايا الواردة</h3>
            <Link href="/portal/dashboard/cases" style={{ color: "var(--gold-royal)", fontSize: "0.85rem", fontWeight: "700" }}>عرض كافة القضايا</Link>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "right" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-royal)" }}>
                  <th style={{ padding: "12px", color: "var(--gold-royal)", fontWeight: "700", fontSize: "0.9rem" }}>رقم القضية</th>
                  <th style={{ padding: "12px", color: "var(--gold-royal)", fontWeight: "700", fontSize: "0.9rem" }}>الموكل</th>
                  <th style={{ padding: "12px", color: "var(--gold-royal)", fontWeight: "700", fontSize: "0.9rem" }}>المحكمة</th>
                  <th style={{ padding: "12px", color: "var(--gold-royal)", fontWeight: "700", fontSize: "0.9rem" }}>آخر إجراء</th>
                  <th style={{ padding: "12px", color: "var(--gold-royal)", fontWeight: "700", fontSize: "0.9rem" }}>الحالة</th>
                </tr>
              </thead>
              <tbody>
                {latestCases.map((c) => (
                  <tr key={c.num} style={{ borderBottom: "1px dotted rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "15px 12px", color: "var(--white)", fontWeight: "600" }}>{c.num}</td>
                    <td style={{ padding: "15px 12px", color: "var(--muted)" }}>{c.client}</td>
                    <td style={{ padding: "15px 12px", color: "var(--muted)" }}>{c.court}</td>
                    <td style={{ padding: "15px 12px", color: "var(--muted)" }}>{c.update}</td>
                    <td style={{ padding: "15px 12px" }}>
                      <span style={{ backgroundColor: c.status === "نشطة" ? "rgba(16, 185, 129, 0.1)" : "rgba(245, 158, 11, 0.1)", color: c.status === "نشطة" ? "#10b981" : "#f59e0b", padding: "4px 10px", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "700" }}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Latest Clients */}
        <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
            <h3 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "800", margin: 0 }}>أحدث الموكلين المسجلين</h3>
            <Link href="/portal/dashboard/clients" style={{ color: "var(--gold-royal)", fontSize: "0.85rem", fontWeight: "700" }}>عرض كافة الموكلين</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {[
              { name: "صلاح الدين الأيوبي", desc: "تأسيس شركة قابضة", initial: "ص" },
              { name: "نهى عبد الكريم الجبالي", desc: "استشارة تجارية وتقسيم تركات", initial: "ن" },
              { name: "مؤسسة النصر اللوجستية", desc: "نزاع قضائي جمركي", initial: "م" }
            ].map((cl, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "15px", borderBottom: "1px dotted rgba(255,255,255,0.03)", paddingBottom: "12px" }}>
                <div style={{ width: "45px", height: "45px", borderRadius: "50%", backgroundColor: "rgba(205,162,80,0.1)", border: "1px solid var(--border-royal)", display: "flex", alignItems: "center", justifyCenter: "center", color: "var(--gold-royal)", fontWeight: "700", display: "flex", justifyContent: "center" }}>
                  {cl.initial}
                </div>
                <div>
                  <h4 style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "700", margin: "0 0 3px 0" }}>{cl.name}</h4>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem", margin: 0 }}>{cl.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx global>{`
        .quick-action-btn {
          background-color: var(--bg-card);
          border: 1px solid var(--border-royal);
          border-radius: 4px;
          padding: 20px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: var(--white);
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }
        .quick-action-btn i {
          font-size: 1.4rem;
          color: var(--gold-royal);
          transition: transform 0.3s;
        }
        .quick-action-btn:hover {
          background-color: rgba(205,162,80,0.04);
          border-color: var(--gold-royal);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        .quick-action-btn:hover i {
          transform: scale(1.15);
        }
        .dash-stat-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-royal);
          border-radius: 4px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .stat-card-icon {
          width: 55px;
          height: 55px;
          border-radius: 4px;
          background-color: rgba(205,162,80,0.08);
          border: 1px solid rgba(205,162,80,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-royal);
          font-size: 1.5rem;
        }
        .stat-card-info {
          display: flex;
          flex-direction: column;
        }
        .stat-card-info span {
          color: var(--muted);
          font-size: 0.85rem;
          margin-bottom: 5px;
        }
        .stat-card-info h3 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 0 2px 0;
        }
        .stat-card-info small {
          font-size: 0.8rem;
          font-weight: 600;
        }
        .row-action-btn {
          background: none;
          border: 1px solid rgba(255,255,255,0.08);
          width: 32px;
          height: 32px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          cursor: pointer;
          transition: all 0.3s;
        }
        .row-action-btn:hover {
          background-color: rgba(205,162,80,0.1);
          border-color: var(--gold-royal);
          color: var(--gold-royal);
        }
        @media (max-width: 1200px) {
          .quick-actions-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .dashboard-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 992px) {
          .dashboard-grid-row-two {
            grid-template-columns: 1fr !important;
          }
          .header-ticker-border {
            border-right: none !important;
            padding-right: 0 !important;
          }
        }
        @media (max-width: 576px) {
          .quick-actions-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .dashboard-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
