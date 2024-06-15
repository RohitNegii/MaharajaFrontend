import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { UserProvider } from "./context/context";

import Header from "./homePage/component/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          {" "}
          <Header />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
