import { ImageCarousel } from "~/components/home/image-carousel";
import { getCarouselImagesWithMetadata } from "~/lib/carousel";
import Headshot from "public/headshot.jpeg";
import Image from "next/image";

export default async function Home() {
  const images = await getCarouselImagesWithMetadata();

  return (
    <div className={"flex w-full flex-col gap-12"}>
      <div className={"flex justify-between gap-8"}>
        <div className={"flex w-full flex-col gap-8"}>
          <div>
            <h1 className="text-5xl font-semibold text-primary">
              Rumeet Goradia
            </h1>
            <div className="mt-1">
              <h2 className="text-xl font-light opacity-75">
                Senior Software Engineer @{" "}
                <span className="font-semibold">Schonfeld</span>
              </h2>
              <h2 className="text-xl font-light opacity-75">
                MS Machine Learning @{" "}
                <span className="font-semibold">Columbia</span>
              </h2>
            </div>
          </div>
          <p className="text-lg font-light">
            Pursuing a career in fin-tech. Specializing in backend development with{" "}
            <span className="font-semibold">Java</span> and frontend development
            with <span className="font-semibold">Next.js</span>.
          </p>
        </div>
        <div className="relative hidden h-[80px] w-[80px] flex-none overflow-hidden rounded-full opacity-90 transition-opacity duration-300 hover:opacity-100 md:block md:h-[216px] md:w-[216px] md:rounded-sm">
          <Image
            src={Headshot}
            alt="Rumeet Goradia Headshot"
            fill
            priority
            sizes="(max-width: 768px) 30vw, 20vw"
            placeholder="blur"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <ImageCarousel images={images} />
    </div>
  );
}
