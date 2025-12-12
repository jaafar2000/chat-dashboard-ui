import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Heyy Inbox",
  description: "Front-end screening assignment UI",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-app-bg text-gray-900 antialiased">{children}</body>
    </html>
  );
}
