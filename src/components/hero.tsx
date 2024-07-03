import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-10 pt-20 sm:gap-14 md:flex-row pb-36">
      <div className="flex flex-1 flex-col items-center gap-8 md:items-start md:gap-10">
        <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
          <span className="text-sm text-secondary-foreground pr-2">
            Hear about our newest features!
          </span>
          <ArrowRight size={16} />
        </div>
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl sm:leading-tight md:text-left">
          Learn languages effortlessly.
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground md:text-left">
          Our mission is to democratize language learning by making quality education accessible to
          everyone.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
          >
            <Link href="#">Learn more</Link>
          </Button>
          <Button
            size="lg"
            asChild
            className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
          >
            <Link href="#">Get started</Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/Learning-languages-rafiki.png"
          alt="SaaS Dashboard"
          width={1000}
          height={698}
          priority
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
