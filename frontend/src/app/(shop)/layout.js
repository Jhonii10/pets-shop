import { auth } from "@/auth.config";
import { Navbar, Sidebar } from "@/components";

export default async function  ShopLayout({children}) {

    const session = await auth();

  return (
    <main className="min-h-screen ">
      <Navbar/>
      <Sidebar session={session}/>
      {children}
    </main>
  );
}