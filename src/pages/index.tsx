import { TitleLanding } from "@/components/Home";
import { PageLayout } from "@/components/PageLayout";
import { type NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <PageLayout>
      <TitleLanding />
    </PageLayout>
  );
};

export default HomePage;
