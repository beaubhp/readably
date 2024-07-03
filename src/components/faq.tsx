import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Faq</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg text-center">
        For any other questions, please feel free to contact us.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
        <AccordionItem value="item-0" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
