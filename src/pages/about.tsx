import { CurrentlyDisplay } from "@/components/About";
import { TopTracks } from "@/components/About/TopTracks";
import { PageLayout } from "@/components/PageLayout";
import { createContextInner } from "@/server/trpc/context";
import { appRouter } from "@/server/trpc/router/_app";
import { trpc } from "@/utils/trpc";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { type GetStaticProps, type NextPage } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const ssg = createServerSideHelpers({
    router: appRouter,
    ctx: await createContextInner({}),
  });

  await ssg.notion.currentlyReading.fetch();
  await ssg.notion.currentlyWatching.fetch();
  await ssg.spotify.topTracks.fetch();

  // console.log('state', ssg.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60, // every 1 minute
  };
};

const AboutPage: NextPage = () => {
  const currentlyReading = trpc.notion.currentlyReading.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const currentlyWatching = trpc.notion.currentlyWatching.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const topTracks = trpc.spotify.topTracks.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <PageLayout title="About">
      <div className="align-start flex w-full flex-col justify-start gap-4">
        <p>
          Hey! I&apos;m Rumeet Goradia. I&apos;m currently a Software Engineer
          at Schonfeld Strategic Advisors in New York City. I mostly work on
          back-end microservices that serve as the backbone for much of the
          firm&apos;s operations, using Java, PostgreSQL, Kafka, and many other
          tools. On the other hand, most of my personal projects deal with
          front-end technologies, most often Next.js.
        </p>
        <p>
          Back in 2021, I graduated from the Rutgers University Honors College
          in New Brunswick, New Jersey. I double majored in Computer Science and
          Business Analytics & Information Technology. I served as the founding
          Director of Recruitment for the Road to Silicon V/Alley Program and
          was also involved in various other organizations on campus, including
          Alpha Kappa Psi, TEDxRutgers, and Road to Wall Street.
        </p>
        <p>
          I enjoy playing competitive games like League of Legends or Call of
          Duty with my friends, but I&apos;m also currently working on building
          my own gaming PC to explore more open-world RPGs. I also got back into
          reading over the pandemic and have been really enjoying modern novels
          and biographies. If I&apos;m not reading or playing video games, you
          can usually find me taking a walk, hanging out with my friends, or
          practicing piano.
        </p>
        <p>
          I love to collaborate with others and just meet new people. Please
          feel free to{" "}
          <Link
            href="/contact"
            title="Contact"
            className="font-semibold text-primary hover:text-primary/80"
          >
            reach out
          </Link>{" "}
          if you&apos;d like to get in touch!
        </p>
      </div>
      <div className="w-full">
        <h2 className="subheader">Currently...</h2>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 ">
          <CurrentlyDisplay {...currentlyReading} category="Reading" />
          <CurrentlyDisplay {...currentlyWatching} category="Watching" />
        </div>
      </div>
      <div className="w-full">
        <h2 className="subheader">Top Tracks</h2>
        <p className="mb-0">
          The songs I&apos;ve listened to the most over the last few weeks,
          updated daily via Spotify.
        </p>
        <TopTracks {...topTracks} />
      </div>
    </PageLayout>
  );
};

export default AboutPage;
