import { EditUserForm } from "@/components/dashboard/ui/secctions/users/new/EditUserForm";

export default function UserEditPage({params}) {

  const {id} = params;

  return (
    <EditUserForm id={id}/>
  );
}