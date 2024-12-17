import { auth } from "@/auth.config";
import {  Footer, Navbar, Search, Sidebar } from "@/components";


export default async function  ShopLayout({children}) {

    const session = await auth();

  return (
    <main className="min-h-screen ">
      <Navbar/>
      <Sidebar session={session}/>
      <Search/>
      <div className="bg-[url('/images/fondo.png')]">
      {children}
      </div>
      <Footer/>
    </main>
  );
}