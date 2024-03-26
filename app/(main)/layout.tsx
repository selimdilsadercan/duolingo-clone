import MobileSidebar from "@/components/nav/MobileSidebar";
import Sidebar from "@/components/nav/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MobileSidebar />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
      </main>
    </>
  );
}

export default Layout;