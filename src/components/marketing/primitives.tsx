import type { ReactNode } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const containerClassName = "max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10";

function getVideoMimeType(videoSrc: string) {
  return videoSrc.toLowerCase().endsWith(".webm") ? "video/webm" : "video/mp4";
}

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const sectionSpacing = "py-12 sm:py-16 lg:py-20";
export const sectionSpacingLg = "py-14 sm:py-20 lg:py-24";
export const pageSectionGap = "mb-8 sm:mb-12";

export const marketingEyebrowClassName =
  "mb-4 block text-sm font-medium uppercase tracking-[0.25em] text-primary sm:tracking-[0.45em]";
export const marketingTitleClassName =
  "font-serif text-3xl font-light leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl";
export const marketingBodyClassName =
  "text-sm font-light leading-relaxed text-muted-foreground sm:text-base md:text-lg";
export const marketingCardClassName =
  "rounded-2xl border border-stone/40 bg-background p-6 sm:p-8";

export function PageContainer({ children, className }: PageContainerProps) {
  return <div className={cn(containerClassName, className)}>{children}</div>;
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={cn(pageSectionGap, alignment, className)}>
      {eyebrow ? (
        <span className={marketingEyebrowClassName}>{eyebrow}</span>
      ) : null}
      <h2 className={marketingTitleClassName}>{title}</h2>
      {description ? (
        <p
          className={cn(
            marketingBodyClassName,
            "mt-4 max-w-3xl",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

interface PageHeroProps {
  videoSrc: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  secondaryDescription?: ReactNode;
  className?: string;
  contentClassName?: string;
  minHeightClassName?: string;
}

export function PageHero({
  videoSrc,
  eyebrow,
  title,
  description,
  secondaryDescription,
  className,
  contentClassName,
  minHeightClassName = "min-h-screen",
}: PageHeroProps) {
  const videoMimeType = getVideoMimeType(videoSrc);

  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden",
        minHeightClassName,
        className,
      )}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoSrc} type={videoMimeType} />
      </video>

      <div className="absolute inset-0 bg-background/45 sm:hidden" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/72 to-background/92 sm:hidden" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/82 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/86 via-transparent to-transparent" />

      <PageContainer className="relative z-10 w-full pt-28 pb-20 sm:pt-32 sm:pb-24">
        <motion.div
          className={cn("max-w-3xl space-y-5 sm:space-y-6", contentClassName)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {eyebrow ? (
            <span className={marketingEyebrowClassName}>{eyebrow}</span>
          ) : null}
          <h1 className="font-serif text-3xl font-light leading-[0.92] tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-[6rem]">
            {title}
          </h1>
          {description ? (
            <p className={cn(marketingBodyClassName, "max-w-2xl")}>
              {description}
            </p>
          ) : null}
          {secondaryDescription ? (
            <p
              className={cn(
                marketingBodyClassName,
                "max-w-2xl text-sm sm:text-base",
              )}
            >
              {secondaryDescription}
            </p>
          ) : null}
        </motion.div>
      </PageContainer>
    </section>
  );
}

interface PrimaryLinkButtonProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export function PrimaryLinkButton({
  to,
  children,
  className,
}: PrimaryLinkButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "h-auto rounded-sm px-6 py-4 text-[11px] uppercase tracking-[0.16em] sm:px-10 sm:py-5 sm:tracking-[0.24em]",
        className,
      )}
    >
      <Link to={to}>{children}</Link>
    </Button>
  );
}

interface InlineTextLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export function InlineTextLink({
  to,
  children,
  className,
}: InlineTextLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:text-primary sm:tracking-[0.18em]",
        className,
      )}
    >
      <span className="border-b border-foreground/30 pb-1 transition-colors hover:border-primary">
        {children}
      </span>
      <svg
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}

interface PageCtaProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actionLabel: string;
  actionTo: string;
  dark?: boolean;
  className?: string;
}

export function PageCta({
  eyebrow,
  title,
  description,
  actionLabel,
  actionTo,
  dark = true,
  className,
}: PageCtaProps) {
  return (
    <section
      className={cn(
        sectionSpacing,
        dark ? "bg-foreground text-background" : "bg-stone/20",
        className,
      )}
    >
      <PageContainer>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {eyebrow ? (
            <span className={marketingEyebrowClassName}>{eyebrow}</span>
          ) : null}
          <h2
            className={cn(
              marketingTitleClassName,
              dark ? "text-background" : "",
            )}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                marketingBodyClassName,
                "mx-auto mt-4 max-w-2xl",
                dark ? "text-background/70" : "",
              )}
            >
              {description}
            </p>
          ) : null}
          <PrimaryLinkButton to={actionTo} className="mt-8 sm:mt-10">
            {actionLabel}
          </PrimaryLinkButton>
        </motion.div>
      </PageContainer>
    </section>
  );
}
