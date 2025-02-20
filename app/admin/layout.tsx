import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import "@/styles/admin.css";
interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  return (
    <main className="flex flex-row">
      <div className="max-w-[350px] flex-1">
        <Sidebar />
      </div>
      <div className="flex-1 bg-light-300 admin-dashboard-main">
        <Navbar />
        <div className="mt-10">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
