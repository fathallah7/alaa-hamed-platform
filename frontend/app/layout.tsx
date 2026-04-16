import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: {
    default: "أكاديمية الشيخ علاء حامد | رحلتك لبناء الشخصية المسلمة",
    template: "%s | أكاديمية علاء حامد",
  },
  description:
    "المنصة الرسمية لأكاديمية الشيخ علاء حامد، منهج تربوي شامل يجمع بين تزكية النفس، تدبر القرآن، وأصول العلم الشرعي من خلال 7 مسارات متخصصة.",
  keywords: [
    "علاء حامد",
    "أكاديمية تربوية",
    "بناء الشخصية المسلمة",
    "دورات شرعية",
    "تربية إسلامية",
    "تدبر القرآن",
    "تزكية النفس",
    "علم الشرعي",
    "منهج تربوي شامل",
  ],
  authors: [{ name: "Sheikh Alaa Hamed" }],
  // metadataBase: new URL(""), // NOTE: final URL will be added here
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "أكاديمية الشيخ علاء حامد",
    description: "منهج تربوي شامل يجمع بين تزكية النفس وأصول العلم الشرعي.",
    images: ["/logo.png"],
    type: "website",
    locale: "ar_EG",
  },
};

export const viewport: Viewport = {
  themeColor: "#5F7C84",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tajawal.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
