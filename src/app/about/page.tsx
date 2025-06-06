import PageHeader from "~/components/common/page-header";
import { TimeBasedGreeting } from "~/components/about/time-based-greeting";
import Link from "next/link";

export default async function About() {
  return (
    <div className="flex w-full flex-col gap-12">
      <PageHeader text={"About"} />
      <div className="flex w-full flex-col gap-6">
        <p>
          <TimeBasedGreeting />! I&#39;m Rumeet. I&#39;m a Senior Software
          Engineer at <strong>Schonfeld Strategic Advisors</strong>, where I
          leverage my expertise in <strong>Java</strong> to build sophisticated
          financial technology solutions. My goal is always to write code that
          is clean, scalable, and meaningful.
        </p>
        <p>
          My background includes a dual B.S. from the Rutgers University Honors College in
          Computer Science and Business Analytics, and I&#39;m currently
          expanding my skill set as a part-time Master&#39;s student in{" "}
          <strong>Machine Learning at Columbia University</strong>.
        </p>
        <p>
          Outside of work, I believe that exploring is the best way to grow.
          This holds true whether I&#39;m experimenting with web development in{" "}
          <strong>Next.js</strong>, pushing my limits with calisthenics, or
          learning from a history podcast. I also enjoy unwinding with a good
          fantasy novel or comedy podcast, and I&#39;m always planning my next
          trip to see more of the world.
        </p>
        <p>
          I&#39;m always open to new opportunities and challenges, so feel free
          to{" "}
          <strong>
            <Link
              href="/contact"
              className="text-primary underline-offset-4 hover:underline"
            >
              reach out
            </Link>{" "}
          </strong>
          if you want to connect!
        </p>
      </div>
    </div>
  );
}
