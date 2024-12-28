export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto max-w-screen-lg py-4">
      <main>{children}</main>
    </div>
  );
}
