import "./globals.css";

export const metadata = {
  title: "Mai Nails",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
