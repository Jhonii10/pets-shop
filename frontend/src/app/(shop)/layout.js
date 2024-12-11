import { auth } from "@/auth.config";
import {  Footer, Navbar, Sidebar } from "@/components";


export default async function  ShopLayout({children}) {

    const session = await auth();

  return (
    <main className="min-h-screen ">
      <Navbar/>
      <Sidebar session={session}/>
      <div className="bg-[url('/images/fondo.png')]">
      {children}
      </div>
      <Footer/>
    </main>
  );
}