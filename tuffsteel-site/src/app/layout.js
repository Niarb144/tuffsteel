import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "TuffSteel Industries",
  description: "Forging Strength. Building the Future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
