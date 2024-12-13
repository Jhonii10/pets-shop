import { OrderSummary, PetsInCart, Title } from "@/components";
import Link from "next/link";
import { PiShoppingCartThin } from "react-icons/pi";


const petsInCart = [
    {
        id: '9',
        slug: 'Pastor_aleman',
        title: 'Pastor aleman',
        size: 'grande',
        price: 500000,
        quantity: 1,
        stock: 2,
        image: 'https://images.pexels.com/photos/29443619/pexels-photo-29443619/free-photo-of-retrato-de-un-perro-pastor-aleman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
];

export default function CartPage() {
  return (
    <div className="p-4">{
        petsInCart.length < 1 ? (
            <div className="flex justify-center items-center h-[80vh]">
                <PiShoppingCartThin size={80} className="mx-5"/>
                <div className="flex flex-col items-center">
                <h1 className="text-2xl font-semibold text-center">Tu carrito esta vacio</h1>
                <Link 
                    href={'/pets'}
                    className="btn-primary mt-2 text-xl"
                    >
                    Volver a la tienda
                </Link>

                </div>
            </div>
        ):(
            <div className="flex justify-center  mb-4  px-2 sm:px-0 min-h-[80vh] ">
                <div className="flex flex-col w-[1000px]">
                    <Title title="Carrito"/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="flex flex-col mt-5 gap-2">
                        <span className="text-xl">Agregar mas items</span>
                        <Link 
                        href={'/pets'}
                        className="hover:underline mb-5"
                        >
                        Continuar comprando
                        </Link>
                    

                    
                        {/* pets in cart */}
                        <PetsInCart />
                        </div>


                        {/* summary order */}
                        <OrderSummary/>
                    </div>
                </div>
            </div>

        )
    }
    

    </div>
  );
}