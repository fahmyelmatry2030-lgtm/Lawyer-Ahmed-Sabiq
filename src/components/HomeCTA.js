import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>هل تحتاج إلى تمثيل قانوني موثوق؟</h2>
        <p>
          لا تترك حقوقك للصدفة. فريقنا من الخبراء القانونيين جاهز لدراسة قضيتك وتقديم أفضل استراتيجية دفاع تناسب موقفك القانوني.
        </p>
        <div className="zeiny-buttons">
          <Link href="/book" className="btn-gold">
            طلب استشارة الآن
          </Link>
          <Link href="/contact" className="btn-outline">
            تواصل معنا
          </Link>
        </div>
      </div>
    </section>
  );
}
