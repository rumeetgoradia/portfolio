import { SITE_NAME } from "@/constants/seo";
import Image from "next/image";
import LandingImage from "../../../../public/images/home/rumeet_goradia.jpeg";

const TitleLanding: React.FC = ({}) => {
  return (
    <div className="flex w-full flex-col-reverse items-start justify-between gap-6 md:flex-row md:gap-16">
      <div className="flex-initial">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          {SITE_NAME}
        </h1>
        <h2 className="mb-4 text-xl font-light md:mb-6 md:text-2xl">
          Software Engineer @ <span className="font-medium">Schonfeld</span>
        </h2>
        <p className="md:text-lg">
          Pursuing a career in fin-tech. Specializing in backend development
          with Java and front-end development with Next.js. Exploring blockchain
          and smart contract technologies.
        </p>
      </div>
      <div className="relative hidden h-[80px] w-[80px] flex-none overflow-hidden rounded-full opacity-90 transition-opacity duration-300 hover:opacity-100 md:block md:h-[216px] md:w-[216px] md:rounded-sm">
        <Image
          src={LandingImage}
          alt={SITE_NAME}
          placeholder="blur"
          className=" object-cover object-top transition-transform duration-300 hover:scale-105"
          fill
          sizes="30vw"
          priority
        />
      </div>
    </div>
  );
};

export default TitleLanding;
