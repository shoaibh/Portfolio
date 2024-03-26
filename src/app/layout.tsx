import Footer from "@/components/footer";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StarBackground from "@/components/star-background";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shoaib Hamza | Frontend Developer",
  description: "Shoaib is a frontend developer with over 3 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}  relative pt-28 sm:pt-36 bg-gray-900 text-gray-50 text-opacity-90`}
      >
        <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#946263]"></div>
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#676394]"></div>

          <ActiveSectionContextProvider>
            <StarBackground />
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
