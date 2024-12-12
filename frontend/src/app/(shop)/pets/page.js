import { Pagination, Title } from "@/components";
import { PetsGrid } from "@/components/pets";
import { PETS_ALL } from "@/seed/pets";
import { redirect } from "next/navigation";

export default function petsPage({searchParams}) {

 const page = searchParams.page ? parseInt(searchParams.page) : 1;

 // Define items per page
 const itemsPerPage = 12; // Adjust as needed
  
 // Calculate total pages
 const totalPages = Math.ceil(PETS_ALL.length / itemsPerPage);
 
 // Paginate the pets
 const paginatedPets = PETS_ALL.slice(
   (page - 1) * itemsPerPage, 
   page * itemsPerPage
 );
 

 if(paginatedPets?.length === 0){ redirect('/pets'); }
 
  return (
    <div className="px-4 lg:px-20 py-4">
      <Title
        title="Todos"
        subtitle="Todos nuestros cachorros"
        className="mb-2 "
      />
      <PetsGrid products={paginatedPets}/>
      <Pagination totalPages={totalPages} />
    </div>
  );
}