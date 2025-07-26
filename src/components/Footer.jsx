import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-1 px-2 bg-card relative border-t border-border -mt-4 pt-3 flex items-center">
      <p className="text-sm text-muted-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        &copy; {new Date().getFullYear()} MadhuSingu. All rights reserved.
      </p>
      <a
        href="#hero"
        className="ml-auto p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors relative"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
