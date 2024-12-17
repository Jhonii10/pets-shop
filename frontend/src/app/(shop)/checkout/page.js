import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function  CheckoutPage() {

    const session = await auth();

    if(!session){
        redirect('/auth/login')
    }

  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-16 px-10 sm:px-0">

      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        
        <Title title="Verificar " subtitle="Verificar datos de envio y resumen de compra" />

      </div>




    </div>
  );
}