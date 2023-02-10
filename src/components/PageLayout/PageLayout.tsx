import { NextSeo } from "next-seo";

type PageLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <>
      <NextSeo title={title} />
      <main className="relative z-10 mt-16 h-[2000px] px-8">{children}</main>
    </>
  );
};

export default PageLayout;
