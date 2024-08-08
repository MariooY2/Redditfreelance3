import "./globals.css";
import Navbar from "./_components/Nabar";

export const metadata = {
  title: "UnCooked",
  description:
    "Beat screen addiction with friendly competition. Uncook your brain.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-fuchsia-900 overflow-x-hidden">
        <Navbar />
        <>{children}</>
      </body>
    </html>
  );
}
