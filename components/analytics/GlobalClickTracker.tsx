"use client";

import { useEffect } from "react";

// Minimal type hints for globals if present
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    posthog?: { capture: (event: string, props?: Record<string, any>) => void };
  }
}

function getClickableTarget(el: HTMLElement | null): HTMLElement | null {
  if (!el) return null;
  return (
    el.closest(
      'a, button, [role="button"], input[type="button"], input[type="submit"], [data-track-click]'
    ) as HTMLElement | null
  );
}

function textOf(el: HTMLElement | null) {
  if (!el) return "";
  // Avoid reading sensitive input values; only innerText of clickable element
  const t = (el.innerText || "").trim();
  return t.length > 120 ? t.slice(0, 117) + "..." : t;
}

function classesOf(el: HTMLElement | null) {
  if (!el) return "";
  return Array.from(el.classList || []).slice(0, 10).join(" ");
}

export default function GlobalClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const clickable = getClickableTarget(target);
      if (!clickable) return;

      const isAnchor = clickable.tagName.toLowerCase() === "a";
      const href = isAnchor ? (clickable as HTMLAnchorElement).href : undefined;
      const data = {
        path: window.location.pathname,
        text: textOf(clickable),
        id: clickable.id || undefined,
        classes: classesOf(clickable),
        tag: clickable.tagName.toLowerCase(),
        href,
      } as const;

      // Google (GA4 / Ads via gtag)
      if (typeof window.gtag === "function") {
        window.gtag("event", "global_click", {
          event_category: "engagement",
          event_label: data.text || data.tag,
          element_id: data.id,
          element_classes: data.classes,
          element_tag: data.tag,
          href: data.href,
          page_path: data.path,
          non_interaction: false,
        });
      }

      // Meta Pixel
      if (typeof window.fbq === "function") {
        window.fbq("trackCustom", "GlobalClick", data as any);
      }

      // PostHog
      if (window.posthog?.capture) {
        window.posthog.capture("global_click", data as any);
      }
    };

    window.addEventListener("click", handler, { capture: true });
    return () => window.removeEventListener("click", handler, { capture: true } as any);
  }, []);

  return null;
}

