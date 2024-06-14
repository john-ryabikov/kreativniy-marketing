import { Manrope } from "next/font/google";
import "@styles/globals.scss"
import Script from "next/script";

const manrope = Manrope({ 
  subsets: ["cyrillic", "latin"],
  preload: true,
  variable: "--manrope"
});

export const metadata = {
  title: "",
  description: "",
  keywords: "",
  robots: "",
  formatDirection: "",
  yandexVerification: ""
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru-RU"  prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
      <body className={manrope.variable}>{children}</body>
      <Script src="js/configs.js"/>
    </html>
  );
}