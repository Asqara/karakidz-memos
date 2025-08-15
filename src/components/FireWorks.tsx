"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Fireworks({ duration = 3 }) {
  useEffect(() => {
    let end = Date.now() + duration * 1000;

    (function frame() {
      // Ledakan kiri-kanan
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, [duration]);

  return null; // Tidak ada tampilan visual, langsung render kembang api
}
