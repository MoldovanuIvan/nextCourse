import { FC } from "react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import "./globals.css";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Tennis rackets",
  description: "Tennis rackets store",
};

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        <div className={"container"}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
