import { ThemeToggle } from "~/components/theme/theme-toggle";

export default async function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold text-primary">Hello!</h1>
      <ThemeToggle />
    </>
  );
}
