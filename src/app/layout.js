import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./homePage/component/footer";

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
      <head>
        <title>Maharaja</title>
      </head>
      <UserProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6884.339720744794!2d79.18095344007718!3d30.37453419664389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909cdeb1c3c1461%3A0x56296a53dd7ae7ff!2sThalabair%2C%20Uttarakhand%20246473!5e0!3m2!1sen!2sin!4v1687497605382!5m2!1sen!2sin"
              // width="100vw"
              height="450"
              //   style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map-iframe"
            ></iframe>
          </div>
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
