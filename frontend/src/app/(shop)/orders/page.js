import { Title } from "@/components";

export default function OrdersPage() {
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