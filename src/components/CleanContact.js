export default function CleanContact() {
  return (
    <section className="section">
      <div className="container">
        <div className="zeiny-contact-container">
          <div className="zeiny-contact-info">
            <h2 style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '20px', fontWeight: '800' }}>معلومات التواصل</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '40px', fontSize: '1.1rem' }}>
              فريقنا متاح دائماً لاستقبال استفساراتك وتقديم المشورة القانونية.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(235,177,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: '1.3rem', flexShrink: 0 }}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px' }}>العنوان</h4>
                <p style={{ color: 'var(--muted)', margin: 0 }}>12 شارع طلعت حرب، وسط البلد، القاهرة، مصر</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(235,177,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: '1.3rem', flexShrink: 0 }}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px' }}>الهاتف</h4>
                <p style={{ color: 'var(--muted)', margin: 0 }} dir="ltr">+20 100 123 4567</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(235,177,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: '1.3rem', flexShrink: 0 }}>
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px' }}>واتساب</h4>
                <p style={{ color: 'var(--muted)', margin: 0 }} dir="ltr">+20 100 123 4567</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(235,177,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: '1.3rem', flexShrink: 0 }}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px' }}>البريد الإلكتروني</h4>
                <p style={{ color: 'var(--muted)', margin: 0 }}>info@sabeklaw.com</p>
              </div>
            </div>
            
            {/* Embedded Google Map Placeholder */}
            <div style={{ marginTop: '40px', borderRadius: '8px', overflow: 'hidden', height: '220px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'var(--muted)', textAlign: 'center' }}><i className="fa-solid fa-map-location-dot" style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--gold)' }}></i><br/>خريطة الموقع الجغرافي</span>
            </div>
          </div>

          <div className="zeiny-contact-form-box">
            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.8rem', fontWeight: '800' }}>طلب استشارة سريعة</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '30px', fontSize: '1.05rem' }}>املأ النموذج التالي وسيقوم أحد خبرائنا بالتواصل معك في أقرب وقت.</p>
            <form>
              <input type="text" className="zeiny-input" placeholder="الاسم بالكامل" required />
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input type="tel" className="zeiny-input" placeholder="رقم الهاتف / واتساب" required />
                <input type="email" className="zeiny-input" placeholder="البريد الإلكتروني" required />
              </div>
              
              <select className="zeiny-input" required style={{ appearance: 'none', background: 'rgba(255,255,255,0.04)', color: '#fff', height: '54px' }}>
                <option value="" style={{ background: 'var(--bg-light)' }}>-- اختر نوع القضية --</option>
                <option value="civil" style={{ background: 'var(--bg-light)' }}>قضايا مدنية</option>
                <option value="criminal" style={{ background: 'var(--bg-light)' }}>قضايا جنائية</option>
                <option value="family" style={{ background: 'var(--bg-light)' }}>قضايا الأسرة</option>
                <option value="corporate" style={{ background: 'var(--bg-light)' }}>شركات واستثمار</option>
                <option value="other" style={{ background: 'var(--bg-light)' }}>أخرى</option>
              </select>
              
              <textarea className="zeiny-input" placeholder="وصف موجز للمشكلة القانونية" rows="5" required></textarea>
              
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', color: 'var(--muted)', marginBottom: '10px', fontSize: '0.95rem' }}>رفع مستندات (اختياري)</label>
                <input type="file" className="zeiny-input" style={{ padding: '10px' }} />
              </div>
              
              <button type="button" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
