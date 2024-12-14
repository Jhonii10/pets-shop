import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function  CheckoutPage() {

    const session = await auth();

    if(!session){
        redirect('/auth/login')
    }

  return (
    <div>
      <h1>checkout</h1>
    </div>
  );
}