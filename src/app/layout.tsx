import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dynamics Explorer",
  description: "Start your journey to the cloud!",
  openGraph: {
    title: "Dynamics Explorer",
    description: "Start your journey to the cloud!",
    images: [
      {
        url: "/landing/images/Dynamics explorer.png",
        width: 1200,
        height: 630,
        alt: "Dynamics Explorer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamics Explorer",
    description: "Start your journey to the cloud!",
    images: ["/landing/images/Dynamics explorer.png"],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
