import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
