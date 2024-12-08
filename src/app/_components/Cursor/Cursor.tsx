"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorFollowerRef = useRef<HTMLSpanElement>(null);
  const cursorFollowerDotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let xp = 0,
      yp = 0;
    let xpDot = 0,
      ypDot = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const intervalId = setInterval(() => {
      xp += (mouseX - xp) / 10;
      yp += (mouseY - yp) / 10;

      if (cursorFollowerRef.current) {
        cursorFollowerRef.current.style.left = `${xp}px`;
        cursorFollowerRef.current.style.top = `${yp}px`;
      }
    }, 5);

    const intervalDotId = setInterval(() => {
      xpDot += (mouseX - xpDot) / 5;
      ypDot += (mouseY - ypDot) / 5;

      if (cursorFollowerDotRef.current) {
        cursorFollowerDotRef.current.style.left = `${xpDot}px`;
        cursorFollowerDotRef.current.style.top = `${ypDot}px`;
      }
    }, 2.5);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
      clearInterval(intervalDotId);
    };
  }, []);

  return (
    <>
      <span ref={cursorFollowerRef} className="cursorFollower"></span>
      <span ref={cursorFollowerDotRef} className="cursorFollowerDot"></span>
    </>
  );
}
