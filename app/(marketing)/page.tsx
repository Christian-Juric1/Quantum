"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.3]);

  return (
    <div ref={ref} className="relative">
      {/* Background gradient orb - subtle parallax effect */}
      <motion.div
        className="fixed -z-10 top-1/3 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
        style={{
          opacity: backgroundOpacity,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* Landing Page */}
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 relative overfolw-hidden">
          {/* Gradient ellipses */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10" />

          <div className="">
            <h1 className="">Quantum</h1>
            <p className=""></p>
            <div className="">
              {/* <Button key="" variant="" size="" onClick={() => {}} aria-label="" className="">Get Started</Button> */}
              {/* <Button key="" variant="" size="" onClick={() => {}} aria-label="" className="">Learn More</Button> */}

              {/* <Link key="" aria-label="" className="">Get Started</Link> */}
              {/* <Link key="" aria-label="" className="">Learn More</Link> */}
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="">
          <div className=""></div>
        </section>

        {/* Feature Section */}
        <section className="">
          <div className=""></div>
        </section>

        {/* Module Section */}
        <section className="">
          <div className=""></div>
        </section>

        {/* About Section */}
        <section className="">
          <div className=""></div>
        </section>
      </main>
    </div>
  );
}
