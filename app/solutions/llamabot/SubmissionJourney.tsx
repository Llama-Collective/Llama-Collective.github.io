"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type JourneyItem = {
  title: string;
  detail: string;
  src: string;
};

type SubmissionJourneyProps = {
  items: readonly JourneyItem[];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function SubmissionJourney({ items }: SubmissionJourneyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const checklistRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const updateChecklistFades = () => {
    const list = checklistRef.current;
    if (!list) return;
    const maxScroll = list.scrollHeight - list.clientHeight;
    setShowTopFade(list.scrollTop > 2);
    setShowBottomFade(list.scrollTop < maxScroll - 2);
  };

  useEffect(() => {
    const updateFromScroll = () => {
      const track = trackRef.current;
      if (!track || items.length === 0) return;

      const stickyOffset = 112;
      const rect = track.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visibleTrack = viewportHeight - stickyOffset;
      const distance = Math.max(track.offsetHeight - visibleTrack, 1);
      const progress = clamp((stickyOffset - rect.top) / distance, 0, 1);
      const nextIndex = clamp(
        Math.floor(progress * items.length),
        0,
        items.length - 1,
      );

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);

    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [items.length]);

  useEffect(() => {
    const list = checklistRef.current;
    const activeButton = itemRefs.current[activeIndex];
    if (!list || !activeButton) return;

    const centerTarget =
      activeButton.offsetTop +
      activeButton.offsetHeight / 2 -
      list.clientHeight / 2;
    const maxScroll = Math.max(list.scrollHeight - list.clientHeight, 0);
    list.scrollTo({
      top: clamp(centerTarget, 0, maxScroll),
      behavior: "smooth",
    });

    window.setTimeout(updateChecklistFades, 120);
  }, [activeIndex]);

  useEffect(() => {
    updateChecklistFades();
    window.addEventListener("resize", updateChecklistFades);
    return () => window.removeEventListener("resize", updateChecklistFades);
  }, []);

  const activeItem = items[activeIndex];
  const trackHeightVh = Math.max(220, items.length * 38);

  return (
    <section className="relative left-1/2 right-1/2 mt-14 w-screen -translate-x-1/2 bg-[#2b2d31] py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div ref={trackRef} className="relative" style={{ minHeight: `${trackHeightVh}vh` }}>
          <div className="sticky top-6 sm:top-8 lg:top-10">
            <div className="p-1 sm:p-2">
              <h2 className="text-2xl font-semibold tracking-tight text-[#f2f3f5] sm:text-3xl">
                Submitting Designs with Llamabot
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#b5bac1]">
                From initial submission to published archive entry, Llamabot
                streamlines each step of the submissions process.
              </p>

              <div className="mt-6 grid items-start gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-2xl border border-[#3f4147] bg-[#313338] p-3 sm:p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#b5bac1]">
                    Checklist
                  </p>
                  <div className="relative mt-3">
                    <div
                      ref={checklistRef}
                      onScroll={updateChecklistFades}
                      className="submission-checklist-scroll h-[360px] overflow-y-auto pr-1 sm:h-[420px] lg:h-[470px]"
                    >
                      <div className="space-y-2">
                        {items.map((item, index) => {
                          const isActive = index === activeIndex;
                          const isComplete = index < activeIndex;

                          return (
                            <button
                              key={item.title}
                              ref={(node) => {
                                itemRefs.current[index] = node;
                              }}
                              type="button"
                              onClick={() => setActiveIndex(index)}
                              className={`w-full rounded-xl border px-3 py-3 text-left transition-colors ${
                                isActive
                                  ? "border-[#5865f2] bg-[#1f2335]"
                                  : "border-[#3f4147] bg-[#2b2d31] hover:bg-[#36393f]"
                              }`}
                            >
                              <div className="flex items-start gap-2.5">
                                <span
                                  className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold ${
                                    isComplete || isActive
                                      ? "bg-[#5865f2] text-white"
                                      : "bg-[#3f4147] text-[#b5bac1]"
                                  }`}
                                >
                                  {isComplete ? "✓" : index + 1}
                                </span>
                                <div>
                                  <div
                                    className={`text-sm font-semibold ${
                                      isActive ? "text-[#f2f3f5]" : "text-[#dbdee1]"
                                    }`}
                                  >
                                    {item.title}
                                  </div>
                                  <p className="mt-1 text-xs leading-5 text-[#b5bac1]">{item.detail}</p>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {showTopFade ? (
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#313338] to-transparent" />
                    ) : null}
                    {showBottomFade ? (
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#313338] to-transparent" />
                    ) : null}
                  </div>
                </div>

                <article className="overflow-hidden rounded-2xl border border-[#3f4147] bg-[#313338]">
                  <div className="flex items-center gap-2 border-b border-[#3f4147] px-4 py-3">
                    <span className="rounded-full bg-[#5865f2] px-2 py-0.5 text-[11px] font-semibold text-white">
                      Step {activeIndex + 1}
                    </span>
                    <h3 className="text-sm font-semibold text-[#f2f3f5]">{activeItem.title}</h3>
                  </div>
                  <div className="relative aspect-[16/10] bg-[#1e1f22]">
                    <Image
                      src={activeItem.src}
                      alt={activeItem.title}
                      fill
                      sizes="(min-width: 1024px) 700px, 100vw"
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                  <p className="px-4 py-3 text-sm leading-6 text-[#dbdee1]">{activeItem.detail}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
