import sql from "@/lib/db";
async function getDBVersion() {
  const response = await sql`SELECT version()`;
  return response[0].version;
}

export default async function Page() {
  const data = await getDBVersion();
  return (
    <div className="text-white p-4 border border-white rounded-md">
      <h1>Database Version:</h1>
      <p>{data}</p>
    </div>
  );
}
