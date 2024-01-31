import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

const inter = Inter({ subsets: ["latin"] });
Axios.defaults.withCredentials = true;
export const metadata: Metadata = {
  title: "Nxt-Post",
  description: "by R1NM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="tw-h-[100vh] tw-w-[100vw] tw-flex tw-justify-center">
        {children}
        </div>
      </body>
    </html>
  );
}
