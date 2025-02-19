import UsersTable from "@/components/UsersTable";
import { get_admin_dashboard_users } from "@/database/admin";
import sql from "@/lib/db";
import { AdminDashboardUser } from "@/lib/models/views/UsersAdminDashboard";
export default async function AllUsers() {
  const result: AdminDashboardUser[] =
    await sql`SELECT * FROM admin_dashboard_user`;
  console.log(result);

  return (
    <div className="card">
      <div className="w-full p-2">
        <span className="text-2xl">All users</span>
        <UsersTable users={result} />
      </div>
    </div>
  );
}
