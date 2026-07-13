"use client";

import { useState } from "react";

export default function ClientsManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [clients, setClients] = useState([
    { id: 1, name: "شركة منصور للمقاولات", type: "شركة", phone: "+20 100 998 7765", nationalId: "سجل تجاري 88765", casesCount: 2, totalFees: "150,000 ج.م", remaining: "50,000 ج.م" },
    { id: 2, name: "رأفت وجدي غالي", type: "فرد", phone: "+20 112 344 5566", nationalId: "29012030104432", casesCount: 1, totalFees: "40,000 ج.م", remaining: "10,000 ج.م" },
    { id: 3, name: "مريم فوزي علي", type: "فرد", phone: "+20 122 776 5544", nationalId: "29505120108876", casesCount: 1, totalFees: "30,000 ج.م", remaining: "0 ج.م" },
    { id: 4, name: "مجموعة زيدان الطبية", type: "شركة", phone: "+20 102 334 8876", nationalId: "سجل تجاري 99876", casesCount: 3, totalFees: "350,000 ج.م", remaining: "120,000 ج.م" }
  ]);

  const [newClient, setNewClient] = useState({ name: "", type: "فرد", phone: "", nationalId: "", totalFees: "", remaining: "" });

  const handleAddClient = (e) => {
    e.preventDefault();
    if (newClient.name && newClient.phone && newClient.nationalId) {
      setClients([
        ...clients, 
        { 
          id: Date.now(), 
          ...newClient, 
          casesCount: 0, 
          totalFees: newClient.totalFees ? `${newClient.totalFees} ج.م` : "0 ج.م", 
          remaining: newClient.remaining ? `${newClient.remaining} ج.م` : "0 ج.م" 
        }
      ]);
      setNewClient({ name: "", type: "فرد", phone: "", nationalId: "", totalFees: "", remaining: "" });
      setShowModal(false);
    }
  };

  const filteredClients = clients.filter(c => {
    const matchesSearch = c.name.includes(searchTerm) || c.phone.includes(searchTerm) || c.nationalId.includes(searchTerm);
    const matchesType = filterType === "all" || c.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", margin: 0 }}>نظام إدارة الموكلين والعملاء</h2>
        <button className="btn-gold" onClick={() => setShowModal(true)}>
          <i className="fa-solid fa-user-plus"></i> إضافة موكل جديد
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
        <div style={{ flexGrow: 1, position: "relative" }}>
          <input 
            type="text" 
            className="zeiny-input" 
            placeholder="البحث باسم الموكل، رقم الهاتف، أو الرقم القومي/السجل..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: 0, paddingRight: "45px" }}
          />
          <i className="fa-solid fa-magnifying-glass" style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }}></i>
        </div>

        <select 
          className="zeiny-input" 
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          style={{ marginBottom: 0, width: "200px", appearance: "none", background: "var(--bg-card)", color: "#fff" }}
        >
          <option value="all">كل الفئات</option>
          <option value="فرد">أفراد</option>
          <option value="شركة">شركات ومؤسسات</option>
        </select>
      </div>

      {/* Table Card */}
      <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", borderRadius: "4px", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "right" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-royal)", background: "rgba(255,255,255,0.02)" }}>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>الاسم</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>الفئة</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>رقم الهاتف</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>الرقم القومي / السجل</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>القضايا النشطة</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>إجمالي الأتعاب</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>المتبقي</th>
              <th style={{ padding: "18px 25px", color: "var(--gold-royal)", fontWeight: "700" }}>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <tr key={client.id} style={{ borderBottom: "1px solid var(--border-royal)", transition: "background 0.3s" }} className="table-row-hover">
                  <td style={{ padding: "18px 25px", fontWeight: "700", color: "#fff" }}>{client.name}</td>
                  <td style={{ padding: "18px 25px", color: "var(--muted)" }}>
                    <span style={{ display: "inline-block", background: client.type === "شركة" ? "rgba(96,165,250,0.1)" : "rgba(205,162,80,0.1)", color: client.type === "شركة" ? "#60a5fa" : "var(--gold-royal)", padding: "2px 8px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "600" }}>
                      {client.type}
                    </span>
                  </td>
                  <td style={{ padding: "18px 25px", color: "var(--white)" }} dir="ltr">{client.phone}</td>
                  <td style={{ padding: "18px 25px", color: "var(--muted)" }}>{client.nationalId}</td>
                  <td style={{ padding: "18px 25px", color: "var(--white)", fontWeight: "700", textAlign: "center" }}>{client.casesCount}</td>
                  <td style={{ padding: "18px 25px", color: "var(--white)" }}>{client.totalFees}</td>
                  <td style={{ padding: "18px 25px", color: client.remaining !== "0 ج.م" ? "#f59e0b" : "#10b981", fontWeight: "700" }}>{client.remaining}</td>
                  <td style={{ padding: "18px 25px" }}>
                    <button style={{ background: "transparent", border: "none", color: "var(--gold-royal)", cursor: "pointer", fontSize: "1rem", marginRight: "10px" }} title="تعديل">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button style={{ background: "transparent", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "1rem" }} title="ملف الموكل">
                      <i className="fa-solid fa-folder-open"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ padding: "40px", textAlignment: "center", color: "var(--muted)" }}>
                  لا يوجد موكلين يطابقون خيارات البحث
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Client Modal */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", padding: "40px", borderRadius: "4px", width: "100%", maxWidth: "550px" }}>
            <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: "800", marginBottom: "25px", textAlign: "center" }}>إضافة ملف موكل جديد</h3>
            <form onSubmit={handleAddClient}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>اسم الموكل بالكامل / الشركة</label>
                <input 
                  type="text" 
                  className="zeiny-input" 
                  placeholder="مثال: شركة النيل للاستثمار" 
                  value={newClient.name}
                  onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  required 
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>الفئة</label>
                  <select 
                    className="zeiny-input" 
                    value={newClient.type}
                    onChange={(e) => setNewClient({ ...newClient, type: e.target.value })}
                    style={{ appearance: "none", background: "var(--bg-card)", color: "#fff" }}
                  >
                    <option value="فرد">فرد</option>
                    <option value="شركة">شركة / مؤسسة</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>رقم الهاتف</label>
                  <input 
                    type="tel" 
                    className="zeiny-input" 
                    placeholder="010..." 
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    required 
                  />
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>الرقم القومي / رقم السجل التجاري</label>
                <input 
                  type="text" 
                  className="zeiny-input" 
                  placeholder="أدخل الرقم التعريفي الرسمي" 
                  value={newClient.nationalId}
                  onChange={(e) => setNewClient({ ...newClient, nationalId: e.target.value })}
                  required 
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "30px" }}>
                <div>
                  <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>إجمالي الأتعاب التعاقدية (ج.م)</label>
                  <input 
                    type="number" 
                    className="zeiny-input" 
                    placeholder="مثال: 50000" 
                    value={newClient.totalFees}
                    onChange={(e) => setNewClient({ ...newClient, totalFees: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>المتبقي المستحق (ج.م)</label>
                  <input 
                    type="number" 
                    className="zeiny-input" 
                    placeholder="مثال: 15000" 
                    value={newClient.remaining}
                    onChange={(e) => setNewClient({ ...newClient, remaining: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "15px" }}>
                <button type="submit" className="btn-gold" style={{ flexGrow: 1, justifyContent: "center" }}>حفظ ملف الموكل</button>
                <button type="button" className="btn-outline" style={{ flexGrow: 1 }} onClick={() => setShowModal(false)}>إلغاء</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        .table-row-hover:hover {
          background: rgba(205, 162, 80, 0.02);
        }
      `}</style>
    </div>
  );
}
