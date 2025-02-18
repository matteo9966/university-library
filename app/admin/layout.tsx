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
      <div className="flex-1 bg-primary-admin">
        main-section
        {children}
      </div>
    </main>
  );
}

export default Layout;
