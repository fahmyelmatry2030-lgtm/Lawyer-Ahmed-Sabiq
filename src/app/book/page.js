import InnerPageHero from "../../components/InnerPageHero";

export const metadata = {
  title: "حجز موعد استشارة | مؤسسة سابق للمحاماة",
  description: "احجز موعداً لاستشارة قانونية مع أحد محامينا بخطوات بسيطة.",
};

export default function BookPage() {
  return (
    <>
      <InnerPageHero 
        title="طلب استشارة" 
        subtitle="احجز موعداً قانونياً مع مستشار مختص بمشكلتك في ثوانٍ معدودة"
        breadcrumbs={[{ label: "طلب استشارة", link: null }]} 
      />
      
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ backgroundColor: 'var(--bg-card)', padding: '50px 40px', borderRadius: '4px', border: '1px solid var(--border-royal)' }}>
            <h2 style={{ color: 'var(--gold-royal)', fontSize: '1.8rem', marginBottom: '30px', textAlign: 'center', fontWeight: '800' }}>
              اختر الموعد وتفاصيل الاستشارة
            </h2>
            
            <form>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--muted)', marginBottom: '10px', fontSize: '0.95rem' }}>التاريخ</label>
                  <input type="date" className="zeiny-input" required />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--muted)', marginBottom: '10px', fontSize: '0.95rem' }}>الوقت المفضل</label>
                  <input type="time" className="zeiny-input" required />
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', color: 'var(--muted)', marginBottom: '10px', fontSize: '0.95rem' }}>نوع الاستشارة</label>
                <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', cursor: 'pointer', fontSize: '1rem' }}>
                    <input type="radio" name="type" value="office" defaultChecked style={{ accentColor: 'var(--gold-royal)' }} /> حضورية في المقر
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', cursor: 'pointer', fontSize: '1rem' }}>
                    <input type="radio" name="type" value="online" style={{ accentColor: 'var(--gold-royal)' }} /> أونلاين (Zoom)
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', cursor: 'pointer', fontSize: '1rem' }}>
                    <input type="radio" name="type" value="phone" style={{ accentColor: 'var(--gold-royal)' }} /> هاتفية
                  </label>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: 'var(--muted)', marginBottom: '10px', fontSize: '0.95rem' }}>الاسم بالكامل</label>
                <input type="text" className="zeiny-input" placeholder="اكتب اسمك الثلاثي" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--muted)', marginBottom: '10px', fontSize: '0.95rem' }}>رقم الهاتف</label>
                  <input type="tel" className="zeiny-input" placeholder="+20..." required />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--muted)', marginBottom: '10px', fontSize: '0.95rem' }}>البريد الإلكتروني</label>
                  <input type="email" className="zeiny-input" placeholder="name@example.com" required />
                </div>
              </div>
              
              <button type="button" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                تأكيد طلب الاستشارة
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </>
  );
}
