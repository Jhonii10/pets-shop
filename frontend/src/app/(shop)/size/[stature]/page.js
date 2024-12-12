import { Pagination, Title } from "@/components";
import { PetsGrid } from "@/components/pets";
import { PETS_ALL } from "@/seed/pets";
import { notFound, redirect } from "next/navigation";

export default function StaturePage({params,searchParams}) {

  const {stature} = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  if(stature !== "mini" && stature !== "small" && stature !== "medium"&& stature !== "big" ){
    notFound();
  }

  const label = {
    'mini':'mini',
    'small':'pequeño',
    'medium':'mediano',
    'big':'grande',

  }

 const petsSize = PETS_ALL.filter(pet => pet.size === label[stature])
 

   // Define items per page
 const itemsPerPage = 8; // Adjust as needed
  
 // Calculate total pages
 const totalPages = Math.ceil(petsSize.length / itemsPerPage);
 
 // Paginate the pets
 const paginatedPets = petsSize.slice(
   (page - 1) * itemsPerPage, 
   page * itemsPerPage
 );
 

 if(paginatedPets?.length === 0){ redirect('/pets'); }

  return (
    <div className="px-4 lg:px-20 py-4">
      <Title
        title={label[stature]}
        subtitle={`Cachorros de tamaño ${label[stature]}`}
        className="mb-2 "
      />
      <PetsGrid products={paginatedPets}/>
      <Pagination totalPages={totalPages} />
    </div>  
  );
}