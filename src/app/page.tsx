import { ThemeToggle } from "~/components/theme/theme-toggle";

export default async function Home() {
  return (
    <div className={"flex w-full flex-col gap-4"}>
      <h1 className="text-5xl font-semibold text-primary">Rumeet Goradia</h1>
      <ThemeToggle />
      <div className={"h-[2000px]"} />
    </div>
  );
}
