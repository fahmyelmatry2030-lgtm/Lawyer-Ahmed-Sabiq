import { Cairo } from "next/font/google";
import "./globals.css";
import CleanHeader from "../components/CleanHeader";
import CleanFooter from "../components/CleanFooter";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: 'swap',
});

export const metadata = {
  title: "مؤسسة سابق للمحاماة",
  description: "المؤسسة القانونية الرائدة في مصر والشرق الأوسط. دقة، نزاهة، واحترافية.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='currentColor' d='M96 464c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V400h-16c-13.2 0-24-10.8-24-24V232h-80v144c0 13.2-10.8 24-24 24H192v64H96zm272-328h-80.4L280.2 48c-4.5-13.5-17.2-24-31.2-24H199c-14 0-26.7 10.5-31.2 24L160.4 136H80c-17.7 0-32 14.3-32 32v28.7L26.3 260.6c-7.1 26.8 8.5 54.4 35.3 61.5 1.3.3 2.7.4 4 .4 24.9 0 45.5-17.4 49.3-41.8L135 252h178l19.1 28.7c3.8 24.4 24.4 41.8 49.3 41.8 1.4 0 2.7-.1 4-.4 26.8-7.1 42.4-34.7 35.3-61.5L400 196.7V136c0-17.7-14.3-32-32-32z'/%3E%3C/svg%3E" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={cairo.variable}>
        <CleanHeader />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <CleanFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
