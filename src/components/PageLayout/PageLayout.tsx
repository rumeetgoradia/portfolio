import { NextSeo } from "next-seo";

type PageLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <>
      <NextSeo title={title} />
      <main className="container relative z-10 py-4">{children}</main>
    </>
  );
};

export default PageLayout;
