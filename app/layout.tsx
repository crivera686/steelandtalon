import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel & Talon • Firearms Training & Apparel",
  description: "Steel & Talon provides professional firearms training and range-ready apparel in the Inland Empire, CA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind via CDN for simplicity */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
