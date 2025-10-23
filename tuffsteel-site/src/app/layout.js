import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";
import BackToTop from "../components/BackToTop";

export const metadata = {
  title: "TuffSteel ltd",
  description: "Forging Strength. Building the Future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="img" href="/images/logo.webp" />
      </head>
      <body>
        <Navbar />
        <main className="pt-0">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <BackToTop />
      </body>
    </html>
  );
}
