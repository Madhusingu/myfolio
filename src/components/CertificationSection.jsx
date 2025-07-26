import {
  FileBadge2Icon,
  LinkIcon,
  CalendarIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// (Optional) Define animation styles via Tailwind or CSS-in-JS or inline styles
// For Tailwind utility: you can add animate-fadeIn if you use such a plugin or define custom animation in your CSS

const certifications = [
  {
    title: "React Developer Certification",
    issuer: "FreeCodeCamp",
    date: "June 2023",
    link: "https://www.freecodecamp.org/certification/madhu-react",
    description: "Completed comprehensive React training and projects.",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "March 2023",
    link: "https://www.freecodecamp.org/certification/madhu-js",
    description: "Mastered fundamental algorithms, data structures, and JS concepts.",
  },
  {
    title: "Tailwind CSS Certification",
    issuer: "Tailwind Labs",
    date: "January 2024",
    link: "https://tailwindcss.com/certification/madhu",
    description: "Proficient in Tailwind CSS for modern UI development.",
  },
];

export const CertificationSection = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-4 bg-secondary/30"
      aria-label="Certifications and Achievements Section"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center select-none">
          Certifications & <span className="text-primary">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View certificate: ${cert.title} issued by ${cert.issuer}, dated ${cert.date}`}
              className={cn(
                "bg-card rounded-lg p-6 shadow-md flex flex-col justify-between cursor-pointer",
                "transition-transform duration-300 ease-in-out",
                "hover:shadow-lg hover:scale-[1.03] hover:bg-primary/10",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "select-text",
                "motion-safe:animate-fadeIn"
              )}
              tabIndex={0}
            >
              <div>
                <div className="flex items-center space-x-2 text-primary mb-2">
                  <FileBadge2Icon className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                </div>
                <p className="text-muted-foreground mb-2">{cert.description}</p>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{cert.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <LinkIcon className="w-4 h-4" />
                  <span>{cert.issuer}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
