import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'var(--zeiny-bg)',
      color: 'var(--zeiny-text-light)',
      textAlign: 'center',
      padding: '20px'
    }}>
      <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '4rem', color: 'var(--zeiny-gold)', marginBottom: '20px' }}></i>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--zeiny-text-muted)' }}>الصفحة غير موجودة</h2>
      <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
      
      <Link href="/" className="btn-zeiny-solid">
        العودة للرئيسية <i className="fa-solid fa-arrow-left" style={{ marginLeft: '8px' }}></i>
      </Link>
    </div>
  );
}
