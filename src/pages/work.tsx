import { PageLayout } from "@/components/PageLayout";
import { WorkGrid } from "@/components/Work";
import { createContextInner } from "@/server/trpc/context";
import { appRouter } from "@/server/trpc/router/_app";
import { trpc } from "@/utils/trpc";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { type NextPage } from "next";

export const getStaticProps = async () => {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContextInner({}),
  });

  await ssg.work.all.fetch();

  // console.log('state', ssg.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60, // every 1 minute
  };
};

const WorkPage: NextPage = () => {
  const work = trpc.work.all.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <PageLayout title="Work">
      <div className="w-full">
        <WorkGrid {...work} />
      </div>
    </PageLayout>
  );
};

export default WorkPage;
