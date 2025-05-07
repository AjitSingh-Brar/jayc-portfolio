import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Jerry Brar",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GlowCapture>
          <Glow color="blue">
            <div className="w-full text-white lg:glow:text-glow/70 lg:glow:bg-blue-950">
              {children}
            </div>
          </Glow>
        </GlowCapture>
      </body>
    </html>
  );
}
