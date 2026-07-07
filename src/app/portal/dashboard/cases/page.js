"use client";

import { useState } from "react";

export default function CasesManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const initialCases = [
    { id: "1", client: "شركة منصور للمقاولات", caseNum: "1098/2026", type: "مدني - منازعة عقود", court: "القضاء الإداري", status: "نشطة", lawyer: "أ. محمود سابق" },
    { id: "2", client: "رأفت وجدي غالي", caseNum: "2201/2026", type: "جنائي - خيانة أمانة", court: "جنح مستأنف أكتوبر", status: "جلسة قادمة", lawyer: "أ. كريم عبد الله" },
    { id: "3", client: "مريم فوزي علي", caseNum: "897/2026", type: "أحوال شخصية - نفقة", court: "أسرة مدينة نصر", status: "مؤجلة للنطق بالحكم", lawyer: "أ. سارة أمين" },
    { id: "4", client: "حسن عادل متولي", caseNum: "3029/2025", type: "عمالي - فصل تعسفي", court: "عمالي شمال القاهرة", status: "محسومة لصالحنا", lawyer: "أ. نور حسين" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "نشطة": return "#60a5fa";
      case "جلسة قادمة": return "#f59e0b";
      case "مؤجلة للنطق بالحكم": return "#a78bfa";
      case "محسومة لصالحنا": return "#10b981";
      default: return "var(--muted)";
    }
  };

  const filteredCases = initialCases.filter(c => {
    const matchesSearch = c.client.includes(searchTerm) || c.caseNum.includes(searchTerm) || c.type.includes(searchTerm);
    const matchesStatus = filterStatus === "all" || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", margin: 0 }}>نظام إدارة القضايا والملفات</h2>
        <button className="btn-gold" style={{ padding: "12px 25px", fontSize: "0.95rem" }}>
          <i className="fa-solid fa-plus"></i> فتح ملف قضية جديدة
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
        <div style={{ flexGrow: 1, position: "relative" }}>
          <input 
            type="text" 
            className="zeiny-input" 
            placeholder="البحث باسم الموكل، رقم القضية، أو التخصص..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: 0, paddingRight: "45px" }}
          />
          <i className="fa-solid fa-magnifying-glass" style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }}></i>
        </div>

        <select 
          className="zeiny-input" 
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{ marginBottom: 0, width: "200px", appearance: "none", background: "var(--bg-card)", color: "#fff" }}
        >
          <option value="all">كل الحالات</option>
          <option value="نشطة">نشطة</option>
          <option value="جلسة قادمة">جلسة قادمة</option>
          <option value="مؤجلة للنطق بالحكم">مؤجلة للنطق بالحكم</option>
          <option value="محسومة لصالحنا">محسومة لصالحنا</option>
        </select>
      </div>

      {/* Table Card */}
      <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "right" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-royal)", background: "rgba(255,255,255,0.02)" }}>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>الموكل</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>رقم القضية</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>نوع النزاع</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>المحكمة</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>المحامي المسؤول</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>الحالة</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredCases.length > 0 ? (
              filteredCases.map((c) => (
                <tr key={c.id} style={{ borderBottom: "1px solid var(--border-royal)", transition: "background 0.3s" }} className="table-row-hover">
                  <td style={{ padding: "18px 25px", fontWeight: "700", color: "#fff" }}>{c.client}</td>
                  <td style={{ padding: "18px 25px", color: "var(--muted)" }}>{c.caseNum}</td>
                  <td style={{ padding: "18px 25px", color: "var(--white)" }}>{c.type}</td>
                  <td style={{ padding: "18px 25px", color: "var(--muted)" }}>{c.court}</td>
                  <td style={{ padding: "18px 25px", color: "var(--white)" }}>{c.lawyer}</td>
                  <td style={{ padding: "18px 25px" }}>
                    <span style={{ display: "inline-block", background: "rgba(255,255,255,0.02)", border: `1px solid ${getStatusColor(c.status)}`, color: getStatusColor(c.status), padding: "4px 12px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "700" }}>
                      {c.status}
                    </span>
                  </td>
                  <td style={{ padding: "18px 25px" }}>
                    <button style={{ background: "transparent", border: "none", color: "var(--gold-royal)", cursor: "pointer", fontSize: "1rem", marginRight: "10px" }} title="تعديل">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button style={{ background: "transparent", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "1rem" }} title="التفاصيل">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ padding: "40px", textAlignment: "center", color: "var(--muted)" }}>
                  لا توجد قضايا تطابق خيارات البحث
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <style jsx global>{`
        .table-row-hover:hover {
          background: rgba(205, 162, 80, 0.02);
        }
      `}</style>
    </div>
  );
}
