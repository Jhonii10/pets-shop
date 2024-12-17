import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {

    const session = await auth();

    if(!(session?.user)) return redirect('/auth/login');

    const {token,id, ...rest} = session?.user;

    const user = {
        ...rest,
        rol: session.user.name === 'jhoni' ? 'administrador' : 'cliente',
        status : session?.user ? 'activo' : 'inactivo',
    }

  return (
    <div className="p-4">
      <Title
        title="Perfil"
      />
      <pre>
      {
        
        JSON.stringify(user,null,2)
        
      }</pre>
    </div>
  );
}