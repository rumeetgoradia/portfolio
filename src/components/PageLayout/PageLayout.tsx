import { NextSeo } from "next-seo";

type PageLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <>
      <NextSeo title={title} />
      <main
        className="relative z-10 flex min-h-[calc(100vh_-_118px_-_211px)] w-full flex-col items-start
      justify-start gap-12 pb-8 sm:min-h-[calc(100vh_-_78px_-_179px)] lg:min-h-[calc(100vh_-_105px)] lg:pt-16"
      >
        {/* footer height: 211px,179px,105px */}
        {title && (
          <h1 className="-mb-2 pt-1 text-4xl font-bold leading-none">
            {title}
          </h1>
        )}
        {children}
      </main>
    </>
  );
};

export default PageLayout;
