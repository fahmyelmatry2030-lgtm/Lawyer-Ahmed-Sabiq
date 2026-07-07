"use client";
import Link from 'next/link';

export default function CleanFooter() {
  return (
    <footer style={{ backgroundColor: "#080b12", borderTop: "1px solid var(--border-royal)", padding: "80px 0 30px" }}>
      <div className="container">
        
        {/* Footer Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.2fr 1.2fr", gap: "40px", marginBottom: "60px" }} className="footer-grid-responsive">
          
          {/* Main Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "25px" }}>
              <i className="fa-solid fa-scale-balanced" style={{ color: "var(--gold-royal)", fontSize: "2rem" }}></i>
              <h2 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: "800", margin: 0 }}>مؤسسة سابق</h2>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px", maxWidth: "400px" }}>
              نخبة من المستشارين القانونيين والمحامين المتمرسين في صياغة العقود وتأسيس الشركات والدفاع الجنائي والتجاري بأعلى درجات المهنية والسرية.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <a href="#" className="social-icon-btn"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="social-icon-btn"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="social-icon-btn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="social-icon-btn"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          {/* Links: Firm */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "1.15rem", fontWeight: "700", marginBottom: "25px", position: "relative" }} className="footer-title-accent">المؤسسة</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", padding: 0 }}>
              <li><Link href="/about" className="footer-link-item">من نحن</Link></li>
              <li><Link href="/achievements" className="footer-link-item">الإنجازات والقضايا</Link></li>
              <li><Link href="/team" className="footer-link-item">فريق العمل</Link></li>
              <li><Link href="/blog" className="footer-link-item">المدونة القانونية</Link></li>
            </ul>
          </div>

          {/* Links: Services */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "1.15rem", fontWeight: "700", marginBottom: "25px", position: "relative" }} className="footer-title-accent">تخصصاتنا</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", padding: 0 }}>
              <li><Link href="/services/corporate" className="footer-link-item">الشركات والاستثمار</Link></li>
              <li><Link href="/services/criminal" className="footer-link-item">الدفاع الجنائي</Link></li>
              <li><Link href="/services/civil" className="footer-link-item">القضايا المدنية</Link></li>
              <li><Link href="/services/family" className="footer-link-item">الأحوال الشخصية</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "1.15rem", fontWeight: "700", marginBottom: "25px", position: "relative" }} className="footer-title-accent">اتصل بنا</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "15px", padding: 0, color: "var(--muted)", fontSize: "0.95rem" }}>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <i className="fa-solid fa-location-dot" style={{ color: "var(--gold-royal)", marginTop: "4px" }}></i>
                <span>12 شارع طلعت حرب، وسط البلد، القاهرة، مصر</span>
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <i className="fa-solid fa-phone" style={{ color: "var(--gold-royal)" }}></i>
                <span dir="ltr">+20 100 123 4567</span>
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <i className="fa-solid fa-envelope" style={{ color: "var(--gold-royal)" }}></i>
                <span>info@sabeklaw.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{ borderTop: "1px solid rgba(205, 162, 80, 0.1)", paddingTop: "30px", textAlign: "center" }}>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", margin: 0 }}>
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - مؤسسة سابق للمحاماة والاستشارات القانونية.
          </p>
        </div>

      </div>

      <style jsx global>{`
        .social-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(205, 162, 80, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-royal);
          transition: all 0.3s;
          background: rgba(205, 162, 80, 0.02);
        }
        .social-icon-btn:hover {
          background: var(--gold-royal);
          color: #0b0f19;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(205, 162, 80, 0.3);
        }
        .footer-link-item {
          color: var(--muted);
          transition: all 0.3s;
        }
        .footer-link-item:hover {
          color: var(--gold-royal);
          padding-right: 5px;
        }
        .footer-title-accent::after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: 0;
          width: 30px;
          height: 2px;
          background: var(--gold-royal);
        }
        @media (max-width: 992px) {
          .footer-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </footer>
  );
}
