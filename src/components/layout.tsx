import { Separator } from "~/components/ui/separator";

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto flex h-full min-h-[100vh] w-full max-w-screen-lg flex-col space-y-8">
      <div className="flex flex-grow flex-row space-x-8 pb-8 pt-16">
        {/*TODO sidebar */}
        <div id="sidebar" className="max-lg:hidden">
          SIDEBAR
        </div>
        <div className="flex flex-grow flex-col max-lg:space-y-8">
          <div id="navbar" className="lg:hidden">
            NAVBAR
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
