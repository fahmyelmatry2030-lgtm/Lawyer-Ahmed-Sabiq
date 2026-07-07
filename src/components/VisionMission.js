export default function VisionMission() {
  return (
    <section className="section" style={{ background: 'rgba(255, 255, 255, 0.01)', paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          <div style={{ padding: '40px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', border: '1px solid var(--border)', borderTop: '4px solid var(--gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <i className="fa-solid fa-eye" style={{ fontSize: '2rem', color: 'var(--gold)' }}></i>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', margin: 0, fontWeight: '700' }}>رؤيتنا</h3>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.9' }}>
              أن نكون المؤسسة القانونية الرائدة والأكثر موثوقية في منطقة الشرق الأوسط، من خلال إرساء معايير جديدة للتميز في العمل القانوني وتقديم حلول مبتكرة واستباقية تواكب التطور السريع في بيئة الأعمال وتلبي التطلعات المستقبلية لعملائنا.
            </p>
          </div>

          <div style={{ padding: '40px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', border: '1px solid var(--border)', borderTop: '4px solid var(--gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <i className="fa-solid fa-bullseye" style={{ fontSize: '2rem', color: 'var(--gold)' }}></i>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', margin: 0, fontWeight: '700' }}>رسالتنا</h3>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.9' }}>
              الدفاع عن حقوق موكلينا وحماية مصالحهم بكل نزاهة وااحترافية. نلتزم بتسخير كافة خبراتنا المتراكمة ومواردنا لتقديم خدمات قانونية استثنائية تتميز بالدقة، الشفافية، والسرية التامة، مع بناء شراكات طويلة الأمد مبنية على الثقة المتبادلة والنتائج الملموسة.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
