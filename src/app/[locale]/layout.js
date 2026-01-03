import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ToastContainer } from "react-toastify";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabicOrKurdish = locale === "ar" || locale === "ku";

  return (
    <html 
      lang={locale} 
      dir={isArabicOrKurdish ? "rtl" : "ltr"}
      style={{ fontFamily: '"PingFang SC", "PingFang TC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei", sans-serif' }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSWH9QF');`,
          }}
        />
        <style>{`
          html {
            font-family: "PingFang SC", "PingFang TC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei", '${
              isArabicOrKurdish ? "Noto Kufi Arabic" : "Poppins"
            }', sans-serif !important;
          }
          body {
            font-family: "PingFang SC", "PingFang TC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei", '${
              isArabicOrKurdish ? "Noto Kufi Arabic" : "Poppins"
            }', sans-serif !important;
          }
          *, *::before, *::after {
            font-family: "PingFang SC", "PingFang TC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei", '${
              isArabicOrKurdish ? "Noto Kufi Arabic" : "Poppins"
            }', sans-serif !important;
          }
        `}</style>
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
