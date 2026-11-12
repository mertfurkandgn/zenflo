import { AppHeader } from "@/components/app-header";

export default function RestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <>
   <AppHeader/>
   <main>{children}</main></>
  );
}
