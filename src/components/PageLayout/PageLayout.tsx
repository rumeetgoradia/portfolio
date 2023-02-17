import { NextSeo } from "next-seo";

type PageLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <>
      <NextSeo title={title} />
      <main className="relative z-10 mt-16 mb-8 px-8">{children}</main>
    </>
  );
};

export default PageLayout;
