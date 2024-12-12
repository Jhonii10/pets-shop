import { PetSlideShow } from "@/components";
import { quicksand } from "@/font";
import { PETS_ALL } from "@/seed/pets";
import { fCurrency } from "@/utils/formatNumber";
import { redirect } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

export default function PetbyIDPage({params}) {
    const {id} = params;
    const pet = PETS_ALL.find(pet =>  pet.id === Number(id));

    if (!pet) {
        redirect('/pets')
    }

  return (
    <div className="mt-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-3 px-4 lg:px-12">
       
       <div className="col-span-1 md:col-span-1 rounded">
         <PetSlideShow 
          title={pet.breed}
          images={pet.imageUrl}
          className="hidden md:block"
         />
       </div>

       <div className="col-span-1 px-5 p-4 flex flex-col gap-3">
            {/* <StockLabel slug={product.slug} /> */}
            <h1 className={`${quicksand.className} antialiased font-bold text-2xl`}>{pet.breed}</h1>
            
            
                <h3 className="font-bold text-lg">Descripcion</h3>
                <p className="font-normal text-lg">{pet.descripcion}</p>
            
            
            <p className="text-2xl font-bold ">{fCurrency(pet.price)}</p>

            <div className="flex gap-2 items-center text-base">
                <h3 className="font-bold  ">Tamaño:</h3>
                <p className="font-normal">{pet.size}</p>
            </div>

            <div className="flex gap-2 items-center text-base ">
                <h3 className="font-bold ">Existencias:</h3>
                <p className="font-normal">{pet.stock}</p>
            </div>

            <AddToCart product={pet} />

            
            
            
       </div>
       
      
      
    </div>
  );
}