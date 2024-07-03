import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-10">
      <h2 className="font-heading text-3xl font-semibold sm:text-4xl max-w-xl sm:leading-tight text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <p className="text-lg text-muted-foreground max-w-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore.
      </p>
      <Button
        size="lg"
        asChild
        variant="default"
        className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
      >
        <Link href="#">Get Started</Link>
      </Button>
    </section>
  );
}
