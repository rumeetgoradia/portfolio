import { Carousel, FeaturedWorkGrid, TitleLanding } from "@/components/Home";
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
  await ssg.work.featured.fetch();

  // console.log('state', ssg.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60 * 60 * 24, // every 1 day
  };
};

const HomePage: NextPage = () => {
  const carouselImages = trpc.imageKit.carousel.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const featuredWork = trpc.work.featured.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <PageLayout>
      <TitleLanding />
      <Carousel {...carouselImages} />
      <FeaturedWorkGrid {...featuredWork} />
    </PageLayout>
  );
};

export default HomePage;
