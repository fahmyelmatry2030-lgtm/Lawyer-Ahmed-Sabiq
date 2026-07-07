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
