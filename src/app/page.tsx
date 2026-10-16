
import prisma from "@/lib/db";

export default async function Home() {
  const data = await prisma.user.findMany();
  return (
  <><div className="text-red-500"> {JSON.stringify(data)} </div>

  </>
  );
}
