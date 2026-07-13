"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/admin");
  };

  const navItems = [
    { label: "نظرة عامة", path: "/admin/dashboard", icon: "fa-solid fa-chart-line" },
    { label: "إدارة الموكلين", path: "/admin/dashboard/clients", icon: "fa-solid fa-users" },
    { label: "إدارة القضايا", path: "/admin/dashboard/cases", icon: "fa-solid fa-gavel" },
    { label: "أجندة الجلسات", path: "/admin/dashboard/calendar", icon: "fa-solid fa-calendar-days" },
    { label: "طلبات الاستشارة", path: "/admin/dashboard/consultations", icon: "fa-solid fa-envelope-open-text" }
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "var(--bg-royal)" }}>
      {/* Sidebar */}
      <aside style={{ width: "260px", backgroundColor: "var(--bg-card)", borderLeft: "1px solid var(--border-royal)", display: "flex", flexDirection: "column", padding: "30px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "40px", paddingBottom: "20px", borderBottom: "1px solid var(--border-royal)" }}>
          <i className="fa-solid fa-scale-balanced" style={{ color: "var(--gold-royal)", fontSize: "1.8rem" }}></i>
          <span style={{ color: "#fff", fontWeight: "800", fontSize: "1.2rem" }}>بوابة سابق</span>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link 
                key={item.path} 
                href={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 15px",
                  borderRadius: "4px",
                  color: active ? "#0b0f19" : "var(--muted)",
                  background: active ? "var(--gold-royal)" : "transparent",
                  fontWeight: active ? "700" : "500",
                  transition: "all 0.3s"
                }}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button 
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 15px",
            borderRadius: "4px",
            color: "#f87171",
            background: "transparent",
            border: "1px solid rgba(248, 113, 113, 0.15)",
            cursor: "pointer",
            fontWeight: "600",
            fontFamily: "inherit",
            transition: "all 0.3s",
            marginTop: "auto"
          }}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <span>تسجيل الخروج</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header bar inside dashboard */}
        <header style={{ height: "80px", borderBottom: "1px solid var(--border-royal)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", backgroundColor: "rgba(17, 23, 38, 0.3)" }}>
          <div style={{ color: "#fff", fontWeight: "700" }}>مرحباً بك، أ. محمود سابق</div>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#25d366" }}></span>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>متصل بالنظام</span>
          </div>
        </header>

        {/* Dynamic page content */}
        <main style={{ padding: "40px", flexGrow: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
