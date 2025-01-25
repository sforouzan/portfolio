import Hero from "@/components/Hero/Hero";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const items = [
  {
    'link': '/',
    'image': 'https://placehold.co/600x400.svg'
  },
  {
    'link': '/',
    'image': 'https://placehold.co/600x400.svg'
  },
  {
    'link': '/',
    'image': 'https://placehold.co/600x400.svg'
  },
  {
    'link': '/',
    'image': 'https://placehold.co/600x400.svg'
  },
]

export default function Home() {
  return (
    <main className="p-10">
      <Hero />
      <section className="pt-[110px] px-[30px] pb-[86px]">
        <h2 className="uppercase text-heading">Featured Work</h2>
        <Gallery items={items} />
      </section>
      <div className="bg-custom-black text-white px-10">
        <section className="py-20">
          <p className="text-center max-w-[1300px] m-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quae laborum possimus ipsum quibusdam, in blanditiis veritatis voluptatem earum. Aliquid asperiores odio, vitae quidem sapiente similique, nobis quos alias minima hic quis quaerat, nulla repellendus tempore repellat consequatur pariatur aut? Id ex necessitatibus voluptatum culpa voluptates incidunt dignissimos, porro perferendis eligendi obcaecati. Architecto, id? Perspiciatis, culpa qui? Laboriosam pariatur hic dolores repellendus maiores impedit excepturi maxime explicabo iure at quasi quis libero eaque consectetur, accusamus praesentium similique tenetur. Aut ipsum sunt doloribus a eveniet tempore optio necessitatibus ipsam molestias vitae placeat doloremque minus earum excepturi repellendus in repudiandae, sed odit!
          </p>
        </section>
        <Footer theme={'dark'} />
      </div>
    </main>
  );
}
