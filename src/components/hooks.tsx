"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import { useRef } from "react";

export default function MotionHooksExample() {
  const features = [
    {
      title: "Hello world",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quaerat labore nostrum quia nihil, quibusdam quidem! Assumenda deserunt, porro aut, sequi dolorem minus labore, vel quaerat quidem ea suscipit eaque.",
    },
    {
      title: "Hello Gay",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quaerat labore nostrum quia nihil, quibusdam quidem! Assumenda deserunt, porro aut, sequi dolorem minus labore, vel quaerat quidem ea suscipit eaque.",
    },
  ];
  return (
    <div className=" w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-10 max-w-4xl">
        {features.map((feature) => (
          <Card feature={feature} key={feature.title} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ feature }: { feature: { title: string; para: string } }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const translateOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 0]
  );

  return (
    <div className="grid grid-cols-2 gap-10 py-40" ref={ref}>
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-3xl font-bold italic">{feature.title}</h1>
        <p className="text-neutral-500">{feature.para}</p>
      </div>
      <motion.div
        style={{
          y: translateContent,
          opacity: translateOpacity,
        }}
        className="w-80 h-80 bg-blue-500 rounded-2xl"
      ></motion.div>
    </div>
  );
};
