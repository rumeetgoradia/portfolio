import { ImageCarousel } from "~/components/home/image-carousel";
import { getCarouselImagesWithMetadata } from "~/lib/carousel";

export default async function Home() {
  const images = await getCarouselImagesWithMetadata();

  return (
    <div className={"flex w-full flex-col gap-6"}>
      <div>
        <h1 className="text-5xl font-semibold text-primary">Rumeet Goradia</h1>
        <h2 className="text-2xl font-light opacity-75">
          Senior Software Engineer @{" "}
          <span className="font-semibold">Schonfeld</span>
        </h2>
      </div>
      <p className="text-xl font-light">
        Pursuing a career in fin-tech and a master&#39;s degree in{" "}
        <span className="font-semibold">machine learning</span> at Columbia
        University. Specializing in backend development with{" "}
        <span className="font-semibold">Java</span> and frontend development
        with <span className="font-semibold">Next.js</span>.
      </p>
      <ImageCarousel images={images} />
    </div>
  );
}
