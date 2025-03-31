import "./globals.css";
import GlobalProvider from "@/_util/constants/context";
export const metadata = {
  title: "titaja",
  description: "Trading solution",
  icons: {
    icon: "/img/icon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="bar bg-slate-100">
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
