import { ViewOrderId } from "@/components";

export default function OrderIDPage({params}) {

    const { id } = params;

  return (
    <ViewOrderId id={id}/>
  );
}