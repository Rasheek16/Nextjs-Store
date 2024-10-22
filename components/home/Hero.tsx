import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foregound">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, rerum ex
          itaque architecto iusto repudiandae distinctio tempore magnam totam
          vel iste doloribus illo! Ipsa sunt rerum, explicabo minima ea ad.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href={"/products"}>Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
