"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PortalLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "sabek123") {
      router.push("/portal/dashboard");
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <section className="section" style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="container" style={{ maxWidth: "500px" }}>
        <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-royal)", padding: "50px 40px", borderRadius: "4px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
          <div style={{ textAlign: "center", marginBottom: "35px" }}>
            <i className="fa-solid fa-scale-balanced" style={{ fontSize: "2.5rem", color: "var(--gold-royal)", marginBottom: "15px" }}></i>
            <h2 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: "800", marginBottom: "5px" }}>بوابة الإدارة والمحامين</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>يرجى تسجيل الدخول للوصول إلى لوحة التحكم</p>
          </div>

          <form onSubmit={handleLogin}>
            {error && (
              <div style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)", color: "#f87171", padding: "12px", borderRadius: "4px", marginBottom: "20px", fontSize: "0.9rem", textAlign: "center" }}>
                {error}
              </div>
            )}

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>اسم المستخدم</label>
              <input 
                type="text" 
                className="zeiny-input" 
                placeholder="أدخل اسم المستخدم"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label style={{ display: "block", color: "var(--muted)", marginBottom: "8px", fontSize: "0.9rem" }}>كلمة المرور</label>
              <input 
                type="password" 
                className="zeiny-input" 
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
              تسجيل الدخول <i className="fa-solid fa-right-to-bracket"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
