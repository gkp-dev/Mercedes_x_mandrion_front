import { collection } from "@/lib/collection";
import { notFound } from "next/navigation";
import VehiclePage from "@/components/vehicle/VehiclePage";

export function generateStaticParams() {
  return collection.map((car) => ({ id: car.id }));
}

// Next.js 15 : params est une Promise dans les Server Components
export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<React.ReactElement> {
  const { id } = await params;
  const car = collection.find((c) => c.id === id);
  if (!car) notFound();
  return <VehiclePage car={car} />;
}
