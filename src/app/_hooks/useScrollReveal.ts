'use client';

import { useEffect } from "react";

type ScrollRevealOptions = {
    threshold?: number;
    rootMargin?: string;
};

export function useScrollReveal(
    revealClass: string,
    visibleClass: string,
    options?: ScrollRevealOptions
) {
    const threshold = options?.threshold ?? 0.2;
    const rootMargin = options?.rootMargin ?? "0px 0px -80px 0px";

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const selector = `.${revealClass}`.replace(/\s+/g, ".");
        const elements = document.querySelectorAll(selector);

        if (!elements.length) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            elements.forEach((el) => el.classList.add(visibleClass));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(visibleClass);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [revealClass, visibleClass, threshold, rootMargin]);
}
