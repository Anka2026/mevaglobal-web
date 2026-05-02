"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import type { LucideIcon } from "lucide-react";
import { Building2, ClipboardCheck, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export type HomeTrustStatItem = {
  target: number;
  suffix: "" | "+";
  label: string;
};

const STAT_ICONS: LucideIcon[] = [ClipboardCheck, Building2, Layers];

const COUNT_DURATION_MS = 1500;

/** Smooth deceleration — subtle, not mechanical */
function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useSectionEnteredOnce(sectionRef: RefObject<HTMLElement | null>): boolean {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || entered) return;

    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      setEntered(true);
      io.disconnect();
    }, { threshold: 0.32 });

    io.observe(el);
    return () => io.disconnect();
  }, [entered, sectionRef]);

  return entered;
}

function formatStat(target: number, suffix: string): string {
  return `${target}${suffix}`;
}

export function HomeTrustStatsBand({ items }: { items: readonly HomeTrustStatItem[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  const reducedMotion = usePrefersReducedMotion();
  const hasEnteredView = useSectionEnteredOnce(sectionRef);

  const targetsKey = items.map((i) => `${i.target}${i.suffix}`).join("|");

  const [counts, setCounts] = useState<number[]>(() => items.map(() => 0));

  useLayoutEffect(() => {
    if (reducedMotion) {
      setCounts(itemsRef.current.map((i) => i.target));
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    if (!hasEnteredView) return;

    let start: number | null = null;
    let rafId = 0;
    const list = itemsRef.current;

    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / COUNT_DURATION_MS);
      const eased = easeOutCubic(t);
      setCounts(list.map((item) => Math.round(item.target * eased)));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasEnteredView, reducedMotion, targetsKey]);

  return (
    <section ref={sectionRef} className="border-b border-white/10 bg-[#005691]">
      <Container className="py-7 sm:py-8">
        <ul className="grid grid-cols-1 sm:grid-cols-3">
          {items.map((item, index) => {
            const Icon = STAT_ICONS[index]!;
            const finalDisplay = formatStat(item.target, item.suffix);
            const liveDisplay = formatStat(counts[index] ?? 0, item.suffix);
            return (
              <motion.li
                key={item.label}
                aria-label={`${finalDisplay} ${item.label}`}
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                animate={
                  reducedMotion || hasEnteredView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{
                  duration: 0.44,
                  delay: reducedMotion ? 0 : index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "flex min-h-0 flex-row items-center gap-4 px-5 py-4 sm:gap-5 sm:px-7 sm:py-5",
                  "border-b border-white/10 last:border-b-0 sm:border-b-0 sm:border-r sm:border-white/10 sm:last:border-r-0",
                )}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/14 bg-white/[0.07] sm:h-12 sm:w-12"
                  aria-hidden
                >
                  <Icon className="h-[1.35rem] w-[1.35rem] text-white/90 sm:h-6 sm:w-6" strokeWidth={1.65} />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-[1.625rem] font-semibold leading-none text-white sm:text-[2rem] lg:text-[2.125rem]">
                    <span className="inline-grid tabular-nums tracking-tight">
                      <span className="col-start-1 row-start-1 invisible select-none" aria-hidden>
                        {finalDisplay}
                      </span>
                      <span className="col-start-1 row-start-1">{liveDisplay}</span>
                    </span>
                  </p>
                  <p className="mt-2.5 max-w-[22rem] text-[11px] font-semibold leading-snug text-white/80 sm:text-[13px] sm:leading-snug">
                    {item.label}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
