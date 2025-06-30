import FooterSection from "@/components/layouts/footer";
import "../styles/globals.css";

export const metadata = {
  title: "Arqai Studio - Bespoke AI and Art Studio",
  description:
    "Arqai Studio - Bespoke AI and Art Studio for Unique and Luxury Artwork Creation and Custom Digital Art Solutions for Home Decor and Office Decor Needs by Arqai Studio.",
  keywords:
    "Arqai Studio, AI art studio, bespoke artwork, luxury art, custom art, digital art, AI-generated art, unique artwork, personalized art, modern art, contemporary art, art for home decor, art for office decor, bespoke digital art",
  openGraph: {
    title: "Arqai - Bespoke AI and Art Studio",
    description: "Custom digital and luxury AI-generated artwork by Arqai Studio.",
    type: "website",
    locale: "en_US",
    url: "https://www.arqai.studio",
    siteName: "Arqai Studio",
    images: [
      {
        url: "/logo.png",
        width: 305,
        height: 208,
        alt: "Arqai Studio - Bespoke AI Art",
      },
    ]  },
  alternates: {
    canonical: "https://www.arqai.studio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-tamil">
      <body>
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
