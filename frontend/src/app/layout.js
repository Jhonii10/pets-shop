import { quicksand } from "@/font";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Pets shop",
  description: "Tienda de caninos",
};

export default function RootLayout({ children, session}) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased`}
      >
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
