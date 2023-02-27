import { NextSeo } from "next-seo";

type PageLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <>
      <NextSeo title={title} />
      <main className="relative z-10 min-h-[calc(100vh_-_99px)] px-8 pb-8 pt-16">
        {/* footer height: 97px */}
        {children}
      </main>
    </>
  );
};

export default PageLayout;
