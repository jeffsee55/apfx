"use client";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import Markdown from "react-markdown";
import { Button } from "./ui/button";

const STORY_QUERY =
  "(min-width: 901px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)";

export function Slideshow({
  items,
}: {
  items: { title: string; description: string; image: string }[];
}) {
  const id = useId();
  const wrapper = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [storyMode, setStoryMode] = useState(false);
  const sections = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const element = wrapper.current;
    if (!element) return;
    const titles = Array.from(
      element.querySelectorAll<HTMLElement>(".slide-title-inner"),
    );
    const descriptions = Array.from(
      element.querySelectorAll<HTMLElement>(".slide-description-inner"),
    );
    function measure() {
      element!.style.setProperty(
        "--service-title-height",
        `${Math.ceil(Math.max(0, ...titles.map((node) => node.getBoundingClientRect().height)))}px`,
      );
      element!.style.setProperty(
        "--service-description-height",
        `${Math.ceil(Math.max(0, ...descriptions.map((node) => node.getBoundingClientRect().height)))}px`,
      );
    }
    measure();
    const observer = new ResizeObserver(measure);
    [...titles, ...descriptions].forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    let frame = 0;
    const media = window.matchMedia(STORY_QUERY);
    function update() {
      const element = wrapper.current;
      if (!element) return;
      setStoryMode(media.matches);
      if (media.matches) {
        const rect = element.getBoundingClientRect();
        const distance = Math.max(1, rect.height - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / distance));
        const position = Math.min(
          items.length - 1,
          Math.max(0, progress * items.length - 0.5),
        );
        const base = Math.floor(position);
        const fraction = Math.min(
          1,
          Math.max(0, (position - base - 0.25) / 0.5),
        );
        const blend = fraction * fraction * (3 - 2 * fraction);
        sections.current.forEach((section, i) => {
          const opacity = i === base ? 1 - blend : i === base + 1 ? blend : 0;
          section?.style.setProperty("--scene-opacity", String(opacity));
          const drift = Math.min(
            1,
            Math.max(-1, progress * items.length - 0.5 - i),
          );
          section?.style.setProperty("--scene-offset", `${-drift * 52}px`);
          section?.style.setProperty("--scene-parallax", `${drift * 90}px`);
          section?.style.setProperty(
            "--scene-zoom",
            String(1.08 - (drift + 1) * 0.015),
          );
        });
        setIndex(blend > 0.5 ? Math.min(base + 1, items.length - 1) : base);
      } else {
        let current = 0;
        sections.current.forEach((section, position) => {
          if (
            section &&
            section.getBoundingClientRect().top <= window.innerHeight * 0.4
          )
            current = position;
        });
        setIndex(current);
      }
    }
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    media.addEventListener("change", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      media.removeEventListener("change", onScroll);
    };
  }, [items.length]);

  function goTo(index: number) {
    const section = sections.current[index];
    if (!section) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const element = wrapper.current;
    const story = window.matchMedia(STORY_QUERY).matches && element;
    const progress =
      index === 0
        ? 0
        : index === items.length - 1
          ? 1
          : (index + 0.5) / items.length;
    const top = story
      ? window.scrollY +
        element.getBoundingClientRect().top +
        progress * (element.getBoundingClientRect().height - window.innerHeight)
      : window.scrollY + section.getBoundingClientRect().top;
    if (!story) section.focus({ preventScroll: true });
    window.scrollTo({
      top,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  return (
    <div
      ref={wrapper}
      className="services-wrapper"
      style={{ "--service-count": items.length } as React.CSSProperties}
      aria-label="Our services"
      role="region"
    >
      <div className="service-stage">
        {items.map((slide, position) => (
          <section
            key={slide.title}
            ref={(node) => {
              sections.current[position] = node;
            }}
            tabIndex={-1}
            aria-labelledby={`${id}-${position}`}
            aria-hidden={storyMode && index !== position ? true : undefined}
            inert={storyMode && index !== position}
            className="slideshow"
          >
            <div
              className="service-scene-image"
              aria-hidden="true"
              style={{
                backgroundImage: `linear-gradient(90deg,rgba(5,8,14,.9),rgba(5,8,14,.48)),url("${slide.image}")`,
              }}
            />
            <div className="container">
              <div className="slide-content">
                <p className="eyebrow">Our services</p>
                <h2 id={`${id}-${position}`}>
                  <span className="slide-title-inner">{slide.title}</span>
                </h2>
                <div className="prose-copy">
                  <div className="slide-description-inner">
                    <Markdown>{slide.description}</Markdown>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="service-controls-rail">
        <div className="service-controls-position container">
          <div className="slide-controls">
            <div className="slide-dots">
              {items.map((item, target) => (
                <button
                  key={item.title}
                  aria-label={`Go to ${item.title}`}
                  aria-current={target === index ? "step" : undefined}
                  onClick={() => goTo(target)}
                  className={target === index ? "active" : ""}
                />
              ))}
            </div>
            <span className="slide-count">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")}
            </span>
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous service"
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
            >
              <ArrowUp />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next service"
              disabled={index === items.length - 1}
              onClick={() => goTo(index + 1)}
            >
              <ArrowDown />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
