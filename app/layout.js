import "./globals.css";
import Navbar from "./_components/Nabar";

export const metadata = {
  title: "UnCooked",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-purple-600">
        <Navbar />
        <>{children}</>
      </body>
    </html>
  );
}
