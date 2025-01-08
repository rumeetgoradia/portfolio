import { Separator } from "~/components/ui/separator";
import { Sidebar } from "~/components/nav/sidebar";
import { Header } from "~/components/nav/header";
import { Footer } from "~/components/footer/footer";

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto flex h-full min-h-[100vh] w-full max-w-screen-lg flex-col space-y-6 px-6 pb-8">
      <div className="flex flex-grow flex-row lg:space-x-12">
        <div id="sidebar" className="max-lg:hidden">
          <Sidebar />
        </div>
        <div className="flex flex-grow flex-col pt-8 max-lg:space-y-8 lg:pt-16">
          <div id="navbar" className="lg:hidden">
            <Header />
          </div>
          <main>{children}</main>
        </div>
      </div>
      <Separator orientation="horizontal" />
      <div id="footer" className="w-full flex-grow-0">
        <Footer />
      </div>
    </div>
  );
}
