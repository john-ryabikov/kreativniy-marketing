import { Manrope } from "next/font/google";
import "@styles/globals.scss"
import Script from "next/script";

const manrope = Manrope({ 
  subsets: ["cyrillic", "latin"],
  preload: true,
  variable: "--manrope"
});

export const metadata = {
  title: "Креативный маркетинг | Продвижение Ваших товаров на OZON и Wildberries",
  description: "Программа для предпринимателей, которые не хотят тестировать новые каналы рекламы, а взять уже готовый рабочий вариант.",
  authors: [{ name: 'Just-Site.ru' }],
  keywords: "",
  robots: "noyaca",
  formatDirection: {
    telephone: false,
  },
  verification: {
    yandex: 'dedf19563558eede'
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="ru-RU"  prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
      <body className={manrope.variable}>{children}</body>
      <Script src="js/configs.js"/>
    </html>
  );
}