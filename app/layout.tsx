// app/layout.tsx

export const metadata = {
  title: "Personal Finance Visualizer",
  description: "Track and visualize your expenses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
