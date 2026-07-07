"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CleanHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path ? "zeiny-link active" : "zeiny-link";

  return (
    <header className={`zeiny-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <nav className="container zeiny-nav">
        
        {/* Right Side: Logo */}
        <Link href="/" className="zeiny-logo" onClick={() => setIsMenuOpen(false)}>
          <i className="fa-solid fa-scale-balanced"></i>
          <span>سـابـق</span>
        </Link>

        {/* Center: Main Menu (Responsive) */}
        <ul className={`zeiny-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link href="/" className={isActive('/')}>الرئيسية</Link></li>
          <li><Link href="/about" className={isActive('/about')}>من نحن</Link></li>
          <li><Link href="/services" className={isActive('/services')}>الخدمات</Link></li>
          <li><Link href="/achievements" className={isActive('/achievements')}>الإنجازات</Link></li>
          <li><Link href="/team" className={isActive('/team')}>فريق العمل</Link></li>
          <li><Link href="/portal/track" className={isActive('/portal/track')}>تتبع قضيتك</Link></li>
          <li><Link href="/contact" className={isActive('/contact')}>تواصل معنا</Link></li>
          
          {/* Mobile-only CTA */}
          <li className="mobile-cta-item">
            <Link href="/book" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
              طلب استشارة
            </Link>
          </li>
        </ul>

        {/* Left Side: CTA & Actions */}
        <div className="zeiny-actions">
          <button className="zeiny-lang-btn">
            EN
          </button>
          <Link href="/book" className="btn-gold header-desktop-cta">
            طلب استشارة
          </Link>
          
          {/* Hamburger Toggle */}
          <button 
            className="menu-toggle-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
        
      </nav>
    </header>
  );
}
