import { Carousel, TitleLanding } from "@/components/Home";
import { PageLayout } from "@/components/PageLayout";
import { appRouter } from "@/server//trpc/router/_app";
import { createContextInner } from "@/server/trpc/context";
import { trpc } from "@/utils/trpc";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { type NextPage } from "next";

export const getStaticProps = async () => {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContextInner({}),
  });

  await ssg.imageKit.carousel.fetch();

  // console.log('state', ssg.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60 * 60 * 24 * 14, // every 2 weeks
  };
};
const HomePage: NextPage = () => {
  const carouselImages = trpc.imageKit.carousel.useQuery();

  return (
    <PageLayout>
      <div className="flex w-full flex-col items-start justify-start gap-8">
        <TitleLanding />
        <Carousel {...carouselImages} images={carouselImages.data} />
      </div>
    </PageLayout>
  );
};

export default HomePage;
