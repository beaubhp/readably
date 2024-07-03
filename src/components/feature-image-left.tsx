import Image from "next/image";

export function FeatureWithImageLeft() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="relative flex-1">
        <Image
          src="/images/Learning-languages-bro-(1).png"
          alt="SaaS Dashboard"
          width={713}
          height={460}
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-left">
            Lorem ipsum dolor
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-lg text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore.
        </p>
      </div>
    </section>
  );
}
