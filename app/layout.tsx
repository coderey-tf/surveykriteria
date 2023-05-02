import Navbar from "./components/Navbar/page";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Survey Faktor Studi S2 di Luar Negeri",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} container mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
