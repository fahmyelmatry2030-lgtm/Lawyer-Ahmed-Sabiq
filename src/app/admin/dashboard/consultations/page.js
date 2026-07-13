"use client";

import { useState } from "react";

export default function ConsultationsPage() {
  const [requests, setRequests] = useState([
    { id: "1", client: "شريف عبد الرحمن صبري", phone: "+20 100 998 7765", email: "sherif@mail.com", type: "corporate", desc: "نحتاج لمراجعة عقود شراكة خارجية وتأسيس فرع لشركة أجنبية بمصر.", date: "امس، 08:30 م", answered: false },
    { id: "2", client: "نهى جمال سليمان", phone: "+20 112 344 5566", email: "noha@mail.com", type: "family", desc: "استشارة بخصوص إجراءات دعوى نفقة وطلاق للضرر.", date: "امس، 03:15 م", answered: false },
    { id: "3", client: "مصطفى طه محمود", phone: "+20 122 776 5544", email: "mostafa@mail.com", type: "civil", desc: "نزاع مع مستأجر حول إخلاء عقار تجاري بنظام الإيجار القديم.", date: "اليوم، 11:20 ص", answered: false }
  ]);

  const [activeReplyId, setActiveReplyId] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleSendReply = (id) => {
    setRequests(requests.map(r => r.id === id ? { ...r, answered: true } : r));
    setActiveReplyId(null);
    setReplyText("");
    alert("تم إرسال الرد والإفادة للموكل بنجاح!");
  };

  const getTypeName = (type) => {
    switch (type) {
      case "corporate": return "شركات واستثمار";
      case "family": return "قضايا الأسرة";
      case "civil": return "قضايا مدنية";
      default: return "استشارة عامة";
    }
  };

  const pendingRequests = requests.filter(r => !r.answered);

  return (
    <div>
      <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", marginBottom: "30px" }}>طلبات الاستشارات الواردة</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "25px" }}>
        {pendingRequests.length > 0 ? (
          pendingRequests.map((req) => (
            <div key={req.id} style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "35px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap", gap: "15px" }}>
                <div>
                  <h3 style={{ color: "#fff", fontSize: "1.3rem", fontWeight: "800", marginBottom: "5px" }}>{req.client}</h3>
                  <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                    هاتف: {req.phone} | بريد: {req.email}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ background: "rgba(205,162,80,0.1)", color: "var(--gold-royal)", padding: "5px 12px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "700" }}>
                    {getTypeName(req.type)}
                  </span>
                  <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{req.date}</span>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)", padding: "20px", borderRadius: "4px", marginBottom: "25px", color: "var(--white)", fontSize: "1.05rem", lineHeight: "1.8" }}>
                <strong>شرح المشكلة القانونية:</strong><br/>
                {req.desc}
              </div>

              {activeReplyId === req.id ? (
                <div>
                  <textarea 
                    className="zeiny-input" 
                    placeholder="اكتب ردك القانوني أو المذكرة التمهيدية لإرسالها بالبريد الإلكتروني والواتساب..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows="4"
                  />
                  <div style={{ display: "flex", gap: "15px" }}>
                    <button className="btn-gold" onClick={() => handleSendReply(req.id)}>
                      إرسال الرد الرسمي
                    </button>
                    <button className="btn-outline" onClick={() => setActiveReplyId(null)}>
                      إلغاء
                    </button>
                  </div>
                </div>
              ) : (
                <button className="btn-gold" onClick={() => setActiveReplyId(req.id)}>
                  <i className="fa-solid fa-reply"></i> الرد وتقديم الإفادة القانونية
                </button>
              )}
            </div>
          ))
        ) : (
          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", padding: "50px", textAlign: "center", color: "var(--muted)" }}>
            <i className="fa-solid fa-circle-check" style={{ fontSize: "3rem", color: "#10b981", marginBottom: "20px" }}></i>
            <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: "700", marginBottom: "10px" }}>كل الاستشارات مكتملة</h3>
            <p style={{ margin: 0 }}>لا توجد طلبات استشارة معلقة حالياً في النظام</p>
          </div>
        )}
      </div>
    </div>
  );
}
