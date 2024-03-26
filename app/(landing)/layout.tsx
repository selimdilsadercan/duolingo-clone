import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";

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
