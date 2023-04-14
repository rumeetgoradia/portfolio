import { PageLayout } from "@/components/PageLayout";
import { type NextPage } from "next";
import Link from "next/link";

const _404Page: NextPage = () => {
  return (
    <PageLayout title="404">
      <div className="w-full">
        <h1 className="subheader">There&apos;s nothing here :/</h1>
        <p>
          Let&apos;s{" "}
          <Link href="/" title="Home" className="inline-link">
            go back home
          </Link>{" "}
          just to be safe.
        </p>
      </div>
    </PageLayout>
  );
};

export default _404Page;
