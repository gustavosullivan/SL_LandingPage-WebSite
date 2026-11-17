"use client";

import { useEffect, useRef } from "react";

export function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      return;
    }
    video.play().catch(() => {});
  }, []);

  return (
    <section id="sobre" className="relative overflow-hidden bg-navy-deep text-paper md:min-h-[78svh]">
      <video
        ref={videoRef}
        className="block h-auto w-full md:absolute md:inset-0 md:h-full md:object-cover md:object-[center_25%]"
        autoPlay
        muted
        loop
        playsInline
        poster="/sobre-poster.jpg"
        preload="metadata"
      >
        <source src="/sobre.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-navy-deep/85 via-navy-deep/45 to-navy-deep/20 md:block"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col justify-end px-6 py-8 md:min-h-[78svh] md:px-10 md:pt-28 md:pb-16 lg:px-16">
        <p className="text-xs font-semibold tracking-[0.24em] text-gold-soft uppercase">Sobre nós</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-semibold md:text-6xl">
          Uma casa presente
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/90 md:text-lg">
          A Funerária São Luiz acompanha famílias de Passo Fundo há 50 anos.
          O trabalho é de presença: acolher com respeito, explicar com clareza e conduzir
          cada etapa sem pressa.
        </p>
        <p className="mt-3 max-w-2xl pr-28 text-base leading-relaxed text-paper/80 md:pr-40 md:text-lg">
          A equipe fica disponível a qualquer hora. Da organização do funeral aos planos
          preventivos e à cremação — também para pets —, o cuidado segue o mesmo: a família
          amparada em um momento difícil.
        </p>
      </div>

      <img
        src="/brand/50-anos.png"
        alt="50 anos"
        className="pointer-events-none absolute right-4 bottom-4 z-20 h-16 w-auto brightness-0 invert md:right-8 md:bottom-8 md:h-24"
      />
    </section>
  );
}
