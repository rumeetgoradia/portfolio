import { Separator } from "~/components/ui/separator";
import { Sidebar } from "~/components/nav/sidebar";
import { Header } from "~/components/nav/header";

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto flex h-full min-h-[100vh] w-full max-w-screen-md flex-col space-y-6 px-6 pb-4">
      <div className="flex flex-grow flex-row md:space-x-12">
        <div id="sidebar" className="max-md:hidden">
          <Sidebar />
        </div>
        <div className="flex flex-grow flex-col max-md:space-y-8 pt-8">
          <div id="navbar" className="md:hidden">
            <Header />
          </div>
          <main>{children}</main>
        </div>
      </div>
      <Separator orientation="horizontal" />
      <footer id="footer" className="w-full flex-grow-0 bg-primary">
        FOOTER
      </footer>
    </div>
  );
}
