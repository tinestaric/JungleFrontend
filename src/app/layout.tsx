import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conference Booth Game",
  description: "Lead capture game for conference booths",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
