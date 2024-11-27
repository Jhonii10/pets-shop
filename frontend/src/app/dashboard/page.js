import { auth } from "@/auth.config";
import { DashboardApp } from "@/components";


export default async function DashboardPage() {

  const session = await auth();

  return (
    <DashboardApp session={session}/>
  );
}