"use client";

import { useState } from "react";

export default function CalendarPage() {
  const [sessions, setSessions] = useState([
    { id: 1, title: "جلسة تقديم مذكرات دفاع - شركة منصور للمقاولات", date: "2026-07-08", time: "10:00 ص", court: "القضاء الإداري - الدائرة الأولى", lawyer: "أ. محمود سابق" },
    { id: 2, title: "جلسة النطق بالحكم - رأفت وجدي غالي", date: "2026-07-09", time: "11:30 ص", court: "جنح مستأنف أكتوبر", lawyer: "أ. كريم عبد الله" },
    { id: 3, title: "جلسة سماع شهود - مريم فوزي علي", date: "2026-07-11", time: "09:00 ص", court: "أسرة مدينة نصر - الدائرة الثالثة", lawyer: "أ. سارة أمين" },
    { id: 4, title: "جلسة تسوية عمالية - حسن عادل متولي", date: "2026-07-12", time: "12:00 م", court: "عمالي شمال القاهرة", lawyer: "أ. نور حسين" }
  ]);

  const [newSession, setNewSession] = useState({ title: "", date: "", time: "", court: "", lawyer: "أ. محمود سابق" });
  const [showModal, setShowModal] = useState(false);

  const handleAddSession = (e) => {
    e.preventDefault();
    if (newSession.title && newSession.date && newSession.time && newSession.court) {
      setSessions([...sessions, { id: Date.now(), ...newSession }]);
      setNewSession({ title: "", date: "", time: "", court: "", lawyer: "أ. محمود سابق" });
      setShowModal(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", margin: 0 }}>أجندة الجلسات والتقويم القانوني</h2>
        <button className="btn-gold" onClick={() => setShowModal(true)}>
          <i className="fa-solid fa-calendar-plus"></i> جدولة جلسة جديدة
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "30px" }}>
        {/* Main Schedule List */}
        <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "30px" }}>
          <h3 style={{ fontSize: "1.25rem", color: "var(--gold-royal)", fontWeight: "700", marginBottom: "20px" }}>
            <i className="fa-regular fa-calendar-days"></i> الجلسات القادمة بالأجندة
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {sessions.map((session) => (
              <div key={session.id} style={{ display: "flex", gap: "20px", padding: "20px", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-royal)", borderRadius: "4px", alignItems: "center" }}>
                <div style={{ textAlign: "center", background: "rgba(205,162,80,0.1)", border: "1px solid var(--border-royal)", padding: "10px 15px", borderRadius: "4px", minWidth: "110px" }}>
                  <span style={{ display: "block", fontSize: "0.85rem", color: "var(--gold-royal)", fontWeight: "700" }}>{session.date}</span>
                  <span style={{ display: "block", fontSize: "0.95rem", color: "#fff", marginTop: "4px" }}>{session.time}</span>
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "6px", fontWeight: "700" }}>{session.title}</h4>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: 0 }}>
                    المحكمة: {session.court} | المسؤول: {session.lawyer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Widget and Information */}
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "30px", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#fff", fontWeight: "700", marginBottom: "20px" }}>نظرة عامة على الشهر</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "8px", color: "var(--muted)", fontSize: "0.9rem" }}>
              <span>ح</span> <span>ن</span> <span>ث</span> <span>ر</span> <span>خ</span> <span>ج</span> <span>س</span>
              {Array.from({ length: 30 }, (_, i) => {
                const day = i + 1;
                const hasSession = day === 8 || day === 9 || day === 11 || day === 12;
                return (
                  <span 
                    key={i} 
                    style={{ 
                      padding: "8px", 
                      borderRadius: "4px", 
                      background: hasSession ? "rgba(205,162,80,0.15)" : "transparent",
                      color: hasSession ? "var(--gold-royal)" : "var(--white)",
                      fontWeight: hasSession ? "700" : "400",
                      border: hasSession ? "1px solid var(--border-royal)" : "none"
                    }}
                  >
                    {day}
                  </span>
                );
              })}
            </div>
          </div>

          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "30px", borderRight: "4px solid var(--gold-royal)", borderLeft: "none" }}>
            <h4 style={{ color: "#fff", fontSize: "1rem", fontWeight: "700", marginBottom: "10px" }}>تنبيه الحضور الجنائي</h4>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: "1.8", margin: 0 }}>
              يُرجى التحقق من توفر التوكيلات الرسمية وقسائم الرسوم الخاصة بجلسة جنح مستأنف أكتوبر قبل موعد الجلسة بـ 24 ساعة على الأقل.
            </p>
          </div>
        </div>
      </div>

      {/* Add Session Modal */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", padding: "40px", borderRadius: "4px", width: "100%", maxWidth: "550px" }}>
            <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: "800", marginBottom: "25px", textAlign: "center" }}>إضافة موعد جلسة للأجندة</h3>
            <form onSubmit={handleAddSession}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>تفاصيل الجلسة / الموضوع</label>
                <input 
                  type="text" 
                  className="zeiny-input" 
                  placeholder="مثال: تقديم دفوع كتابية" 
                  value={newSession.title}
                  onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
                  required 
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>التاريخ</label>
                  <input 
                    type="date" 
                    className="zeiny-input" 
                    value={newSession.date}
                    onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
                    required 
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>الوقت</label>
                  <input 
                    type="text" 
                    className="zeiny-input" 
                    placeholder="مثال: 09:00 ص" 
                    value={newSession.time}
                    onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
                    required 
                  />
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>المحكمة والدائرة</label>
                <input 
                  type="text" 
                  className="zeiny-input" 
                  placeholder="مثال: محكمة أسرة الدقي - الدائرة الثانية" 
                  value={newSession.court}
                  onChange={(e) => setNewSession({ ...newSession, court: e.target.value })}
                  required 
                />
              </div>

              <div style={{ marginBottom: "30px" }}>
                <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>المحامي المسؤول</label>
                <select 
                  className="zeiny-input" 
                  value={newSession.lawyer}
                  onChange={(e) => setNewSession({ ...newSession, lawyer: e.target.value })}
                  style={{ appearance: "none", background: "var(--bg-card)", color: "#fff" }}
                >
                  <option value="أ. محمود سابق">أ. محمود سابق</option>
                  <option value="أ. كريم عبد الله">أ. كريم عبد الله</option>
                  <option value="أ. سارة أمين">أ. سارة أمين</option>
                  <option value="أ. نور حسين">أ. نور حسين</option>
                </select>
              </div>

              <div style={{ display: "flex", gap: "15px" }}>
                <button type="submit" className="btn-gold" style={{ flexGrow: 1, justifyContent: "center" }}>حفظ الموعد</button>
                <button type="button" className="btn-outline" style={{ flexGrow: 1 }} onClick={() => setShowModal(false)}>إلغاء</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
