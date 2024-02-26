import { columns } from "./columns";
import { DataTable } from "@/components/data-table";
import getData from "@/actions/getData";

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
