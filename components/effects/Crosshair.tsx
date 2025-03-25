"use client";

import { CrosshairProps, MousePosition } from "@/interfaces/crosshair";
import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

const getMousePos = (
  e: Event,
  container?: HTMLElement | null,
): MousePosition => {
  const mouseEvent = e as MouseEvent;
  if (container) {
    const bounds = container.getBoundingClientRect();
    return {
      x: mouseEvent.clientX - bounds.left,
      y: mouseEvent.clientY - bounds.top,
    };
  }
  return { x: mouseEvent.clientX, y: mouseEvent.clientY };
};

const Crosshair: React.FC<CrosshairProps> = ({
  color = "white",
  containerRef = null,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const lineHorizontalRef = useRef<HTMLDivElement>(null);
  const lineVerticalRef = useRef<HTMLDivElement>(null);
  const filterXRef = useRef<SVGFETurbulenceElement>(null);
  const filterYRef = useRef<SVGFETurbulenceElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (ev: Event) => {
      const mouseEvent = ev as MouseEvent;
      mouseRef.current = getMousePos(mouseEvent, containerRef?.current);
      if (containerRef?.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        if (
          mouseEvent.clientX < bounds.left ||
          mouseEvent.clientX > bounds.right ||
          mouseEvent.clientY < bounds.top ||
          mouseEvent.clientY > bounds.bottom
        ) {
          gsap.to(
            [lineHorizontalRef.current, lineVerticalRef.current].filter(
              Boolean,
            ),
            { opacity: 0 },
          );
        } else {
          gsap.to(
            [lineHorizontalRef.current, lineVerticalRef.current].filter(
              Boolean,
            ),
            { opacity: 1 },
          );
        }
      }
    };

    const target: HTMLElement | Document = document;
    target.addEventListener("mousemove", handleMouseMove);

    const renderedStyles: {
      [key: string]: { previous: number; current: number; amt: number };
    } = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 },
    };

    gsap.set(
      [lineHorizontalRef.current, lineVerticalRef.current].filter(Boolean),
      { opacity: 0 },
    );

    const onMouseMove = () => {
      renderedStyles.tx.previous = renderedStyles.tx.current =
        mouseRef.current.x;
      renderedStyles.ty.previous = renderedStyles.ty.current =
        mouseRef.current.y;

      gsap.to(
        [lineHorizontalRef.current, lineVerticalRef.current].filter(Boolean),
        {
          duration: 0.9,
          ease: "Power3.easeOut",
          opacity: 1,
        },
      );

      requestAnimationFrame(render);

      target.removeEventListener("mousemove", onMouseMove);
    };

    target.addEventListener("mousemove", onMouseMove);

    const primitiveValues = { turbulence: 0 };

    const tl = gsap
      .timeline({
        paused: true,
        onStart: () => {
          if (lineHorizontalRef.current) {
            lineHorizontalRef.current.style.filter = "url(#filter-noise-x)";
          }
          if (lineVerticalRef.current) {
            lineVerticalRef.current.style.filter = "url(#filter-noise-y)";
          }
        },
        onUpdate: () => {
          if (filterXRef.current && filterYRef.current) {
            filterXRef.current.setAttribute(
              "baseFrequency",
              primitiveValues.turbulence.toString(),
            );
            filterYRef.current.setAttribute(
              "baseFrequency",
              primitiveValues.turbulence.toString(),
            );
          }
        },
        onComplete: () => {
          if (lineHorizontalRef.current && lineVerticalRef.current) {
            lineHorizontalRef.current.style.filter = "none";
            lineVerticalRef.current.style.filter = "none";
          }
        },
      })
      .to(primitiveValues, {
        duration: 0.5,
        ease: "power1",
        startAt: { turbulence: 1 },
        turbulence: 0,
      });

    const enter = () => tl.restart();
    const leave = () => {
      tl.progress(1).kill();
    };

    const render = () => {
      renderedStyles.tx.current = mouseRef.current.x;
      renderedStyles.ty.current = mouseRef.current.y;

      for (const key in renderedStyles) {
        const style = renderedStyles[key];
        style.previous = lerp(style.previous, style.current, style.amt);
      }

      if (lineHorizontalRef.current && lineVerticalRef.current) {
        gsap.set(lineVerticalRef.current, { x: renderedStyles.tx.previous });
        gsap.set(lineHorizontalRef.current, { y: renderedStyles.ty.previous });
      }

      requestAnimationFrame(render);
    };

    const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
    });

    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      target.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className={`${
        containerRef ? "absolute" : "fixed"
      } pointer-events-none top-0 left-0 z-[10000] h-full w-full`}
    >
      <svg className="absolute top-0 left-0 h-full w-full">
        <defs>
          <filter id="filter-noise-x">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.000001"
              numOctaves="1"
              ref={filterXRef}
            />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
          <filter id="filter-noise-y">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.000001"
              numOctaves="1"
              ref={filterYRef}
            />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
        </defs>
      </svg>
      <div
        ref={lineHorizontalRef}
        className={`pointer-events-none absolute h-px w-full translate-y-1/2 transform opacity-0`}
        style={{ background: color }}
      ></div>
      <div
        ref={lineVerticalRef}
        className={`pointer-events-none absolute h-full w-px translate-x-1/2 transform opacity-0`}
        style={{ background: color }}
      ></div>
    </div>
  );
};

const CrosshairContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed top-0 left-0 z-20 hidden h-screen w-full sm:block"
    >
      <Crosshair
        containerRef={containerRef as React.RefObject<HTMLElement>}
        color="#e1fc30"
      />
    </div>
  );
};

export default CrosshairContainer;
