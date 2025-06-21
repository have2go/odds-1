import "./globals.css";
import PageTransitionProvider from "@/app/components/PageTransitionProvider";

export const metadata = {
  title: "ODDS | Orbital Debris Disposal System",
  description: "ODDS is a space station designed for collecting and disposing of space debris to make space safer for all.",
  keywords: ["space debris", "orbital cleanup", "space station", "sustainability", "space environment"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Предзагрузка критических шрифтов */}
        <link 
          rel="preload" 
          href="/fonts/font/Magistral-Medium.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/fonts/San Francisco Pro Display/SF-Pro-Display-Regular.otf" 
          as="font" 
          type="font/opentype" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/fonts/San Francisco Pro Display/SF-Pro-Display-Light.otf" 
          as="font" 
          type="font/opentype" 
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-black text-white antialiased">
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
