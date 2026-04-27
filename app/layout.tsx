import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Learning for Your Workforce",
  description:
    "Empower your enterprise with Accredian's industry-leading corporate learning programs. Tailored training, measurable ROI, and 500+ enterprise partnerships.",
  keywords:
    "enterprise learning, corporate training, upskilling, Accredian, L&D, workforce development",
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Learning for Your Workforce",
    description:
      "Empower your enterprise with tailored corporate learning programs.",
    type: "website",
    url: "https://enterprise.accredian.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
