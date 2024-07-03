import { ChevronDown } from "lucide-react";

export function SocialProof() {
  return (
    <section className="container flex flex-col items-center gap-10">
      <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
