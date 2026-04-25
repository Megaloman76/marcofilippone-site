import { client } from "@/lib/sanity";
import Hero from "@/components/sections/Hero";

async function getData() {
  return await client.fetch(`*[_type == "home"][0]`);
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Hero data={data} />
    </main>
  );
}