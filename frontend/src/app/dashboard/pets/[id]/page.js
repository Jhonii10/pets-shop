import { PetsForm } from "../ui/PetsForm";

export default function PetEditPage({params}) {

  const {id} = params;

  return (
    <PetsForm id={id} />
  );
}