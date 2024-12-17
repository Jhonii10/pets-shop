import { auth } from "@/auth.config";
import { Title } from "@/components";

export default async function OrdersPage() {

  const session = await auth();

    if(!(session?.user)) return redirect('/auth/login');

  return (
    <div className='px-0 sm:px-4 '>
      <Title 
        title="Pedidos" 
        subtitle="Listado de pedidos"
        />

        <div>
          No se encontraron pedidos 
        </div>
    </div>
  );
}