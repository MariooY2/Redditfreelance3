import "./globals.css";
import Navbar from "./_components/Nabar";

export const metadata = {
  title: "UnCooked",
  description:
    "Transform your digital habits with our innovative app. UnCooked helps you combat phone addiction, track offline time, and promote a healthier, balanced lifestyle through engaging social interactions and rewarding experiences. Join our community and start your journey towards digital wellness today.",
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
