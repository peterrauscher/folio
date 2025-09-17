import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ExperienceProps = {
  header: string; // Company, School, etc.
  title: string; // Role, Degree, etc.
  period: string;
  description?: string;
  chips?: string[]; // Technologies, highlights, etc.
  imageSrc?: string; // Avatar/logo path under /public
  imageAlt?: string;
  href?: string; // Optional link for header + image
};

export default function Experience({
  header,
  title,
  period,
  description,
  chips,
  imageSrc,
  imageAlt,
  href,
}: ExperienceProps) {
  return (
    <div className="relative ml-6 mb-4 last:mb-0 group">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            {href ? (
              <Link
                href={href}
                className="block no-underline text-current hover:opacity-90 transition-opacity"
                aria-label={`${header}`}
              >
                <div className="flex-shrink-0 h-12 w-12 bg-accent rounded-full flex items-center justify-center overflow-hidden border border-border">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={imageAlt || header}
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                    />
                  ) : null}
                </div>
              </Link>
            ) : (
              <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center overflow-hidden border border-border">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={imageAlt || header}
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                ) : null}
              </div>
            )}

            <div className="min-w-0">
              {href ? (
                <Link
                  href={href}
                  className="no-underline text-current hover:opacity-90 transition-opacity"
                >
                  <span className="text-sm sm:text-base font-semibold line-clamp-1">
                    {header}
                  </span>
                </Link>
              ) : (
                <span className="text-sm sm:text-base font-semibold line-clamp-1">
                  {header}
                </span>
              )}
              <h3 className="text-xs sm:text-sm font-normal text-muted-foreground mt-0.5 line-clamp-1">
                {title}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground flex-shrink-0 ml-4">
            <span className="whitespace-nowrap">{period}</span>
          </div>
        </div>

        {description && (
          <p className="text-sm sm:text-base text-muted-foreground opacity-0 max-h-0 translate-y-1 overflow-hidden transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:max-h-48 group-hover:translate-y-0">
            {description}
          </p>
        )}

        {chips && chips.length > 0 && (
          <div className="flex flex-wrap gap-1 opacity-0 max-h-0 translate-y-1 overflow-hidden transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:max-h-24 group-hover:translate-y-0 mt-1">
            {chips.map((c) => (
              <Badge key={c} variant="secondary" className="rounded-full">
                {c}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
