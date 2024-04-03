import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";

const App = dynamic(() => import("@/components/admin/App"), { ssr: false });

function Page() {
  if (!isAdmin()) redirect("/");

  return <App />;
}

export default Page;
